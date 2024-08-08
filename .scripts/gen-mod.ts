import { fromFileUrl, globToRegExp, join, relative } from "@std/path";
import { flatMap } from "@core/iterutil/async/flat-map";

const decoder = new TextDecoder();

const excludes = [
  "mod.ts",
  "*_test.ts",
  "*_bench.ts",
  "_*.ts",
];

type DenoDocEntry = {
  name: string;
  location: {
    filename: string;
  };
  declarationKind: string;
  jsDoc: {
    doc: string;
  };
  kind: string;
};

function isDenoDocEntry(x: unknown): x is DenoDocEntry {
  if (x == null || typeof x !== "object") return false;
  if (typeof (x as DenoDocEntry).name !== "string") return false;
  if (typeof (x as DenoDocEntry).location !== "object") return false;
  if (typeof (x as DenoDocEntry).location.filename !== "string") return false;
  if (typeof (x as DenoDocEntry).declarationKind !== "string") return false;
  if (typeof (x as DenoDocEntry).jsDoc !== "object") return false;
  if (typeof (x as DenoDocEntry).jsDoc.doc !== "string") return false;
  if (typeof (x as DenoDocEntry).kind !== "string") return false;
  return true;
}

async function listDenoDocEntries(path: string): Promise<DenoDocEntry[]> {
  const cmd = new Deno.Command(Deno.execPath(), {
    args: ["doc", "--json", path],
    stdout: "piped",
    stderr: "piped",
  });
  const { success, stdout, stderr } = await cmd.output();
  if (!success) {
    throw new Error(decoder.decode(stderr));
  }
  const json = JSON.parse(decoder.decode(stdout));
  if (!Array.isArray(json)) {
    throw new Error(`Expected array but got ${JSON.stringify(json)}`);
  }
  return json.filter(isDenoDocEntry);
}

async function* iterModules(path: string): AsyncIterable<string> {
  const patterns = excludes.map((p) => globToRegExp(p));
  for await (const entry of Deno.readDir(path)) {
    if (!entry.isFile || !entry.name.endsWith(".ts")) continue;
    if (patterns.some((p) => p.test(entry.name))) continue;
    yield join(path, entry.name);
  }
}

async function generateModTs(
  namespace: string,
): Promise<void> {
  const path = fromFileUrl(import.meta.resolve(`../${namespace}/`));
  const exports = (await Array.fromAsync(
    flatMap(iterModules(path), (x) => listDenoDocEntries(x)),
  ))
    .filter((x) => x.kind === "function")
    .filter((x) => x.declarationKind === "export")
    .filter((x) => x.name.startsWith(namespace))
    .map((x) => ({
      path: relative(path, fromFileUrl(x.location.filename)),
      name: x.name,
      doc: x.jsDoc.doc,
    }))
    .toSorted((a, b) => a.name.localeCompare(b.name));
  const lines = [
    "// NOTE: This file is generated by gen-mod.ts",
    ...exports.map((x) => {
      return `import { ${x.name} } from "./${x.path}";`;
    }),
    "",
    `export const ${namespace}: {`,
    ...exports.flatMap((x) => {
      return [
        "  /**",
        ...x.doc.split("\n").map((line) => `   * ${line}`.trimEnd()),
        "   */",
        `  ${x.name.replace(namespace, "")}: typeof ${x.name};`.trimEnd(),
      ];
    }),
    "} = {",
    ...exports.flatMap((x) => {
      return [
        `  ${x.name.replace(namespace, "")}: ${x.name},`.trimEnd(),
      ];
    }),
    "};",
  ];
  await Deno.writeTextFile(join(path, "mod.ts"), lines.join("\n") + "\n");
}

async function main(): Promise<void> {
  await generateModTs("is");
  await generateModTs("as");
}

if (import.meta.main) {
  main().catch((err) => {
    console.error(err);
    Deno.exit(1);
  });
}
