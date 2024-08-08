// NOTE: This file is generated by gen-mod.ts
import { isAny } from "./any.ts";
import { isArray } from "./array.ts";
import { isArrayOf } from "./array_of.ts";
import { isAsyncFunction } from "./async_function.ts";
import { isBigint } from "./bigint.ts";
import { isBoolean } from "./boolean.ts";
import { isFunction } from "./function.ts";
import { isInstanceOf } from "./instance_of.ts";
import { isIntersectionOf } from "./intersection_of.ts";
import { isLiteralOf } from "./literal_of.ts";
import { isLiteralOneOf } from "./literal_one_of.ts";
import { isMap } from "./map.ts";
import { isMapOf } from "./map_of.ts";
import { isNull } from "./null.ts";
import { isNullish } from "./nullish.ts";
import { isNumber } from "./number.ts";
import { isObjectOf } from "./object_of.ts";
import { isOmitOf } from "./omit_of.ts";
import { isParametersOf } from "./parameters_of.ts";
import { isPartialOf } from "./partial_of.ts";
import { isPickOf } from "./pick_of.ts";
import { isPrimitive } from "./primitive.ts";
import { isReadonlyOf } from "./readonly_of.ts";
import { isRecord } from "./record.ts";
import { isRecordObject } from "./record_object.ts";
import { isRecordObjectOf } from "./record_object_of.ts";
import { isRecordOf } from "./record_of.ts";
import { isRequiredOf } from "./required_of.ts";
import { isSet } from "./set.ts";
import { isSetOf } from "./set_of.ts";
import { isStrictOf } from "./strict_of.ts";
import { isString } from "./string.ts";
import { isSymbol } from "./symbol.ts";
import { isSyncFunction } from "./sync_function.ts";
import { isTupleOf } from "./tuple_of.ts";
import { isUndefined } from "./undefined.ts";
import { isUniformTupleOf } from "./uniform_tuple_of.ts";
import { isUnionOf } from "./union_of.ts";
import { isUnknown } from "./unknown.ts";

export const is: {
  /**
   * Assume `x is `any` and always return `true` regardless of the type of `x`.
   *
   * Use {@linkcode isUnknown} to assume that a value is `unknown`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a = "a";
   * if (is.Any(a)) {
   *   const _: any = a;
   * }
   * ```
   */
  Any: typeof isAny;
  /**
   * Return `true` if the type of `x` is `unknown[]`.
   *
   * Use {@linkcode isArrayOf} to check if the type of `x` is an array of `T`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = [0, 1, 2];
   * if (is.Array(a)) {
   *   const _: unknown[] = a;
   * }
   * ```
   */
  Array: typeof isArray;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `T[]`.
   *
   * Use {@linkcode isArray} to check if the type of `x` is an array of `unknown`.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.ArrayOf(is.String);
   * const a: unknown = ["a", "b", "c"];
   * if (isMyType(a)) {
   *   const _: string[] = a;
   * }
   * ```
   */
  ArrayOf: typeof isArrayOf;
  /**
   * Return `true` if the type of `x` is `function` (async function).
   *
   * Use {@linkcode isFunction} to check if the type of `x` is a function.
   * Use {@linkcode isSyncFunction} to check if the type of `x` is a synchronous function.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = async () => {};
   * if (is.AsyncFunction(a)) {
   *   const _: ((...args: unknown[]) => Promise<unknown>) = a;
   * }
   * ```
   */
  AsyncFunction: typeof isAsyncFunction;
  /**
   * Return `true` if the type of `x` is `bigint`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = 0n;
   * if (is.Bigint(a)) {
   *   const _: bigint = a;
   * }
   * ```
   */
  Bigint: typeof isBigint;
  /**
   * Return `true` if the type of `x` is `boolean`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = true;
   * if (is.Boolean(a)) {
   *   const _: boolean = a;
   * }
   * ```
   */
  Boolean: typeof isBoolean;
  /**
   * Return `true` if the type of `x` is `function`.
   *
   * Use {@linkcode isSyncFunction} to check if the type of `x` is a synchronous function.
   * Use {@linkcode isAsyncFunction} to check if the type of `x` is an asynchronous function.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = () => {};
   * if (is.Function(a)) {
   *   const _: ((...args: unknown[]) => unknown) = a;
   * }
   * ```
   */
  Function: typeof isFunction;
  /**
   * Return `true` if the type of `x` is instance of `ctor`.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.InstanceOf(Date);
   * const a: unknown = new Date();
   * if (isMyType(a)) {
   *   const _: Date = a;
   * }
   * ```
   */
  InstanceOf: typeof isInstanceOf;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `IntersectionOf<T>`.
   *
   * Use {@linkcode isUnionOf} to check if the type of `x` is a union of `T`.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.IntersectionOf([
   *   is.ObjectOf({ a: is.Number }),
   *   is.ObjectOf({ b: is.String }),
   * ]);
   * const a: unknown = { a: 0, b: "a" };
   * if (isMyType(a)) {
   *   const _: { a: number } & { b: string } = a;
   * }
   * ```
   *
   * Depending on the version of TypeScript and how values are provided, it may be necessary to add `as const` to the array
   * used as `preds`. If a type error occurs, try adding `as const` as follows:
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const preds = [
   *   is.ObjectOf({ a: is.Number }),
   *   is.ObjectOf({ b: is.String }),
   * ] as const
   * const isMyType = is.IntersectionOf(preds);
   * const a: unknown = { a: 0, b: "a" };
   * if (isMyType(a)) {
   *   const _: { a: number } & { b: string } = a;
   * }
   * ```
   */
  IntersectionOf: typeof isIntersectionOf;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is a literal type of `pred`.
   *
   * Use {@linkcode isLiteral} to check if the type of `x` is a literal type.
   * Use {@linkcode isLiteralOneOf} to check if the type of `x` is one of the literal type of `Primitive[]`.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.LiteralOf("hello");
   * const a: unknown = "hello";
   * if (isMyType(a)) {
   *   const _: "hello" = a;
   * }
   * ```
   */
  LiteralOf: typeof isLiteralOf;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is one of literal type in `preds`.
   *
   * Use {@linkcode isLiteral} to check if the type of `x` is a literal type.
   * Use {@linkcode isLiteralOf} to check if the type of `x` is a literal type of `Primitive`.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.LiteralOneOf(["hello", "world"] as const);
   * const a: unknown = "hello";
   * if (isMyType(a)) {
   *   const _: "hello" | "world" = a;
   * }
   * ```
   */
  LiteralOneOf: typeof isLiteralOneOf;
  /**
   * Return `true` if the type of `x` is `Map<unknown, unknown>`.
   *
   * Use {@linkcode isMapOf} to check if the type of `x` is a map of `T`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = new Map([["a", 0], ["b", 1]]);
   * if (is.Map(a)) {
   *   const _: Map<unknown, unknown> = a;
   * }
   * ```
   */
  Map: typeof isMap;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `Map<K, T>`.
   *
   * Use {@linkcode isMap} to check if the type of `x` is a map of `unknown`.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.MapOf(is.Number);
   * const a: unknown = new Map([["a", 0], ["b", 1]]);
   * if (isMyType(a)) {
   *   const _: Map<unknown, number> = a;
   * }
   * ```
   *
   * With predicate function for keys:
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.MapOf(is.Number, is.String);
   * const a: unknown = new Map([["a", 0], ["b", 1]]);
   * if (isMyType(a)) {
   *   const _: Map<string, number> = a;
   * }
   * ```
   */
  MapOf: typeof isMapOf;
  /**
   * Return `true` if the type of `x` is `null`.
   *
   * Use {@linkcode isUndefined} to check if the type of `x` is `undefined`.
   * Use {@linkcode isNullish} to check if the type of `x` is `null` or `undefined`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = null;
   * if (is.Null(a)) {
   *   const _: null = a;
   * }
   * ```
   */
  Null: typeof isNull;
  /**
   * Return `true` if the type of `x` is `null` or `undefined`.
   *
   * Use {@linkcode isNull} to check if the type of `x` is `null`.
   * Use {@linkcode isUndefined} to check if the type of `x` is `undefined`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = null;
   * if (is.Nullish(a)) {
   *   const _: (null | undefined) = a;
   * }
   * ```
   */
  Nullish: typeof isNullish;
  /**
   * Return `true` if the type of `x` is `number`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = 0;
   * if (is.Number(a)) {
   *   const _: number = a;
   * }
   * ```
   */
  Number: typeof isNumber;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `ObjectOf<T>`.
   *
   * Use {@linkcode isRecordOf} if you want to check if the type of `x` is a record of `T`.
   *
   * If {@linkcode asOptional} is specified in the predicate function in `predObj`, the property becomes optional.
   * If {@linkcode asReadonly} is specified in the predicate function in `predObj`, the property becomes readonly.
   *
   * The number of keys of `x` must be greater than or equal to the number of keys of `predObj`.
   * Use {@linkcode isStrictOf} if you want to check the exact number of keys.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { as, is } from "@core/unknownutil";
   *
   * const isMyType = is.ObjectOf({
   *   a: is.Number,
   *   b: is.String,
   *   c: as.Optional(is.Boolean),
   *   d: as.Readonly(is.String),
   * });
   * const a: unknown = { a: 0, b: "a", d: "d" };
   * if (isMyType(a)) {
   *   const _: { a: number; b: string; c?: boolean | undefined, readonly d: string } = a;
   * }
   * ```
   */
  ObjectOf: typeof isObjectOf;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `Omit<ObjectOf<T>, K>`.
   *
   * It only supports modifing a predicate function annotated with `IsPredObj`, usually returned by the followings
   *
   * - {@linkcode isIntersectionOf}
   * - {@linkcode isObjectOf}
   * - {@linkcode isOmitOf}
   * - {@linkcode isPartialOf}
   * - {@linkcode isPickOf}
   * - {@linkcode isReadonlyOf}
   * - {@linkcode isRequiredOf}
   * - {@linkcode isStrictOf}
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```typescript
   * import { as, is } from "@core/unknownutil";
   *
   * const isMyType = is.OmitOf(is.ObjectOf({
   *   a: is.Number,
   *   b: is.String,
   *   c: as.Optional(is.Boolean),
   * }), ["a", "c"]);
   * const a: unknown = { a: 0, b: "a" };
   * if (isMyType(a)) {
   *   const _: { b: string } = a;
   * }
   * ```
   */
  OmitOf: typeof isOmitOf;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `ParametersOf<T>` or `ParametersOf<T, E>`.
   *
   * This is similar to {@linkcode isTupleOf}, but if {@linkcode asOptional} is specified at the trailing, the trailing elements becomes optional and makes variable-length tuple.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { as, is } from "@core/unknownutil";
   *
   * const isMyType = is.ParametersOf([
   *   is.Number,
   *   as.Optional(is.String),
   *   is.Boolean,
   *   as.Optional(is.Number),
   *   as.Optional(is.String),
   *   as.Optional(is.Boolean),
   * ] as const);
   * const a: unknown = [0, undefined, "a"];
   * if (isMyType(a)) {
   *   const _: [number, string | undefined, boolean, number?, string?, boolean?] = a;
   * }
   * ```
   *
   * With `predElse`:
   *
   * ```ts
   * import { as, is } from "@core/unknownutil";
   *
   * const isMyType = is.ParametersOf(
   *   [
   *     is.Number,
   *     as.Optional(is.String),
   *     as.Optional(is.Boolean),
   *   ] as const,
   *   is.ArrayOf(is.Number),
   * );
   * const a: unknown = [0, "a", true, 0, 1, 2];
   * if (isMyType(a)) {
   *   const _: [number, string?, boolean?, ...number[]] = a;
   * }
   * ```
   *
   * Depending on the version of TypeScript and how values are provided, it may be necessary to add `as const` to the array
   * used as `predTup`. If a type error occurs, try adding `as const` as follows:
   *
   * ```ts
   * import { as, is } from "@core/unknownutil";
   *
   * const predTup = [is.Number, is.String, as.Optional(is.Boolean)] as const;
   * const isMyType = is.ParametersOf(predTup);
   * const a: unknown = [0, "a"];
   * if (isMyType(a)) {
   *   const _: [number, string, boolean?] = a;
   * }
   * ```
   */
  ParametersOf: typeof isParametersOf;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `Partial<ObjectOf<T>>`.
   *
   * It only supports modifing a predicate function annotated with `IsPredObj`, usually returned by the followings
   *
   * - {@linkcode isIntersectionOf}
   * - {@linkcode isObjectOf}
   * - {@linkcode isOmitOf}
   * - {@linkcode isPartialOf}
   * - {@linkcode isPickOf}
   * - {@linkcode isReadonlyOf}
   * - {@linkcode isRequiredOf}
   * - {@linkcode isStrictOf}
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```typescript
   * import { as, is } from "@core/unknownutil";
   *
   * const isMyType = is.PartialOf(is.ObjectOf({
   *   a: is.Number,
   *   b: is.UnionOf([is.String, is.Undefined]),
   *   c: as.Optional(is.Boolean),
   * }));
   * const a: unknown = { a: undefined, other: "other" };
   * if (isMyType(a)) {
   *   const _: { a?: number | undefined; b?: string | undefined; c?: boolean | undefined } = a;
   * }
   * ```
   */
  PartialOf: typeof isPartialOf;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `Pick<ObjectOf<T>, K>`.
   *
   * It only supports modifing a predicate function annotated with `IsPredObj`, usually returned by the followings
   *
   * - {@linkcode isIntersectionOf}
   * - {@linkcode isObjectOf}
   * - {@linkcode isOmitOf}
   * - {@linkcode isPartialOf}
   * - {@linkcode isPickOf}
   * - {@linkcode isReadonlyOf}
   * - {@linkcode isRequiredOf}
   * - {@linkcode isStrictOf}
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```typescript
   * import { as, is } from "@core/unknownutil";
   *
   * const isMyType = is.PickOf(is.ObjectOf({
   *   a: is.Number,
   *   b: is.String,
   *   c: as.Optional(is.Boolean),
   * }), ["a", "c"]);
   * const a: unknown = { a: 0, b: "a" };
   * if (isMyType(a)) {
   *   const _: { a: number; c?: boolean | undefined } = a;
   * }
   * ```
   */
  PickOf: typeof isPickOf;
  /**
   * Return `true` if the type of `x` is `Primitive`.
   *
   * ```ts
   * import { is, type Primitive } from "@core/unknownutil";
   *
   * const a: unknown = 0;
   * if (is.Primitive(a)) {
   *   const _: Primitive = a;
   * }
   * ```
   */
  Primitive: typeof isPrimitive;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `Readonly<ObjectOf<T>>`.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```typescript
   * import { as, is } from "@core/unknownutil";
   *
   * const isMyType = is.ReadonlyOf(is.ObjectOf({
   *   a: is.Number,
   *   b: is.UnionOf([is.String, is.Undefined]),
   *   c: as.Readonly(is.Boolean),
   * }));
   * const a: unknown = { a: 0, b: "b", c: true };
   * if (isMyType(a)) {
   *   const _: { readonly a: number; readonly b: string | undefined; readonly c: boolean } = a;
   * }
   * ```
   */
  ReadonlyOf: typeof isReadonlyOf;
  /**
   * Return `true` if the type of `x` satisfies `Record<PropertyKey, unknown>`.
   *
   * Note that this function returns `true` for ambiguous instances like `Set`, `Map`, `Date`, `Promise`, etc.
   * Use {@linkcode isRecordObject} instead if you want to check if `x` is an instance of `Object`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = {"a": 0, "b": 1};
   * if (is.Record(a)) {
   *   const _: Record<PropertyKey, unknown> = a;
   * }
   *
   * const b: unknown = new Set();
   * if (is.Record(b)) {
   *   const _: Record<PropertyKey, unknown> = b;
   * }
   * ```
   */
  Record: typeof isRecord;
  /**
   * Return `true` if the type of `x` is an object instance that satisfies `Record<PropertyKey, unknown>`.
   *
   * Note that this function check if the `x` is an instance of `Object`.
   * Use {@linkcode isRecord} instead if you want to check if the `x` satisfies the `Record<PropertyKey, unknown>` type.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = {"a": 0, "b": 1};
   * if (is.RecordObject(a)) {
   *   const _: Record<PropertyKey, unknown> = a;
   * }
   *
   * const b: unknown = new Set();
   * if (is.RecordObject(b)) {
   *   // b is not a raw object, so it is not narrowed
   * }
   * ```
   */
  RecordObject: typeof isRecordObject;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is an Object instance that satisfies `Record<K, T>`.
   *
   * Note that this function check if the `x` is an instance of `Object`.
   * Use {@linkcode isRecordOf} instead if you want to check if the `x` satisfies the `Record<K, T>` type.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.RecordObjectOf(is.Number);
   * const a: unknown = {"a": 0, "b": 1};
   * if (isMyType(a)) {
   *   const _: Record<PropertyKey, number> = a;
   * }
   * ```
   *
   * With predicate function for keys:
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.RecordObjectOf(is.Number, is.String);
   * const a: unknown = {"a": 0, "b": 1};
   * if (isMyType(a)) {
   *   const _: Record<string, number> = a;
   * }
   * ```
   */
  RecordObjectOf: typeof isRecordObjectOf;
  /**
   * Return a type predicate function that returns `true` if the type of `x` satisfies `Record<K, T>`.
   *
   * Note that this function only check if the `x` satisfies the `Record<K, T>` type.
   * Use {@linkcode isRecordObjectOf} instead if you want to check if the `x` is an instance of `Object`.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.RecordOf(is.Number);
   * const a: unknown = {"a": 0, "b": 1};
   * if (isMyType(a)) {
   *   const _: Record<PropertyKey, number> = a;
   * }
   * ```
   *
   * With predicate function for keys:
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.RecordOf(is.Number, is.String);
   * const a: unknown = {"a": 0, "b": 1};
   * if (isMyType(a)) {
   *   const _: Record<string, number> = a;
   * }
   * ```
   */
  RecordOf: typeof isRecordOf;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `Required<ObjectOf<T>>`.
   *
   * It only supports modifing a predicate function annotated with `IsPredObj`, usually returned by the followings
   *
   * - {@linkcode isIntersectionOf}
   * - {@linkcode isObjectOf}
   * - {@linkcode isOmitOf}
   * - {@linkcode isPartialOf}
   * - {@linkcode isPickOf}
   * - {@linkcode isReadonlyOf}
   * - {@linkcode isRequiredOf}
   * - {@linkcode isStrictOf}
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```typescript
   * import { as, is } from "@core/unknownutil";
   *
   * const isMyType = is.RequiredOf(is.ObjectOf({
   *   a: is.Number,
   *   b: is.UnionOf([is.String, is.Undefined]),
   *   c: as.Optional(is.Boolean),
   * }));
   * const a: unknown = { a: 0, b: "b", c: true, other: "other" };
   * if (isMyType(a)) {
   *   const _: { a: number; b: string | undefined; c: boolean } = a;
   * }
   * ```
   */
  RequiredOf: typeof isRequiredOf;
  /**
   * Return `true` if the type of `x` is `Set<unknown>`.
   *
   * Use {@linkcode isSetOf} to check if the type of `x` is a set of `T`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = new Set([0, 1, 2]);
   * if (is.Set(a)) {
   *   const _: Set<unknown> = a;
   * }
   * ```
   */
  Set: typeof isSet;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `Set<T>`.
   *
   * Use {@linkcode isSet} to check if the type of `x` is a set of `unknown`.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.SetOf(is.String);
   * const a: unknown = new Set(["a", "b", "c"]);
   * if (isMyType(a)) {
   *   const _: Set<string> = a;
   * }
   * ```
   */
  SetOf: typeof isSetOf;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is strictly follow the `ObjectOf<T>`.
   *
   * It only supports modifing a predicate function annotated with `IsPredObj`, usually returned by the followings
   *
   * - {@linkcode isIntersectionOf}
   * - {@linkcode isObjectOf}
   * - {@linkcode isOmitOf}
   * - {@linkcode isPartialOf}
   * - {@linkcode isPickOf}
   * - {@linkcode isReadonlyOf}
   * - {@linkcode isRequiredOf}
   * - {@linkcode isStrictOf}
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { as, is } from "@core/unknownutil";
   *
   * const isMyType = is.StrictOf(is.ObjectOf({
   *   a: is.Number,
   *   b: is.String,
   *   c: as.Optional(is.Boolean),
   * }));
   * const a: unknown = { a: 0, b: "a", other: "other" };
   * if (isMyType(a)) {
   *   // This block will not be executed because of "other" key in `a`.
   * }
   * ```
   */
  StrictOf: typeof isStrictOf;
  /**
   * Return `true` if the type of `x` is `string`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = "a";
   * if (is.String(a)) {
   *   const _: string = a;
   * }
   * ```
   */
  String: typeof isString;
  /**
   * Return `true` if the type of `x` is `symbol`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = Symbol("symbol");
   * if (is.Symbol(a)) {
   *   const _: symbol = a;
   * }
   * ```
   */
  Symbol: typeof isSymbol;
  /**
   * Return `true` if the type of `x` is `function` (non async function).
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = () => {};
   * if (is.SyncFunction(a)) {
   *   const _: ((...args: unknown[]) => unknown) = a;
   * }
   * ```
   */
  SyncFunction: typeof isSyncFunction;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `TupleOf<T>` or `TupleOf<T, E>`.
   *
   * Use {@linkcode isUniformTupleOf} to check if the type of `x` is a tuple of uniform types.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.TupleOf([is.Number, is.String, is.Boolean]);
   * const a: unknown = [0, "a", true];
   * if (isMyType(a)) {
   *   const _: [number, string, boolean] = a;
   * }
   * ```
   *
   * With `predElse`:
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.TupleOf(
   *   [is.Number, is.String, is.Boolean],
   *   is.ArrayOf(is.Number),
   * );
   * const a: unknown = [0, "a", true, 0, 1, 2];
   * if (isMyType(a)) {
   *   const _: [number, string, boolean, ...number[]] = a;
   * }
   * ```
   *
   * Depending on the version of TypeScript and how values are provided, it may be necessary to add `as const` to the array
   * used as `predTup`. If a type error occurs, try adding `as const` as follows:
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const predTup = [is.Number, is.String, is.Boolean] as const;
   * const isMyType = is.TupleOf(predTup);
   * const a: unknown = [0, "a", true];
   * if (isMyType(a)) {
   *   const _: [number, string, boolean] = a;
   * }
   * ```
   */
  TupleOf: typeof isTupleOf;
  /**
   * Return `true` if the type of `x` is `undefined`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a: unknown = undefined;
   * if (is.Undefined(a)) {
   *   const _: undefined = a;
   * }
   * ```
   */
  Undefined: typeof isUndefined;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `UniformTupleOf<T>`.
   *
   * Use {@linkcode isTupleOf} to check if the type of `x` is a tuple of `T`.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.UniformTupleOf(5);
   * const a: unknown = [0, 1, 2, 3, 4];
   * if (isMyType(a)) {
   *   const _: [unknown, unknown, unknown, unknown, unknown] = a;
   * }
   * ```
   *
   * With predicate function:
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.UniformTupleOf(5, is.Number);
   * const a: unknown = [0, 1, 2, 3, 4];
   * if (isMyType(a)) {
   *   const _: [number, number, number, number, number] = a;
   * }
   * ```
   */
  UniformTupleOf: typeof isUniformTupleOf;
  /**
   * Return a type predicate function that returns `true` if the type of `x` is `UnionOf<T>`.
   *
   * Use {@linkcode isIntersectionOf} to check if the type of `x` is an intersection of `T`.
   *
   * To enhance performance, users are advised to cache the return value of this function and mitigate the creation cost.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const isMyType = is.UnionOf([is.Number, is.String, is.Boolean]);
   * const a: unknown = 0;
   * if (isMyType(a)) {
   *   const _: number | string | boolean = a;
   * }
   * ```
   *
   * Depending on the version of TypeScript and how values are provided, it may be necessary to add `as const` to the array
   * used as `preds`. If a type error occurs, try adding `as const` as follows:
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const preds = [is.Number, is.String, is.Boolean] as const;
   * const isMyType = is.UnionOf(preds);
   * const a: unknown = 0;
   * if (isMyType(a)) {
   *   const _: number | string | boolean = a;
   * }
   * ```
   */
  UnionOf: typeof isUnionOf;
  /**
   * Assume `x` is `unknown` and always return `true` regardless of the type of `x`.
   *
   * Use {@linkcode isAny} to assume that the type of `x` is `any`.
   *
   * ```ts
   * import { is } from "@core/unknownutil";
   *
   * const a = "a";
   * if (is.Unknown(a)) {
   *   const _: unknown = a;
   * }
   * ```
   */
  Unknown: typeof isUnknown;
} = {
  Any: isAny,
  Array: isArray,
  ArrayOf: isArrayOf,
  AsyncFunction: isAsyncFunction,
  Bigint: isBigint,
  Boolean: isBoolean,
  Function: isFunction,
  InstanceOf: isInstanceOf,
  IntersectionOf: isIntersectionOf,
  LiteralOf: isLiteralOf,
  LiteralOneOf: isLiteralOneOf,
  Map: isMap,
  MapOf: isMapOf,
  Null: isNull,
  Nullish: isNullish,
  Number: isNumber,
  ObjectOf: isObjectOf,
  OmitOf: isOmitOf,
  ParametersOf: isParametersOf,
  PartialOf: isPartialOf,
  PickOf: isPickOf,
  Primitive: isPrimitive,
  ReadonlyOf: isReadonlyOf,
  Record: isRecord,
  RecordObject: isRecordObject,
  RecordObjectOf: isRecordObjectOf,
  RecordOf: isRecordOf,
  RequiredOf: isRequiredOf,
  Set: isSet,
  SetOf: isSetOf,
  StrictOf: isStrictOf,
  String: isString,
  Symbol: isSymbol,
  SyncFunction: isSyncFunction,
  TupleOf: isTupleOf,
  Undefined: isUndefined,
  UniformTupleOf: isUniformTupleOf,
  UnionOf: isUnionOf,
  Unknown: isUnknown,
};
