
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model GroupOrder
 * 
 */
export type GroupOrder = $Result.DefaultSelection<Prisma.$GroupOrderPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model BankAccount
 * 
 */
export type BankAccount = $Result.DefaultSelection<Prisma.$BankAccountPayload>
/**
 * Model PaymentTransfer
 * 
 */
export type PaymentTransfer = $Result.DefaultSelection<Prisma.$PaymentTransferPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Platform: {
  GRAB: 'GRAB',
  SHOPEE: 'SHOPEE'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const OrderStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const GroupOrderStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  LOCKED: 'LOCKED',
  PLACED: 'PLACED',
  CONFIRMED: 'CONFIRMED',
  PREPARING: 'PREPARING',
  DELIVERING: 'DELIVERING',
  DELIVERED: 'DELIVERED',
  PAYMENT_PENDING: 'PAYMENT_PENDING',
  PAYMENT_VERIFIED: 'PAYMENT_VERIFIED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type GroupOrderStatus = (typeof GroupOrderStatus)[keyof typeof GroupOrderStatus]


export const GroupRole: {
  OWNER: 'OWNER',
  MEMBER: 'MEMBER'
};

export type GroupRole = (typeof GroupRole)[keyof typeof GroupRole]


export const PaymentMethod: {
  CASH: 'CASH',
  CREDIT_CARD: 'CREDIT_CARD',
  PAYPAL: 'PAYPAL',
  STRIPE: 'STRIPE',
  GRAB_PAY: 'GRAB_PAY',
  SHOPEE_PAY: 'SHOPEE_PAY',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentTransferStatus: {
  PENDING: 'PENDING',
  TRANSFERRED: 'TRANSFERRED',
  VERIFIED: 'VERIFIED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  DISPUTED: 'DISPUTED'
};

export type PaymentTransferStatus = (typeof PaymentTransferStatus)[keyof typeof PaymentTransferStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type GroupOrderStatus = $Enums.GroupOrderStatus

export const GroupOrderStatus: typeof $Enums.GroupOrderStatus

export type GroupRole = $Enums.GroupRole

export const GroupRole: typeof $Enums.GroupRole

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentTransferStatus = $Enums.PaymentTransferStatus

export const PaymentTransferStatus: typeof $Enums.PaymentTransferStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupOrder`: Exposes CRUD operations for the **GroupOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupOrders
    * const groupOrders = await prisma.groupOrder.findMany()
    * ```
    */
  get groupOrder(): Prisma.GroupOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankAccount`: Exposes CRUD operations for the **BankAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccounts
    * const bankAccounts = await prisma.bankAccount.findMany()
    * ```
    */
  get bankAccount(): Prisma.BankAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentTransfer`: Exposes CRUD operations for the **PaymentTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentTransfers
    * const paymentTransfers = await prisma.paymentTransfer.findMany()
    * ```
    */
  get paymentTransfer(): Prisma.PaymentTransferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Restaurant: 'Restaurant',
    Product: 'Product',
    Order: 'Order',
    GroupOrder: 'GroupOrder',
    GroupMember: 'GroupMember',
    BankAccount: 'BankAccount',
    PaymentTransfer: 'PaymentTransfer',
    OrderItem: 'OrderItem',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "restaurant" | "product" | "order" | "groupOrder" | "groupMember" | "bankAccount" | "paymentTransfer" | "orderItem" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      GroupOrder: {
        payload: Prisma.$GroupOrderPayload<ExtArgs>
        fields: Prisma.GroupOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupOrderPayload>
          }
          findFirst: {
            args: Prisma.GroupOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupOrderPayload>
          }
          findMany: {
            args: Prisma.GroupOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupOrderPayload>[]
          }
          create: {
            args: Prisma.GroupOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupOrderPayload>
          }
          createMany: {
            args: Prisma.GroupOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupOrderPayload>[]
          }
          delete: {
            args: Prisma.GroupOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupOrderPayload>
          }
          update: {
            args: Prisma.GroupOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupOrderPayload>
          }
          deleteMany: {
            args: Prisma.GroupOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupOrderPayload>[]
          }
          upsert: {
            args: Prisma.GroupOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupOrderPayload>
          }
          aggregate: {
            args: Prisma.GroupOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupOrder>
          }
          groupBy: {
            args: Prisma.GroupOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupOrderCountArgs<ExtArgs>
            result: $Utils.Optional<GroupOrderCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      BankAccount: {
        payload: Prisma.$BankAccountPayload<ExtArgs>
        fields: Prisma.BankAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findFirst: {
            args: Prisma.BankAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findMany: {
            args: Prisma.BankAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          create: {
            args: Prisma.BankAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          createMany: {
            args: Prisma.BankAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          delete: {
            args: Prisma.BankAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          update: {
            args: Prisma.BankAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          deleteMany: {
            args: Prisma.BankAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          upsert: {
            args: Prisma.BankAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          aggregate: {
            args: Prisma.BankAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankAccount>
          }
          groupBy: {
            args: Prisma.BankAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankAccountCountArgs<ExtArgs>
            result: $Utils.Optional<BankAccountCountAggregateOutputType> | number
          }
        }
      }
      PaymentTransfer: {
        payload: Prisma.$PaymentTransferPayload<ExtArgs>
        fields: Prisma.PaymentTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransferPayload>
          }
          findFirst: {
            args: Prisma.PaymentTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransferPayload>
          }
          findMany: {
            args: Prisma.PaymentTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransferPayload>[]
          }
          create: {
            args: Prisma.PaymentTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransferPayload>
          }
          createMany: {
            args: Prisma.PaymentTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentTransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransferPayload>[]
          }
          delete: {
            args: Prisma.PaymentTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransferPayload>
          }
          update: {
            args: Prisma.PaymentTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransferPayload>
          }
          deleteMany: {
            args: Prisma.PaymentTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentTransferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransferPayload>[]
          }
          upsert: {
            args: Prisma.PaymentTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransferPayload>
          }
          aggregate: {
            args: Prisma.PaymentTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentTransfer>
          }
          groupBy: {
            args: Prisma.PaymentTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentTransferCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentTransferCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    restaurant?: RestaurantOmit
    product?: ProductOmit
    order?: OrderOmit
    groupOrder?: GroupOrderOmit
    groupMember?: GroupMemberOmit
    bankAccount?: BankAccountOmit
    paymentTransfer?: PaymentTransferOmit
    orderItem?: OrderItemOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    bankAccounts: number
    groupMembers: number
    groupOrders: number
    paymentTransfersFrom: number
    paymentTransfersTo: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    bankAccounts?: boolean | UserCountOutputTypeCountBankAccountsArgs
    groupMembers?: boolean | UserCountOutputTypeCountGroupMembersArgs
    groupOrders?: boolean | UserCountOutputTypeCountGroupOrdersArgs
    paymentTransfersFrom?: boolean | UserCountOutputTypeCountPaymentTransfersFromArgs
    paymentTransfersTo?: boolean | UserCountOutputTypeCountPaymentTransfersToArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentTransfersFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentTransfersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransferWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    products: number
    groupOrders: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | RestaurantCountOutputTypeCountProductsArgs
    groupOrders?: boolean | RestaurantCountOutputTypeCountGroupOrdersArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountGroupOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupOrderWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orderItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type GroupOrderCountOutputType
   */

  export type GroupOrderCountOutputType = {
    members: number
    payments: number
  }

  export type GroupOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupOrderCountOutputTypeCountMembersArgs
    payments?: boolean | GroupOrderCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * GroupOrderCountOutputType without action
   */
  export type GroupOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrderCountOutputType
     */
    select?: GroupOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupOrderCountOutputType without action
   */
  export type GroupOrderCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * GroupOrderCountOutputType without action
   */
  export type GroupOrderCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransferWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    bankAccounts?: boolean | User$bankAccountsArgs<ExtArgs>
    groupMembers?: boolean | User$groupMembersArgs<ExtArgs>
    groupOrders?: boolean | User$groupOrdersArgs<ExtArgs>
    paymentTransfersFrom?: boolean | User$paymentTransfersFromArgs<ExtArgs>
    paymentTransfersTo?: boolean | User$paymentTransfersToArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    bankAccounts?: boolean | User$bankAccountsArgs<ExtArgs>
    groupMembers?: boolean | User$groupMembersArgs<ExtArgs>
    groupOrders?: boolean | User$groupOrdersArgs<ExtArgs>
    paymentTransfersFrom?: boolean | User$paymentTransfersFromArgs<ExtArgs>
    paymentTransfersTo?: boolean | User$paymentTransfersToArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      bankAccounts: Prisma.$BankAccountPayload<ExtArgs>[]
      groupMembers: Prisma.$GroupMemberPayload<ExtArgs>[]
      groupOrders: Prisma.$GroupOrderPayload<ExtArgs>[]
      paymentTransfersFrom: Prisma.$PaymentTransferPayload<ExtArgs>[]
      paymentTransfersTo: Prisma.$PaymentTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bankAccounts<T extends User$bankAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$bankAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupMembers<T extends User$groupMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$groupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupOrders<T extends User$groupOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$groupOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentTransfersFrom<T extends User$paymentTransfersFromArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentTransfersFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentTransfersTo<T extends User$paymentTransfersToArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentTransfersToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.bankAccounts
   */
  export type User$bankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    cursor?: BankAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * User.groupMembers
   */
  export type User$groupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User.groupOrders
   */
  export type User$groupOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
    where?: GroupOrderWhereInput
    orderBy?: GroupOrderOrderByWithRelationInput | GroupOrderOrderByWithRelationInput[]
    cursor?: GroupOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupOrderScalarFieldEnum | GroupOrderScalarFieldEnum[]
  }

  /**
   * User.paymentTransfersFrom
   */
  export type User$paymentTransfersFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    where?: PaymentTransferWhereInput
    orderBy?: PaymentTransferOrderByWithRelationInput | PaymentTransferOrderByWithRelationInput[]
    cursor?: PaymentTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentTransferScalarFieldEnum | PaymentTransferScalarFieldEnum[]
  }

  /**
   * User.paymentTransfersTo
   */
  export type User$paymentTransfersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    where?: PaymentTransferWhereInput
    orderBy?: PaymentTransferOrderByWithRelationInput | PaymentTransferOrderByWithRelationInput[]
    cursor?: PaymentTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentTransferScalarFieldEnum | PaymentTransferScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: string | null
    name: string | null
    platform: $Enums.Platform | null
    grabLink: string | null
    shopeeLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    platform: $Enums.Platform | null
    grabLink: string | null
    shopeeLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    name: number
    platform: number
    grabLink: number
    shopeeLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantMinAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    grabLink?: true
    shopeeLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    grabLink?: true
    shopeeLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    grabLink?: true
    shopeeLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: string
    name: string
    platform: $Enums.Platform
    grabLink: string | null
    shopeeLink: string | null
    createdAt: Date
    updatedAt: Date
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform?: boolean
    grabLink?: boolean
    shopeeLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Restaurant$productsArgs<ExtArgs>
    groupOrders?: boolean | Restaurant$groupOrdersArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform?: boolean
    grabLink?: boolean
    shopeeLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform?: boolean
    grabLink?: boolean
    shopeeLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectScalar = {
    id?: boolean
    name?: boolean
    platform?: boolean
    grabLink?: boolean
    shopeeLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "platform" | "grabLink" | "shopeeLink" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurant"]>
  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Restaurant$productsArgs<ExtArgs>
    groupOrders?: boolean | Restaurant$groupOrdersArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RestaurantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      groupOrders: Prisma.$GroupOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      platform: $Enums.Platform
      grabLink: string | null
      shopeeLink: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {RestaurantCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants and returns the data updated in the database.
     * @param {RestaurantUpdateManyAndReturnArgs} args - Arguments to update many Restaurants.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestaurantUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Restaurant$productsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupOrders<T extends Restaurant$groupOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$groupOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurant model
   */
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'String'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly platform: FieldRef<"Restaurant", 'Platform'>
    readonly grabLink: FieldRef<"Restaurant", 'String'>
    readonly shopeeLink: FieldRef<"Restaurant", 'String'>
    readonly createdAt: FieldRef<"Restaurant", 'DateTime'>
    readonly updatedAt: FieldRef<"Restaurant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant createManyAndReturn
   */
  export type RestaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant updateManyAndReturn
   */
  export type RestaurantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Restaurant.products
   */
  export type Restaurant$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Restaurant.groupOrders
   */
  export type Restaurant$groupOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
    where?: GroupOrderWhereInput
    orderBy?: GroupOrderOrderByWithRelationInput | GroupOrderOrderByWithRelationInput[]
    cursor?: GroupOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupOrderScalarFieldEnum | GroupOrderScalarFieldEnum[]
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    stock: number | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    stock: number | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    imageUrl: number
    stock: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    stock?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    stock?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    stock?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: number
    imageUrl: string | null
    stock: number
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    stock?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    stock?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    stock?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    stock?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "imageUrl" | "stock" | "restaurantId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: number
      imageUrl: string | null
      stock: number
      restaurantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly restaurantId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.OrderStatus | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.OrderStatus | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    total: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    status: $Enums.OrderStatus
    total: number
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "total" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: $Enums.OrderStatus
      total: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Order$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.payment
   */
  export type Order$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model GroupOrder
   */

  export type AggregateGroupOrder = {
    _count: GroupOrderCountAggregateOutputType | null
    _avg: GroupOrderAvgAggregateOutputType | null
    _sum: GroupOrderSumAggregateOutputType | null
    _min: GroupOrderMinAggregateOutputType | null
    _max: GroupOrderMaxAggregateOutputType | null
  }

  export type GroupOrderAvgAggregateOutputType = {
    totalAmount: number | null
    deliveryFee: number | null
    serviceFee: number | null
    tax: number | null
  }

  export type GroupOrderSumAggregateOutputType = {
    totalAmount: number | null
    deliveryFee: number | null
    serviceFee: number | null
    tax: number | null
  }

  export type GroupOrderMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    ownerId: string | null
    restaurantId: string | null
    platform: $Enums.Platform | null
    platformOrderId: string | null
    status: $Enums.GroupOrderStatus | null
    totalAmount: number | null
    deliveryFee: number | null
    serviceFee: number | null
    tax: number | null
    lockedAt: Date | null
    placedAt: Date | null
    deliveredAt: Date | null
    paymentDeadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupOrderMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    ownerId: string | null
    restaurantId: string | null
    platform: $Enums.Platform | null
    platformOrderId: string | null
    status: $Enums.GroupOrderStatus | null
    totalAmount: number | null
    deliveryFee: number | null
    serviceFee: number | null
    tax: number | null
    lockedAt: Date | null
    placedAt: Date | null
    deliveredAt: Date | null
    paymentDeadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupOrderCountAggregateOutputType = {
    id: number
    groupId: number
    ownerId: number
    restaurantId: number
    platform: number
    platformOrderId: number
    status: number
    totalAmount: number
    deliveryFee: number
    serviceFee: number
    tax: number
    lockedAt: number
    placedAt: number
    deliveredAt: number
    paymentDeadline: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupOrderAvgAggregateInputType = {
    totalAmount?: true
    deliveryFee?: true
    serviceFee?: true
    tax?: true
  }

  export type GroupOrderSumAggregateInputType = {
    totalAmount?: true
    deliveryFee?: true
    serviceFee?: true
    tax?: true
  }

  export type GroupOrderMinAggregateInputType = {
    id?: true
    groupId?: true
    ownerId?: true
    restaurantId?: true
    platform?: true
    platformOrderId?: true
    status?: true
    totalAmount?: true
    deliveryFee?: true
    serviceFee?: true
    tax?: true
    lockedAt?: true
    placedAt?: true
    deliveredAt?: true
    paymentDeadline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupOrderMaxAggregateInputType = {
    id?: true
    groupId?: true
    ownerId?: true
    restaurantId?: true
    platform?: true
    platformOrderId?: true
    status?: true
    totalAmount?: true
    deliveryFee?: true
    serviceFee?: true
    tax?: true
    lockedAt?: true
    placedAt?: true
    deliveredAt?: true
    paymentDeadline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupOrderCountAggregateInputType = {
    id?: true
    groupId?: true
    ownerId?: true
    restaurantId?: true
    platform?: true
    platformOrderId?: true
    status?: true
    totalAmount?: true
    deliveryFee?: true
    serviceFee?: true
    tax?: true
    lockedAt?: true
    placedAt?: true
    deliveredAt?: true
    paymentDeadline?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupOrder to aggregate.
     */
    where?: GroupOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupOrders to fetch.
     */
    orderBy?: GroupOrderOrderByWithRelationInput | GroupOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupOrders
    **/
    _count?: true | GroupOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupOrderMaxAggregateInputType
  }

  export type GetGroupOrderAggregateType<T extends GroupOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupOrder[P]>
      : GetScalarType<T[P], AggregateGroupOrder[P]>
  }




  export type GroupOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupOrderWhereInput
    orderBy?: GroupOrderOrderByWithAggregationInput | GroupOrderOrderByWithAggregationInput[]
    by: GroupOrderScalarFieldEnum[] | GroupOrderScalarFieldEnum
    having?: GroupOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupOrderCountAggregateInputType | true
    _avg?: GroupOrderAvgAggregateInputType
    _sum?: GroupOrderSumAggregateInputType
    _min?: GroupOrderMinAggregateInputType
    _max?: GroupOrderMaxAggregateInputType
  }

  export type GroupOrderGroupByOutputType = {
    id: string
    groupId: string
    ownerId: string
    restaurantId: string
    platform: $Enums.Platform
    platformOrderId: string | null
    status: $Enums.GroupOrderStatus
    totalAmount: number
    deliveryFee: number
    serviceFee: number
    tax: number
    lockedAt: Date | null
    placedAt: Date | null
    deliveredAt: Date | null
    paymentDeadline: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GroupOrderCountAggregateOutputType | null
    _avg: GroupOrderAvgAggregateOutputType | null
    _sum: GroupOrderSumAggregateOutputType | null
    _min: GroupOrderMinAggregateOutputType | null
    _max: GroupOrderMaxAggregateOutputType | null
  }

  type GetGroupOrderGroupByPayload<T extends GroupOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupOrderGroupByOutputType[P]>
            : GetScalarType<T[P], GroupOrderGroupByOutputType[P]>
        }
      >
    >


  export type GroupOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    ownerId?: boolean
    restaurantId?: boolean
    platform?: boolean
    platformOrderId?: boolean
    status?: boolean
    totalAmount?: boolean
    deliveryFee?: boolean
    serviceFee?: boolean
    tax?: boolean
    lockedAt?: boolean
    placedAt?: boolean
    deliveredAt?: boolean
    paymentDeadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    members?: boolean | GroupOrder$membersArgs<ExtArgs>
    payments?: boolean | GroupOrder$paymentsArgs<ExtArgs>
    _count?: boolean | GroupOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupOrder"]>

  export type GroupOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    ownerId?: boolean
    restaurantId?: boolean
    platform?: boolean
    platformOrderId?: boolean
    status?: boolean
    totalAmount?: boolean
    deliveryFee?: boolean
    serviceFee?: boolean
    tax?: boolean
    lockedAt?: boolean
    placedAt?: boolean
    deliveredAt?: boolean
    paymentDeadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupOrder"]>

  export type GroupOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    ownerId?: boolean
    restaurantId?: boolean
    platform?: boolean
    platformOrderId?: boolean
    status?: boolean
    totalAmount?: boolean
    deliveryFee?: boolean
    serviceFee?: boolean
    tax?: boolean
    lockedAt?: boolean
    placedAt?: boolean
    deliveredAt?: boolean
    paymentDeadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupOrder"]>

  export type GroupOrderSelectScalar = {
    id?: boolean
    groupId?: boolean
    ownerId?: boolean
    restaurantId?: boolean
    platform?: boolean
    platformOrderId?: boolean
    status?: boolean
    totalAmount?: boolean
    deliveryFee?: boolean
    serviceFee?: boolean
    tax?: boolean
    lockedAt?: boolean
    placedAt?: boolean
    deliveredAt?: boolean
    paymentDeadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "ownerId" | "restaurantId" | "platform" | "platformOrderId" | "status" | "totalAmount" | "deliveryFee" | "serviceFee" | "tax" | "lockedAt" | "placedAt" | "deliveredAt" | "paymentDeadline" | "createdAt" | "updatedAt", ExtArgs["result"]["groupOrder"]>
  export type GroupOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    members?: boolean | GroupOrder$membersArgs<ExtArgs>
    payments?: boolean | GroupOrder$paymentsArgs<ExtArgs>
    _count?: boolean | GroupOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type GroupOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $GroupOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupOrder"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      payments: Prisma.$PaymentTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      ownerId: string
      restaurantId: string
      platform: $Enums.Platform
      platformOrderId: string | null
      status: $Enums.GroupOrderStatus
      totalAmount: number
      deliveryFee: number
      serviceFee: number
      tax: number
      lockedAt: Date | null
      placedAt: Date | null
      deliveredAt: Date | null
      paymentDeadline: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groupOrder"]>
    composites: {}
  }

  type GroupOrderGetPayload<S extends boolean | null | undefined | GroupOrderDefaultArgs> = $Result.GetResult<Prisma.$GroupOrderPayload, S>

  type GroupOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupOrderCountAggregateInputType | true
    }

  export interface GroupOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupOrder'], meta: { name: 'GroupOrder' } }
    /**
     * Find zero or one GroupOrder that matches the filter.
     * @param {GroupOrderFindUniqueArgs} args - Arguments to find a GroupOrder
     * @example
     * // Get one GroupOrder
     * const groupOrder = await prisma.groupOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupOrderFindUniqueArgs>(args: SelectSubset<T, GroupOrderFindUniqueArgs<ExtArgs>>): Prisma__GroupOrderClient<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupOrderFindUniqueOrThrowArgs} args - Arguments to find a GroupOrder
     * @example
     * // Get one GroupOrder
     * const groupOrder = await prisma.groupOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupOrderClient<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupOrderFindFirstArgs} args - Arguments to find a GroupOrder
     * @example
     * // Get one GroupOrder
     * const groupOrder = await prisma.groupOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupOrderFindFirstArgs>(args?: SelectSubset<T, GroupOrderFindFirstArgs<ExtArgs>>): Prisma__GroupOrderClient<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupOrderFindFirstOrThrowArgs} args - Arguments to find a GroupOrder
     * @example
     * // Get one GroupOrder
     * const groupOrder = await prisma.groupOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupOrderClient<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupOrders
     * const groupOrders = await prisma.groupOrder.findMany()
     * 
     * // Get first 10 GroupOrders
     * const groupOrders = await prisma.groupOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupOrderWithIdOnly = await prisma.groupOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupOrderFindManyArgs>(args?: SelectSubset<T, GroupOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupOrder.
     * @param {GroupOrderCreateArgs} args - Arguments to create a GroupOrder.
     * @example
     * // Create one GroupOrder
     * const GroupOrder = await prisma.groupOrder.create({
     *   data: {
     *     // ... data to create a GroupOrder
     *   }
     * })
     * 
     */
    create<T extends GroupOrderCreateArgs>(args: SelectSubset<T, GroupOrderCreateArgs<ExtArgs>>): Prisma__GroupOrderClient<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupOrders.
     * @param {GroupOrderCreateManyArgs} args - Arguments to create many GroupOrders.
     * @example
     * // Create many GroupOrders
     * const groupOrder = await prisma.groupOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupOrderCreateManyArgs>(args?: SelectSubset<T, GroupOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupOrders and returns the data saved in the database.
     * @param {GroupOrderCreateManyAndReturnArgs} args - Arguments to create many GroupOrders.
     * @example
     * // Create many GroupOrders
     * const groupOrder = await prisma.groupOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupOrders and only return the `id`
     * const groupOrderWithIdOnly = await prisma.groupOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupOrder.
     * @param {GroupOrderDeleteArgs} args - Arguments to delete one GroupOrder.
     * @example
     * // Delete one GroupOrder
     * const GroupOrder = await prisma.groupOrder.delete({
     *   where: {
     *     // ... filter to delete one GroupOrder
     *   }
     * })
     * 
     */
    delete<T extends GroupOrderDeleteArgs>(args: SelectSubset<T, GroupOrderDeleteArgs<ExtArgs>>): Prisma__GroupOrderClient<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupOrder.
     * @param {GroupOrderUpdateArgs} args - Arguments to update one GroupOrder.
     * @example
     * // Update one GroupOrder
     * const groupOrder = await prisma.groupOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupOrderUpdateArgs>(args: SelectSubset<T, GroupOrderUpdateArgs<ExtArgs>>): Prisma__GroupOrderClient<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupOrders.
     * @param {GroupOrderDeleteManyArgs} args - Arguments to filter GroupOrders to delete.
     * @example
     * // Delete a few GroupOrders
     * const { count } = await prisma.groupOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupOrderDeleteManyArgs>(args?: SelectSubset<T, GroupOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupOrders
     * const groupOrder = await prisma.groupOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupOrderUpdateManyArgs>(args: SelectSubset<T, GroupOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupOrders and returns the data updated in the database.
     * @param {GroupOrderUpdateManyAndReturnArgs} args - Arguments to update many GroupOrders.
     * @example
     * // Update many GroupOrders
     * const groupOrder = await prisma.groupOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupOrders and only return the `id`
     * const groupOrderWithIdOnly = await prisma.groupOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupOrder.
     * @param {GroupOrderUpsertArgs} args - Arguments to update or create a GroupOrder.
     * @example
     * // Update or create a GroupOrder
     * const groupOrder = await prisma.groupOrder.upsert({
     *   create: {
     *     // ... data to create a GroupOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupOrder we want to update
     *   }
     * })
     */
    upsert<T extends GroupOrderUpsertArgs>(args: SelectSubset<T, GroupOrderUpsertArgs<ExtArgs>>): Prisma__GroupOrderClient<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupOrderCountArgs} args - Arguments to filter GroupOrders to count.
     * @example
     * // Count the number of GroupOrders
     * const count = await prisma.groupOrder.count({
     *   where: {
     *     // ... the filter for the GroupOrders we want to count
     *   }
     * })
    **/
    count<T extends GroupOrderCountArgs>(
      args?: Subset<T, GroupOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupOrderAggregateArgs>(args: Subset<T, GroupOrderAggregateArgs>): Prisma.PrismaPromise<GetGroupOrderAggregateType<T>>

    /**
     * Group by GroupOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupOrderGroupByArgs['orderBy'] }
        : { orderBy?: GroupOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupOrder model
   */
  readonly fields: GroupOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends GroupOrder$membersArgs<ExtArgs> = {}>(args?: Subset<T, GroupOrder$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends GroupOrder$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, GroupOrder$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupOrder model
   */
  interface GroupOrderFieldRefs {
    readonly id: FieldRef<"GroupOrder", 'String'>
    readonly groupId: FieldRef<"GroupOrder", 'String'>
    readonly ownerId: FieldRef<"GroupOrder", 'String'>
    readonly restaurantId: FieldRef<"GroupOrder", 'String'>
    readonly platform: FieldRef<"GroupOrder", 'Platform'>
    readonly platformOrderId: FieldRef<"GroupOrder", 'String'>
    readonly status: FieldRef<"GroupOrder", 'GroupOrderStatus'>
    readonly totalAmount: FieldRef<"GroupOrder", 'Float'>
    readonly deliveryFee: FieldRef<"GroupOrder", 'Float'>
    readonly serviceFee: FieldRef<"GroupOrder", 'Float'>
    readonly tax: FieldRef<"GroupOrder", 'Float'>
    readonly lockedAt: FieldRef<"GroupOrder", 'DateTime'>
    readonly placedAt: FieldRef<"GroupOrder", 'DateTime'>
    readonly deliveredAt: FieldRef<"GroupOrder", 'DateTime'>
    readonly paymentDeadline: FieldRef<"GroupOrder", 'DateTime'>
    readonly createdAt: FieldRef<"GroupOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupOrder findUnique
   */
  export type GroupOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
    /**
     * Filter, which GroupOrder to fetch.
     */
    where: GroupOrderWhereUniqueInput
  }

  /**
   * GroupOrder findUniqueOrThrow
   */
  export type GroupOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
    /**
     * Filter, which GroupOrder to fetch.
     */
    where: GroupOrderWhereUniqueInput
  }

  /**
   * GroupOrder findFirst
   */
  export type GroupOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
    /**
     * Filter, which GroupOrder to fetch.
     */
    where?: GroupOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupOrders to fetch.
     */
    orderBy?: GroupOrderOrderByWithRelationInput | GroupOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupOrders.
     */
    cursor?: GroupOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupOrders.
     */
    distinct?: GroupOrderScalarFieldEnum | GroupOrderScalarFieldEnum[]
  }

  /**
   * GroupOrder findFirstOrThrow
   */
  export type GroupOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
    /**
     * Filter, which GroupOrder to fetch.
     */
    where?: GroupOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupOrders to fetch.
     */
    orderBy?: GroupOrderOrderByWithRelationInput | GroupOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupOrders.
     */
    cursor?: GroupOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupOrders.
     */
    distinct?: GroupOrderScalarFieldEnum | GroupOrderScalarFieldEnum[]
  }

  /**
   * GroupOrder findMany
   */
  export type GroupOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
    /**
     * Filter, which GroupOrders to fetch.
     */
    where?: GroupOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupOrders to fetch.
     */
    orderBy?: GroupOrderOrderByWithRelationInput | GroupOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupOrders.
     */
    cursor?: GroupOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupOrders.
     */
    skip?: number
    distinct?: GroupOrderScalarFieldEnum | GroupOrderScalarFieldEnum[]
  }

  /**
   * GroupOrder create
   */
  export type GroupOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupOrder.
     */
    data: XOR<GroupOrderCreateInput, GroupOrderUncheckedCreateInput>
  }

  /**
   * GroupOrder createMany
   */
  export type GroupOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupOrders.
     */
    data: GroupOrderCreateManyInput | GroupOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupOrder createManyAndReturn
   */
  export type GroupOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * The data used to create many GroupOrders.
     */
    data: GroupOrderCreateManyInput | GroupOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupOrder update
   */
  export type GroupOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupOrder.
     */
    data: XOR<GroupOrderUpdateInput, GroupOrderUncheckedUpdateInput>
    /**
     * Choose, which GroupOrder to update.
     */
    where: GroupOrderWhereUniqueInput
  }

  /**
   * GroupOrder updateMany
   */
  export type GroupOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupOrders.
     */
    data: XOR<GroupOrderUpdateManyMutationInput, GroupOrderUncheckedUpdateManyInput>
    /**
     * Filter which GroupOrders to update
     */
    where?: GroupOrderWhereInput
    /**
     * Limit how many GroupOrders to update.
     */
    limit?: number
  }

  /**
   * GroupOrder updateManyAndReturn
   */
  export type GroupOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * The data used to update GroupOrders.
     */
    data: XOR<GroupOrderUpdateManyMutationInput, GroupOrderUncheckedUpdateManyInput>
    /**
     * Filter which GroupOrders to update
     */
    where?: GroupOrderWhereInput
    /**
     * Limit how many GroupOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupOrder upsert
   */
  export type GroupOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupOrder to update in case it exists.
     */
    where: GroupOrderWhereUniqueInput
    /**
     * In case the GroupOrder found by the `where` argument doesn't exist, create a new GroupOrder with this data.
     */
    create: XOR<GroupOrderCreateInput, GroupOrderUncheckedCreateInput>
    /**
     * In case the GroupOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupOrderUpdateInput, GroupOrderUncheckedUpdateInput>
  }

  /**
   * GroupOrder delete
   */
  export type GroupOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
    /**
     * Filter which GroupOrder to delete.
     */
    where: GroupOrderWhereUniqueInput
  }

  /**
   * GroupOrder deleteMany
   */
  export type GroupOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupOrders to delete
     */
    where?: GroupOrderWhereInput
    /**
     * Limit how many GroupOrders to delete.
     */
    limit?: number
  }

  /**
   * GroupOrder.members
   */
  export type GroupOrder$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupOrder.payments
   */
  export type GroupOrder$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    where?: PaymentTransferWhereInput
    orderBy?: PaymentTransferOrderByWithRelationInput | PaymentTransferOrderByWithRelationInput[]
    cursor?: PaymentTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentTransferScalarFieldEnum | PaymentTransferScalarFieldEnum[]
  }

  /**
   * GroupOrder without action
   */
  export type GroupOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupOrder
     */
    select?: GroupOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupOrder
     */
    omit?: GroupOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupOrderInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _avg: GroupMemberAvgAggregateOutputType | null
    _sum: GroupMemberSumAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberAvgAggregateOutputType = {
    cartTotal: number | null
  }

  export type GroupMemberSumAggregateOutputType = {
    cartTotal: number | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: string | null
    groupOrderId: string | null
    userId: string | null
    role: $Enums.GroupRole | null
    cartTotal: number | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: string | null
    groupOrderId: string | null
    userId: string | null
    role: $Enums.GroupRole | null
    cartTotal: number | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    groupOrderId: number
    userId: number
    role: number
    cartTotal: number
    joinedAt: number
    leftAt: number
    _all: number
  }


  export type GroupMemberAvgAggregateInputType = {
    cartTotal?: true
  }

  export type GroupMemberSumAggregateInputType = {
    cartTotal?: true
  }

  export type GroupMemberMinAggregateInputType = {
    id?: true
    groupOrderId?: true
    userId?: true
    role?: true
    cartTotal?: true
    joinedAt?: true
    leftAt?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    groupOrderId?: true
    userId?: true
    role?: true
    cartTotal?: true
    joinedAt?: true
    leftAt?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    groupOrderId?: true
    userId?: true
    role?: true
    cartTotal?: true
    joinedAt?: true
    leftAt?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _avg?: GroupMemberAvgAggregateInputType
    _sum?: GroupMemberSumAggregateInputType
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: string
    groupOrderId: string
    userId: string
    role: $Enums.GroupRole
    cartTotal: number
    joinedAt: Date
    leftAt: Date | null
    _count: GroupMemberCountAggregateOutputType | null
    _avg: GroupMemberAvgAggregateOutputType | null
    _sum: GroupMemberSumAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupOrderId?: boolean
    userId?: boolean
    role?: boolean
    cartTotal?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupOrderId?: boolean
    userId?: boolean
    role?: boolean
    cartTotal?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupOrderId?: boolean
    userId?: boolean
    role?: boolean
    cartTotal?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    id?: boolean
    groupOrderId?: boolean
    userId?: boolean
    role?: boolean
    cartTotal?: boolean
    joinedAt?: boolean
    leftAt?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupOrderId" | "userId" | "role" | "cartTotal" | "joinedAt" | "leftAt", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      groupOrder: Prisma.$GroupOrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupOrderId: string
      userId: string
      role: $Enums.GroupRole
      cartTotal: number
      joinedAt: Date
      leftAt: Date | null
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMemberUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupOrder<T extends GroupOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupOrderDefaultArgs<ExtArgs>>): Prisma__GroupOrderClient<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'String'>
    readonly groupOrderId: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly role: FieldRef<"GroupMember", 'GroupRole'>
    readonly cartTotal: FieldRef<"GroupMember", 'Float'>
    readonly joinedAt: FieldRef<"GroupMember", 'DateTime'>
    readonly leftAt: FieldRef<"GroupMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember updateManyAndReturn
   */
  export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model BankAccount
   */

  export type AggregateBankAccount = {
    _count: BankAccountCountAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  export type BankAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bankName: string | null
    accountNumber: string | null
    accountHolderName: string | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bankName: string | null
    accountNumber: string | null
    accountHolderName: string | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankAccountCountAggregateOutputType = {
    id: number
    userId: number
    bankName: number
    accountNumber: number
    accountHolderName: number
    isDefault: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BankAccountMinAggregateInputType = {
    id?: true
    userId?: true
    bankName?: true
    accountNumber?: true
    accountHolderName?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    bankName?: true
    accountNumber?: true
    accountHolderName?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankAccountCountAggregateInputType = {
    id?: true
    userId?: true
    bankName?: true
    accountNumber?: true
    accountHolderName?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BankAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccount to aggregate.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankAccounts
    **/
    _count?: true | BankAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountMaxAggregateInputType
  }

  export type GetBankAccountAggregateType<T extends BankAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccount[P]>
      : GetScalarType<T[P], AggregateBankAccount[P]>
  }




  export type BankAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithAggregationInput | BankAccountOrderByWithAggregationInput[]
    by: BankAccountScalarFieldEnum[] | BankAccountScalarFieldEnum
    having?: BankAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountCountAggregateInputType | true
    _min?: BankAccountMinAggregateInputType
    _max?: BankAccountMaxAggregateInputType
  }

  export type BankAccountGroupByOutputType = {
    id: string
    userId: string
    bankName: string
    accountNumber: string
    accountHolderName: string
    isDefault: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BankAccountCountAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  type GetBankAccountGroupByPayload<T extends BankAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
        }
      >
    >


  export type BankAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountHolderName?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountHolderName?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountHolderName?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountHolderName?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BankAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bankName" | "accountNumber" | "accountHolderName" | "isDefault" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["bankAccount"]>
  export type BankAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BankAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BankAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BankAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bankName: string
      accountNumber: string
      accountHolderName: string
      isDefault: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bankAccount"]>
    composites: {}
  }

  type BankAccountGetPayload<S extends boolean | null | undefined | BankAccountDefaultArgs> = $Result.GetResult<Prisma.$BankAccountPayload, S>

  type BankAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankAccountCountAggregateInputType | true
    }

  export interface BankAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankAccount'], meta: { name: 'BankAccount' } }
    /**
     * Find zero or one BankAccount that matches the filter.
     * @param {BankAccountFindUniqueArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankAccountFindUniqueArgs>(args: SelectSubset<T, BankAccountFindUniqueArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankAccountFindUniqueOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, BankAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankAccountFindFirstArgs>(args?: SelectSubset<T, BankAccountFindFirstArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, BankAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany()
     * 
     * // Get first 10 BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankAccountFindManyArgs>(args?: SelectSubset<T, BankAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankAccount.
     * @param {BankAccountCreateArgs} args - Arguments to create a BankAccount.
     * @example
     * // Create one BankAccount
     * const BankAccount = await prisma.bankAccount.create({
     *   data: {
     *     // ... data to create a BankAccount
     *   }
     * })
     * 
     */
    create<T extends BankAccountCreateArgs>(args: SelectSubset<T, BankAccountCreateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankAccounts.
     * @param {BankAccountCreateManyArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankAccountCreateManyArgs>(args?: SelectSubset<T, BankAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankAccounts and returns the data saved in the database.
     * @param {BankAccountCreateManyAndReturnArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, BankAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankAccount.
     * @param {BankAccountDeleteArgs} args - Arguments to delete one BankAccount.
     * @example
     * // Delete one BankAccount
     * const BankAccount = await prisma.bankAccount.delete({
     *   where: {
     *     // ... filter to delete one BankAccount
     *   }
     * })
     * 
     */
    delete<T extends BankAccountDeleteArgs>(args: SelectSubset<T, BankAccountDeleteArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankAccount.
     * @param {BankAccountUpdateArgs} args - Arguments to update one BankAccount.
     * @example
     * // Update one BankAccount
     * const bankAccount = await prisma.bankAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankAccountUpdateArgs>(args: SelectSubset<T, BankAccountUpdateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankAccounts.
     * @param {BankAccountDeleteManyArgs} args - Arguments to filter BankAccounts to delete.
     * @example
     * // Delete a few BankAccounts
     * const { count } = await prisma.bankAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankAccountDeleteManyArgs>(args?: SelectSubset<T, BankAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankAccountUpdateManyArgs>(args: SelectSubset<T, BankAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts and returns the data updated in the database.
     * @param {BankAccountUpdateManyAndReturnArgs} args - Arguments to update many BankAccounts.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, BankAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankAccount.
     * @param {BankAccountUpsertArgs} args - Arguments to update or create a BankAccount.
     * @example
     * // Update or create a BankAccount
     * const bankAccount = await prisma.bankAccount.upsert({
     *   create: {
     *     // ... data to create a BankAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccount we want to update
     *   }
     * })
     */
    upsert<T extends BankAccountUpsertArgs>(args: SelectSubset<T, BankAccountUpsertArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountCountArgs} args - Arguments to filter BankAccounts to count.
     * @example
     * // Count the number of BankAccounts
     * const count = await prisma.bankAccount.count({
     *   where: {
     *     // ... the filter for the BankAccounts we want to count
     *   }
     * })
    **/
    count<T extends BankAccountCountArgs>(
      args?: Subset<T, BankAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAccountAggregateArgs>(args: Subset<T, BankAccountAggregateArgs>): Prisma.PrismaPromise<GetBankAccountAggregateType<T>>

    /**
     * Group by BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankAccountGroupByArgs['orderBy'] }
        : { orderBy?: BankAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankAccount model
   */
  readonly fields: BankAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankAccount model
   */
  interface BankAccountFieldRefs {
    readonly id: FieldRef<"BankAccount", 'String'>
    readonly userId: FieldRef<"BankAccount", 'String'>
    readonly bankName: FieldRef<"BankAccount", 'String'>
    readonly accountNumber: FieldRef<"BankAccount", 'String'>
    readonly accountHolderName: FieldRef<"BankAccount", 'String'>
    readonly isDefault: FieldRef<"BankAccount", 'Boolean'>
    readonly isActive: FieldRef<"BankAccount", 'Boolean'>
    readonly createdAt: FieldRef<"BankAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"BankAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankAccount findUnique
   */
  export type BankAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findUniqueOrThrow
   */
  export type BankAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findFirst
   */
  export type BankAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findFirstOrThrow
   */
  export type BankAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findMany
   */
  export type BankAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccounts to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount create
   */
  export type BankAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a BankAccount.
     */
    data: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
  }

  /**
   * BankAccount createMany
   */
  export type BankAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankAccount createManyAndReturn
   */
  export type BankAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount update
   */
  export type BankAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a BankAccount.
     */
    data: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
    /**
     * Choose, which BankAccount to update.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount updateMany
   */
  export type BankAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
  }

  /**
   * BankAccount updateManyAndReturn
   */
  export type BankAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount upsert
   */
  export type BankAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the BankAccount to update in case it exists.
     */
    where: BankAccountWhereUniqueInput
    /**
     * In case the BankAccount found by the `where` argument doesn't exist, create a new BankAccount with this data.
     */
    create: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
    /**
     * In case the BankAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
  }

  /**
   * BankAccount delete
   */
  export type BankAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter which BankAccount to delete.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount deleteMany
   */
  export type BankAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccounts to delete
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to delete.
     */
    limit?: number
  }

  /**
   * BankAccount without action
   */
  export type BankAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
  }


  /**
   * Model PaymentTransfer
   */

  export type AggregatePaymentTransfer = {
    _count: PaymentTransferCountAggregateOutputType | null
    _avg: PaymentTransferAvgAggregateOutputType | null
    _sum: PaymentTransferSumAggregateOutputType | null
    _min: PaymentTransferMinAggregateOutputType | null
    _max: PaymentTransferMaxAggregateOutputType | null
  }

  export type PaymentTransferAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentTransferSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentTransferMinAggregateOutputType = {
    id: string | null
    groupOrderId: string | null
    fromUserId: string | null
    toUserId: string | null
    amount: number | null
    status: $Enums.PaymentTransferStatus | null
    transactionId: string | null
    bankName: string | null
    transferDate: Date | null
    verifiedAt: Date | null
    verifiedBy: string | null
    notes: string | null
    screenshotUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentTransferMaxAggregateOutputType = {
    id: string | null
    groupOrderId: string | null
    fromUserId: string | null
    toUserId: string | null
    amount: number | null
    status: $Enums.PaymentTransferStatus | null
    transactionId: string | null
    bankName: string | null
    transferDate: Date | null
    verifiedAt: Date | null
    verifiedBy: string | null
    notes: string | null
    screenshotUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentTransferCountAggregateOutputType = {
    id: number
    groupOrderId: number
    fromUserId: number
    toUserId: number
    amount: number
    status: number
    transactionId: number
    bankName: number
    transferDate: number
    verifiedAt: number
    verifiedBy: number
    notes: number
    screenshotUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentTransferAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentTransferSumAggregateInputType = {
    amount?: true
  }

  export type PaymentTransferMinAggregateInputType = {
    id?: true
    groupOrderId?: true
    fromUserId?: true
    toUserId?: true
    amount?: true
    status?: true
    transactionId?: true
    bankName?: true
    transferDate?: true
    verifiedAt?: true
    verifiedBy?: true
    notes?: true
    screenshotUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentTransferMaxAggregateInputType = {
    id?: true
    groupOrderId?: true
    fromUserId?: true
    toUserId?: true
    amount?: true
    status?: true
    transactionId?: true
    bankName?: true
    transferDate?: true
    verifiedAt?: true
    verifiedBy?: true
    notes?: true
    screenshotUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentTransferCountAggregateInputType = {
    id?: true
    groupOrderId?: true
    fromUserId?: true
    toUserId?: true
    amount?: true
    status?: true
    transactionId?: true
    bankName?: true
    transferDate?: true
    verifiedAt?: true
    verifiedBy?: true
    notes?: true
    screenshotUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTransfer to aggregate.
     */
    where?: PaymentTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransfers to fetch.
     */
    orderBy?: PaymentTransferOrderByWithRelationInput | PaymentTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentTransfers
    **/
    _count?: true | PaymentTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentTransferMaxAggregateInputType
  }

  export type GetPaymentTransferAggregateType<T extends PaymentTransferAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentTransfer[P]>
      : GetScalarType<T[P], AggregatePaymentTransfer[P]>
  }




  export type PaymentTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransferWhereInput
    orderBy?: PaymentTransferOrderByWithAggregationInput | PaymentTransferOrderByWithAggregationInput[]
    by: PaymentTransferScalarFieldEnum[] | PaymentTransferScalarFieldEnum
    having?: PaymentTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentTransferCountAggregateInputType | true
    _avg?: PaymentTransferAvgAggregateInputType
    _sum?: PaymentTransferSumAggregateInputType
    _min?: PaymentTransferMinAggregateInputType
    _max?: PaymentTransferMaxAggregateInputType
  }

  export type PaymentTransferGroupByOutputType = {
    id: string
    groupOrderId: string
    fromUserId: string
    toUserId: string
    amount: number
    status: $Enums.PaymentTransferStatus
    transactionId: string | null
    bankName: string | null
    transferDate: Date | null
    verifiedAt: Date | null
    verifiedBy: string | null
    notes: string | null
    screenshotUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentTransferCountAggregateOutputType | null
    _avg: PaymentTransferAvgAggregateOutputType | null
    _sum: PaymentTransferSumAggregateOutputType | null
    _min: PaymentTransferMinAggregateOutputType | null
    _max: PaymentTransferMaxAggregateOutputType | null
  }

  type GetPaymentTransferGroupByPayload<T extends PaymentTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentTransferGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentTransferGroupByOutputType[P]>
        }
      >
    >


  export type PaymentTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupOrderId?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    amount?: boolean
    status?: boolean
    transactionId?: boolean
    bankName?: boolean
    transferDate?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    notes?: boolean
    screenshotUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransfer"]>

  export type PaymentTransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupOrderId?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    amount?: boolean
    status?: boolean
    transactionId?: boolean
    bankName?: boolean
    transferDate?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    notes?: boolean
    screenshotUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransfer"]>

  export type PaymentTransferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupOrderId?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    amount?: boolean
    status?: boolean
    transactionId?: boolean
    bankName?: boolean
    transferDate?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    notes?: boolean
    screenshotUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransfer"]>

  export type PaymentTransferSelectScalar = {
    id?: boolean
    groupOrderId?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    amount?: boolean
    status?: boolean
    transactionId?: boolean
    bankName?: boolean
    transferDate?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    notes?: boolean
    screenshotUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentTransferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupOrderId" | "fromUserId" | "toUserId" | "amount" | "status" | "transactionId" | "bankName" | "transferDate" | "verifiedAt" | "verifiedBy" | "notes" | "screenshotUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentTransfer"]>
  export type PaymentTransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentTransferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentTransferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupOrder?: boolean | GroupOrderDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentTransfer"
    objects: {
      groupOrder: Prisma.$GroupOrderPayload<ExtArgs>
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupOrderId: string
      fromUserId: string
      toUserId: string
      amount: number
      status: $Enums.PaymentTransferStatus
      transactionId: string | null
      bankName: string | null
      transferDate: Date | null
      verifiedAt: Date | null
      verifiedBy: string | null
      notes: string | null
      screenshotUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentTransfer"]>
    composites: {}
  }

  type PaymentTransferGetPayload<S extends boolean | null | undefined | PaymentTransferDefaultArgs> = $Result.GetResult<Prisma.$PaymentTransferPayload, S>

  type PaymentTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentTransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentTransferCountAggregateInputType | true
    }

  export interface PaymentTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentTransfer'], meta: { name: 'PaymentTransfer' } }
    /**
     * Find zero or one PaymentTransfer that matches the filter.
     * @param {PaymentTransferFindUniqueArgs} args - Arguments to find a PaymentTransfer
     * @example
     * // Get one PaymentTransfer
     * const paymentTransfer = await prisma.paymentTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentTransferFindUniqueArgs>(args: SelectSubset<T, PaymentTransferFindUniqueArgs<ExtArgs>>): Prisma__PaymentTransferClient<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentTransfer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentTransferFindUniqueOrThrowArgs} args - Arguments to find a PaymentTransfer
     * @example
     * // Get one PaymentTransfer
     * const paymentTransfer = await prisma.paymentTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentTransferClient<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransferFindFirstArgs} args - Arguments to find a PaymentTransfer
     * @example
     * // Get one PaymentTransfer
     * const paymentTransfer = await prisma.paymentTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentTransferFindFirstArgs>(args?: SelectSubset<T, PaymentTransferFindFirstArgs<ExtArgs>>): Prisma__PaymentTransferClient<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransferFindFirstOrThrowArgs} args - Arguments to find a PaymentTransfer
     * @example
     * // Get one PaymentTransfer
     * const paymentTransfer = await prisma.paymentTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentTransferClient<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentTransfers
     * const paymentTransfers = await prisma.paymentTransfer.findMany()
     * 
     * // Get first 10 PaymentTransfers
     * const paymentTransfers = await prisma.paymentTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentTransferWithIdOnly = await prisma.paymentTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentTransferFindManyArgs>(args?: SelectSubset<T, PaymentTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentTransfer.
     * @param {PaymentTransferCreateArgs} args - Arguments to create a PaymentTransfer.
     * @example
     * // Create one PaymentTransfer
     * const PaymentTransfer = await prisma.paymentTransfer.create({
     *   data: {
     *     // ... data to create a PaymentTransfer
     *   }
     * })
     * 
     */
    create<T extends PaymentTransferCreateArgs>(args: SelectSubset<T, PaymentTransferCreateArgs<ExtArgs>>): Prisma__PaymentTransferClient<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentTransfers.
     * @param {PaymentTransferCreateManyArgs} args - Arguments to create many PaymentTransfers.
     * @example
     * // Create many PaymentTransfers
     * const paymentTransfer = await prisma.paymentTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentTransferCreateManyArgs>(args?: SelectSubset<T, PaymentTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentTransfers and returns the data saved in the database.
     * @param {PaymentTransferCreateManyAndReturnArgs} args - Arguments to create many PaymentTransfers.
     * @example
     * // Create many PaymentTransfers
     * const paymentTransfer = await prisma.paymentTransfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentTransfers and only return the `id`
     * const paymentTransferWithIdOnly = await prisma.paymentTransfer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentTransferCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentTransfer.
     * @param {PaymentTransferDeleteArgs} args - Arguments to delete one PaymentTransfer.
     * @example
     * // Delete one PaymentTransfer
     * const PaymentTransfer = await prisma.paymentTransfer.delete({
     *   where: {
     *     // ... filter to delete one PaymentTransfer
     *   }
     * })
     * 
     */
    delete<T extends PaymentTransferDeleteArgs>(args: SelectSubset<T, PaymentTransferDeleteArgs<ExtArgs>>): Prisma__PaymentTransferClient<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentTransfer.
     * @param {PaymentTransferUpdateArgs} args - Arguments to update one PaymentTransfer.
     * @example
     * // Update one PaymentTransfer
     * const paymentTransfer = await prisma.paymentTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentTransferUpdateArgs>(args: SelectSubset<T, PaymentTransferUpdateArgs<ExtArgs>>): Prisma__PaymentTransferClient<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentTransfers.
     * @param {PaymentTransferDeleteManyArgs} args - Arguments to filter PaymentTransfers to delete.
     * @example
     * // Delete a few PaymentTransfers
     * const { count } = await prisma.paymentTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentTransferDeleteManyArgs>(args?: SelectSubset<T, PaymentTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentTransfers
     * const paymentTransfer = await prisma.paymentTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentTransferUpdateManyArgs>(args: SelectSubset<T, PaymentTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTransfers and returns the data updated in the database.
     * @param {PaymentTransferUpdateManyAndReturnArgs} args - Arguments to update many PaymentTransfers.
     * @example
     * // Update many PaymentTransfers
     * const paymentTransfer = await prisma.paymentTransfer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentTransfers and only return the `id`
     * const paymentTransferWithIdOnly = await prisma.paymentTransfer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentTransferUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentTransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentTransfer.
     * @param {PaymentTransferUpsertArgs} args - Arguments to update or create a PaymentTransfer.
     * @example
     * // Update or create a PaymentTransfer
     * const paymentTransfer = await prisma.paymentTransfer.upsert({
     *   create: {
     *     // ... data to create a PaymentTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentTransfer we want to update
     *   }
     * })
     */
    upsert<T extends PaymentTransferUpsertArgs>(args: SelectSubset<T, PaymentTransferUpsertArgs<ExtArgs>>): Prisma__PaymentTransferClient<$Result.GetResult<Prisma.$PaymentTransferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransferCountArgs} args - Arguments to filter PaymentTransfers to count.
     * @example
     * // Count the number of PaymentTransfers
     * const count = await prisma.paymentTransfer.count({
     *   where: {
     *     // ... the filter for the PaymentTransfers we want to count
     *   }
     * })
    **/
    count<T extends PaymentTransferCountArgs>(
      args?: Subset<T, PaymentTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentTransferAggregateArgs>(args: Subset<T, PaymentTransferAggregateArgs>): Prisma.PrismaPromise<GetPaymentTransferAggregateType<T>>

    /**
     * Group by PaymentTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentTransferGroupByArgs['orderBy'] }
        : { orderBy?: PaymentTransferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentTransfer model
   */
  readonly fields: PaymentTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupOrder<T extends GroupOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupOrderDefaultArgs<ExtArgs>>): Prisma__GroupOrderClient<$Result.GetResult<Prisma.$GroupOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentTransfer model
   */
  interface PaymentTransferFieldRefs {
    readonly id: FieldRef<"PaymentTransfer", 'String'>
    readonly groupOrderId: FieldRef<"PaymentTransfer", 'String'>
    readonly fromUserId: FieldRef<"PaymentTransfer", 'String'>
    readonly toUserId: FieldRef<"PaymentTransfer", 'String'>
    readonly amount: FieldRef<"PaymentTransfer", 'Float'>
    readonly status: FieldRef<"PaymentTransfer", 'PaymentTransferStatus'>
    readonly transactionId: FieldRef<"PaymentTransfer", 'String'>
    readonly bankName: FieldRef<"PaymentTransfer", 'String'>
    readonly transferDate: FieldRef<"PaymentTransfer", 'DateTime'>
    readonly verifiedAt: FieldRef<"PaymentTransfer", 'DateTime'>
    readonly verifiedBy: FieldRef<"PaymentTransfer", 'String'>
    readonly notes: FieldRef<"PaymentTransfer", 'String'>
    readonly screenshotUrl: FieldRef<"PaymentTransfer", 'String'>
    readonly createdAt: FieldRef<"PaymentTransfer", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentTransfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentTransfer findUnique
   */
  export type PaymentTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransfer to fetch.
     */
    where: PaymentTransferWhereUniqueInput
  }

  /**
   * PaymentTransfer findUniqueOrThrow
   */
  export type PaymentTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransfer to fetch.
     */
    where: PaymentTransferWhereUniqueInput
  }

  /**
   * PaymentTransfer findFirst
   */
  export type PaymentTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransfer to fetch.
     */
    where?: PaymentTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransfers to fetch.
     */
    orderBy?: PaymentTransferOrderByWithRelationInput | PaymentTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTransfers.
     */
    cursor?: PaymentTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransfers.
     */
    distinct?: PaymentTransferScalarFieldEnum | PaymentTransferScalarFieldEnum[]
  }

  /**
   * PaymentTransfer findFirstOrThrow
   */
  export type PaymentTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransfer to fetch.
     */
    where?: PaymentTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransfers to fetch.
     */
    orderBy?: PaymentTransferOrderByWithRelationInput | PaymentTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTransfers.
     */
    cursor?: PaymentTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransfers.
     */
    distinct?: PaymentTransferScalarFieldEnum | PaymentTransferScalarFieldEnum[]
  }

  /**
   * PaymentTransfer findMany
   */
  export type PaymentTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransfers to fetch.
     */
    where?: PaymentTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransfers to fetch.
     */
    orderBy?: PaymentTransferOrderByWithRelationInput | PaymentTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentTransfers.
     */
    cursor?: PaymentTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransfers.
     */
    skip?: number
    distinct?: PaymentTransferScalarFieldEnum | PaymentTransferScalarFieldEnum[]
  }

  /**
   * PaymentTransfer create
   */
  export type PaymentTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentTransfer.
     */
    data: XOR<PaymentTransferCreateInput, PaymentTransferUncheckedCreateInput>
  }

  /**
   * PaymentTransfer createMany
   */
  export type PaymentTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentTransfers.
     */
    data: PaymentTransferCreateManyInput | PaymentTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentTransfer createManyAndReturn
   */
  export type PaymentTransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentTransfers.
     */
    data: PaymentTransferCreateManyInput | PaymentTransferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTransfer update
   */
  export type PaymentTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentTransfer.
     */
    data: XOR<PaymentTransferUpdateInput, PaymentTransferUncheckedUpdateInput>
    /**
     * Choose, which PaymentTransfer to update.
     */
    where: PaymentTransferWhereUniqueInput
  }

  /**
   * PaymentTransfer updateMany
   */
  export type PaymentTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentTransfers.
     */
    data: XOR<PaymentTransferUpdateManyMutationInput, PaymentTransferUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTransfers to update
     */
    where?: PaymentTransferWhereInput
    /**
     * Limit how many PaymentTransfers to update.
     */
    limit?: number
  }

  /**
   * PaymentTransfer updateManyAndReturn
   */
  export type PaymentTransferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * The data used to update PaymentTransfers.
     */
    data: XOR<PaymentTransferUpdateManyMutationInput, PaymentTransferUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTransfers to update
     */
    where?: PaymentTransferWhereInput
    /**
     * Limit how many PaymentTransfers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTransfer upsert
   */
  export type PaymentTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentTransfer to update in case it exists.
     */
    where: PaymentTransferWhereUniqueInput
    /**
     * In case the PaymentTransfer found by the `where` argument doesn't exist, create a new PaymentTransfer with this data.
     */
    create: XOR<PaymentTransferCreateInput, PaymentTransferUncheckedCreateInput>
    /**
     * In case the PaymentTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentTransferUpdateInput, PaymentTransferUncheckedUpdateInput>
  }

  /**
   * PaymentTransfer delete
   */
  export type PaymentTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
    /**
     * Filter which PaymentTransfer to delete.
     */
    where: PaymentTransferWhereUniqueInput
  }

  /**
   * PaymentTransfer deleteMany
   */
  export type PaymentTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTransfers to delete
     */
    where?: PaymentTransferWhereInput
    /**
     * Limit how many PaymentTransfers to delete.
     */
    limit?: number
  }

  /**
   * PaymentTransfer without action
   */
  export type PaymentTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransfer
     */
    select?: PaymentTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransfer
     */
    omit?: PaymentTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransferInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    quantity: number | null
    price: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    quantity: number | null
    price: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    quantity: number
    price: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    quantity: number
    price: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "quantity" | "price", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
      quantity: number
      price: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly price: FieldRef<"OrderItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: number | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: number | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    orderId: number
    amount: number
    method: number
    status: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    method?: true
    status?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    method?: true
    status?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    method?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    orderId: string
    amount: number
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    orderId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "amount" | "method" | "status" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      amount: number
      method: $Enums.PaymentMethod
      status: $Enums.PaymentStatus
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    platform: 'platform',
    grabLink: 'grabLink',
    shopeeLink: 'shopeeLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    imageUrl: 'imageUrl',
    stock: 'stock',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const GroupOrderScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    ownerId: 'ownerId',
    restaurantId: 'restaurantId',
    platform: 'platform',
    platformOrderId: 'platformOrderId',
    status: 'status',
    totalAmount: 'totalAmount',
    deliveryFee: 'deliveryFee',
    serviceFee: 'serviceFee',
    tax: 'tax',
    lockedAt: 'lockedAt',
    placedAt: 'placedAt',
    deliveredAt: 'deliveredAt',
    paymentDeadline: 'paymentDeadline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupOrderScalarFieldEnum = (typeof GroupOrderScalarFieldEnum)[keyof typeof GroupOrderScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    groupOrderId: 'groupOrderId',
    userId: 'userId',
    role: 'role',
    cartTotal: 'cartTotal',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const BankAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bankName: 'bankName',
    accountNumber: 'accountNumber',
    accountHolderName: 'accountHolderName',
    isDefault: 'isDefault',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BankAccountScalarFieldEnum = (typeof BankAccountScalarFieldEnum)[keyof typeof BankAccountScalarFieldEnum]


  export const PaymentTransferScalarFieldEnum: {
    id: 'id',
    groupOrderId: 'groupOrderId',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    amount: 'amount',
    status: 'status',
    transactionId: 'transactionId',
    bankName: 'bankName',
    transferDate: 'transferDate',
    verifiedAt: 'verifiedAt',
    verifiedBy: 'verifiedBy',
    notes: 'notes',
    screenshotUrl: 'screenshotUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentTransferScalarFieldEnum = (typeof PaymentTransferScalarFieldEnum)[keyof typeof PaymentTransferScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    amount: 'amount',
    method: 'method',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'GroupOrderStatus'
   */
  export type EnumGroupOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupOrderStatus'>
    


  /**
   * Reference to a field of type 'GroupOrderStatus[]'
   */
  export type ListEnumGroupOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupOrderStatus[]'>
    


  /**
   * Reference to a field of type 'GroupRole'
   */
  export type EnumGroupRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupRole'>
    


  /**
   * Reference to a field of type 'GroupRole[]'
   */
  export type ListEnumGroupRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PaymentTransferStatus'
   */
  export type EnumPaymentTransferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentTransferStatus'>
    


  /**
   * Reference to a field of type 'PaymentTransferStatus[]'
   */
  export type ListEnumPaymentTransferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentTransferStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    bankAccounts?: BankAccountListRelationFilter
    groupMembers?: GroupMemberListRelationFilter
    groupOrders?: GroupOrderListRelationFilter
    paymentTransfersFrom?: PaymentTransferListRelationFilter
    paymentTransfersTo?: PaymentTransferListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    bankAccounts?: BankAccountOrderByRelationAggregateInput
    groupMembers?: GroupMemberOrderByRelationAggregateInput
    groupOrders?: GroupOrderOrderByRelationAggregateInput
    paymentTransfersFrom?: PaymentTransferOrderByRelationAggregateInput
    paymentTransfersTo?: PaymentTransferOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    bankAccounts?: BankAccountListRelationFilter
    groupMembers?: GroupMemberListRelationFilter
    groupOrders?: GroupOrderListRelationFilter
    paymentTransfersFrom?: PaymentTransferListRelationFilter
    paymentTransfersTo?: PaymentTransferListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    platform?: EnumPlatformFilter<"Restaurant"> | $Enums.Platform
    grabLink?: StringNullableFilter<"Restaurant"> | string | null
    shopeeLink?: StringNullableFilter<"Restaurant"> | string | null
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    products?: ProductListRelationFilter
    groupOrders?: GroupOrderListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    grabLink?: SortOrderInput | SortOrder
    shopeeLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    groupOrders?: GroupOrderOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    grabLink?: string
    shopeeLink?: string
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    name?: StringFilter<"Restaurant"> | string
    platform?: EnumPlatformFilter<"Restaurant"> | $Enums.Platform
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    products?: ProductListRelationFilter
    groupOrders?: GroupOrderListRelationFilter
  }, "id" | "grabLink" | "shopeeLink">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    grabLink?: SortOrderInput | SortOrder
    shopeeLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Restaurant"> | string
    name?: StringWithAggregatesFilter<"Restaurant"> | string
    platform?: EnumPlatformWithAggregatesFilter<"Restaurant"> | $Enums.Platform
    grabLink?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    shopeeLink?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    restaurantId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    orderItems?: OrderItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    stock?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    restaurantId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    stock?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    stock?: IntWithAggregatesFilter<"Product"> | number
    restaurantId?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: FloatFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    orderItems?: OrderItemListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: FloatFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    orderItems?: OrderItemListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    total?: FloatWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type GroupOrderWhereInput = {
    AND?: GroupOrderWhereInput | GroupOrderWhereInput[]
    OR?: GroupOrderWhereInput[]
    NOT?: GroupOrderWhereInput | GroupOrderWhereInput[]
    id?: StringFilter<"GroupOrder"> | string
    groupId?: StringFilter<"GroupOrder"> | string
    ownerId?: StringFilter<"GroupOrder"> | string
    restaurantId?: StringFilter<"GroupOrder"> | string
    platform?: EnumPlatformFilter<"GroupOrder"> | $Enums.Platform
    platformOrderId?: StringNullableFilter<"GroupOrder"> | string | null
    status?: EnumGroupOrderStatusFilter<"GroupOrder"> | $Enums.GroupOrderStatus
    totalAmount?: FloatFilter<"GroupOrder"> | number
    deliveryFee?: FloatFilter<"GroupOrder"> | number
    serviceFee?: FloatFilter<"GroupOrder"> | number
    tax?: FloatFilter<"GroupOrder"> | number
    lockedAt?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    placedAt?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    paymentDeadline?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"GroupOrder"> | Date | string
    updatedAt?: DateTimeFilter<"GroupOrder"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    members?: GroupMemberListRelationFilter
    payments?: PaymentTransferListRelationFilter
  }

  export type GroupOrderOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    ownerId?: SortOrder
    restaurantId?: SortOrder
    platform?: SortOrder
    platformOrderId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    deliveryFee?: SortOrder
    serviceFee?: SortOrder
    tax?: SortOrder
    lockedAt?: SortOrderInput | SortOrder
    placedAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    paymentDeadline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    restaurant?: RestaurantOrderByWithRelationInput
    members?: GroupMemberOrderByRelationAggregateInput
    payments?: PaymentTransferOrderByRelationAggregateInput
  }

  export type GroupOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId?: string
    AND?: GroupOrderWhereInput | GroupOrderWhereInput[]
    OR?: GroupOrderWhereInput[]
    NOT?: GroupOrderWhereInput | GroupOrderWhereInput[]
    ownerId?: StringFilter<"GroupOrder"> | string
    restaurantId?: StringFilter<"GroupOrder"> | string
    platform?: EnumPlatformFilter<"GroupOrder"> | $Enums.Platform
    platformOrderId?: StringNullableFilter<"GroupOrder"> | string | null
    status?: EnumGroupOrderStatusFilter<"GroupOrder"> | $Enums.GroupOrderStatus
    totalAmount?: FloatFilter<"GroupOrder"> | number
    deliveryFee?: FloatFilter<"GroupOrder"> | number
    serviceFee?: FloatFilter<"GroupOrder"> | number
    tax?: FloatFilter<"GroupOrder"> | number
    lockedAt?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    placedAt?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    paymentDeadline?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"GroupOrder"> | Date | string
    updatedAt?: DateTimeFilter<"GroupOrder"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    members?: GroupMemberListRelationFilter
    payments?: PaymentTransferListRelationFilter
  }, "id" | "groupId">

  export type GroupOrderOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    ownerId?: SortOrder
    restaurantId?: SortOrder
    platform?: SortOrder
    platformOrderId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    deliveryFee?: SortOrder
    serviceFee?: SortOrder
    tax?: SortOrder
    lockedAt?: SortOrderInput | SortOrder
    placedAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    paymentDeadline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupOrderCountOrderByAggregateInput
    _avg?: GroupOrderAvgOrderByAggregateInput
    _max?: GroupOrderMaxOrderByAggregateInput
    _min?: GroupOrderMinOrderByAggregateInput
    _sum?: GroupOrderSumOrderByAggregateInput
  }

  export type GroupOrderScalarWhereWithAggregatesInput = {
    AND?: GroupOrderScalarWhereWithAggregatesInput | GroupOrderScalarWhereWithAggregatesInput[]
    OR?: GroupOrderScalarWhereWithAggregatesInput[]
    NOT?: GroupOrderScalarWhereWithAggregatesInput | GroupOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupOrder"> | string
    groupId?: StringWithAggregatesFilter<"GroupOrder"> | string
    ownerId?: StringWithAggregatesFilter<"GroupOrder"> | string
    restaurantId?: StringWithAggregatesFilter<"GroupOrder"> | string
    platform?: EnumPlatformWithAggregatesFilter<"GroupOrder"> | $Enums.Platform
    platformOrderId?: StringNullableWithAggregatesFilter<"GroupOrder"> | string | null
    status?: EnumGroupOrderStatusWithAggregatesFilter<"GroupOrder"> | $Enums.GroupOrderStatus
    totalAmount?: FloatWithAggregatesFilter<"GroupOrder"> | number
    deliveryFee?: FloatWithAggregatesFilter<"GroupOrder"> | number
    serviceFee?: FloatWithAggregatesFilter<"GroupOrder"> | number
    tax?: FloatWithAggregatesFilter<"GroupOrder"> | number
    lockedAt?: DateTimeNullableWithAggregatesFilter<"GroupOrder"> | Date | string | null
    placedAt?: DateTimeNullableWithAggregatesFilter<"GroupOrder"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"GroupOrder"> | Date | string | null
    paymentDeadline?: DateTimeNullableWithAggregatesFilter<"GroupOrder"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GroupOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupOrder"> | Date | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    groupOrderId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    role?: EnumGroupRoleFilter<"GroupMember"> | $Enums.GroupRole
    cartTotal?: FloatFilter<"GroupMember"> | number
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    leftAt?: DateTimeNullableFilter<"GroupMember"> | Date | string | null
    groupOrder?: XOR<GroupOrderScalarRelationFilter, GroupOrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    groupOrderId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    cartTotal?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    groupOrder?: GroupOrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupOrderId_userId?: GroupMemberGroupOrderIdUserIdCompoundUniqueInput
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupOrderId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    role?: EnumGroupRoleFilter<"GroupMember"> | $Enums.GroupRole
    cartTotal?: FloatFilter<"GroupMember"> | number
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    leftAt?: DateTimeNullableFilter<"GroupMember"> | Date | string | null
    groupOrder?: XOR<GroupOrderScalarRelationFilter, GroupOrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "groupOrderId_userId">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    groupOrderId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    cartTotal?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _avg?: GroupMemberAvgOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
    _sum?: GroupMemberSumOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMember"> | string
    groupOrderId?: StringWithAggregatesFilter<"GroupMember"> | string
    userId?: StringWithAggregatesFilter<"GroupMember"> | string
    role?: EnumGroupRoleWithAggregatesFilter<"GroupMember"> | $Enums.GroupRole
    cartTotal?: FloatWithAggregatesFilter<"GroupMember"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"GroupMember"> | Date | string | null
  }

  export type BankAccountWhereInput = {
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    id?: StringFilter<"BankAccount"> | string
    userId?: StringFilter<"BankAccount"> | string
    bankName?: StringFilter<"BankAccount"> | string
    accountNumber?: StringFilter<"BankAccount"> | string
    accountHolderName?: StringFilter<"BankAccount"> | string
    isDefault?: BoolFilter<"BankAccount"> | boolean
    isActive?: BoolFilter<"BankAccount"> | boolean
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BankAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BankAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    userId?: StringFilter<"BankAccount"> | string
    bankName?: StringFilter<"BankAccount"> | string
    accountNumber?: StringFilter<"BankAccount"> | string
    accountHolderName?: StringFilter<"BankAccount"> | string
    isDefault?: BoolFilter<"BankAccount"> | boolean
    isActive?: BoolFilter<"BankAccount"> | boolean
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BankAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BankAccountCountOrderByAggregateInput
    _max?: BankAccountMaxOrderByAggregateInput
    _min?: BankAccountMinOrderByAggregateInput
  }

  export type BankAccountScalarWhereWithAggregatesInput = {
    AND?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    OR?: BankAccountScalarWhereWithAggregatesInput[]
    NOT?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BankAccount"> | string
    userId?: StringWithAggregatesFilter<"BankAccount"> | string
    bankName?: StringWithAggregatesFilter<"BankAccount"> | string
    accountNumber?: StringWithAggregatesFilter<"BankAccount"> | string
    accountHolderName?: StringWithAggregatesFilter<"BankAccount"> | string
    isDefault?: BoolWithAggregatesFilter<"BankAccount"> | boolean
    isActive?: BoolWithAggregatesFilter<"BankAccount"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BankAccount"> | Date | string
  }

  export type PaymentTransferWhereInput = {
    AND?: PaymentTransferWhereInput | PaymentTransferWhereInput[]
    OR?: PaymentTransferWhereInput[]
    NOT?: PaymentTransferWhereInput | PaymentTransferWhereInput[]
    id?: StringFilter<"PaymentTransfer"> | string
    groupOrderId?: StringFilter<"PaymentTransfer"> | string
    fromUserId?: StringFilter<"PaymentTransfer"> | string
    toUserId?: StringFilter<"PaymentTransfer"> | string
    amount?: FloatFilter<"PaymentTransfer"> | number
    status?: EnumPaymentTransferStatusFilter<"PaymentTransfer"> | $Enums.PaymentTransferStatus
    transactionId?: StringNullableFilter<"PaymentTransfer"> | string | null
    bankName?: StringNullableFilter<"PaymentTransfer"> | string | null
    transferDate?: DateTimeNullableFilter<"PaymentTransfer"> | Date | string | null
    verifiedAt?: DateTimeNullableFilter<"PaymentTransfer"> | Date | string | null
    verifiedBy?: StringNullableFilter<"PaymentTransfer"> | string | null
    notes?: StringNullableFilter<"PaymentTransfer"> | string | null
    screenshotUrl?: StringNullableFilter<"PaymentTransfer"> | string | null
    createdAt?: DateTimeFilter<"PaymentTransfer"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentTransfer"> | Date | string
    groupOrder?: XOR<GroupOrderScalarRelationFilter, GroupOrderWhereInput>
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentTransferOrderByWithRelationInput = {
    id?: SortOrder
    groupOrderId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    transferDate?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    screenshotUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupOrder?: GroupOrderOrderByWithRelationInput
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
  }

  export type PaymentTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentTransferWhereInput | PaymentTransferWhereInput[]
    OR?: PaymentTransferWhereInput[]
    NOT?: PaymentTransferWhereInput | PaymentTransferWhereInput[]
    groupOrderId?: StringFilter<"PaymentTransfer"> | string
    fromUserId?: StringFilter<"PaymentTransfer"> | string
    toUserId?: StringFilter<"PaymentTransfer"> | string
    amount?: FloatFilter<"PaymentTransfer"> | number
    status?: EnumPaymentTransferStatusFilter<"PaymentTransfer"> | $Enums.PaymentTransferStatus
    transactionId?: StringNullableFilter<"PaymentTransfer"> | string | null
    bankName?: StringNullableFilter<"PaymentTransfer"> | string | null
    transferDate?: DateTimeNullableFilter<"PaymentTransfer"> | Date | string | null
    verifiedAt?: DateTimeNullableFilter<"PaymentTransfer"> | Date | string | null
    verifiedBy?: StringNullableFilter<"PaymentTransfer"> | string | null
    notes?: StringNullableFilter<"PaymentTransfer"> | string | null
    screenshotUrl?: StringNullableFilter<"PaymentTransfer"> | string | null
    createdAt?: DateTimeFilter<"PaymentTransfer"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentTransfer"> | Date | string
    groupOrder?: XOR<GroupOrderScalarRelationFilter, GroupOrderWhereInput>
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentTransferOrderByWithAggregationInput = {
    id?: SortOrder
    groupOrderId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    transferDate?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    screenshotUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentTransferCountOrderByAggregateInput
    _avg?: PaymentTransferAvgOrderByAggregateInput
    _max?: PaymentTransferMaxOrderByAggregateInput
    _min?: PaymentTransferMinOrderByAggregateInput
    _sum?: PaymentTransferSumOrderByAggregateInput
  }

  export type PaymentTransferScalarWhereWithAggregatesInput = {
    AND?: PaymentTransferScalarWhereWithAggregatesInput | PaymentTransferScalarWhereWithAggregatesInput[]
    OR?: PaymentTransferScalarWhereWithAggregatesInput[]
    NOT?: PaymentTransferScalarWhereWithAggregatesInput | PaymentTransferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentTransfer"> | string
    groupOrderId?: StringWithAggregatesFilter<"PaymentTransfer"> | string
    fromUserId?: StringWithAggregatesFilter<"PaymentTransfer"> | string
    toUserId?: StringWithAggregatesFilter<"PaymentTransfer"> | string
    amount?: FloatWithAggregatesFilter<"PaymentTransfer"> | number
    status?: EnumPaymentTransferStatusWithAggregatesFilter<"PaymentTransfer"> | $Enums.PaymentTransferStatus
    transactionId?: StringNullableWithAggregatesFilter<"PaymentTransfer"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"PaymentTransfer"> | string | null
    transferDate?: DateTimeNullableWithAggregatesFilter<"PaymentTransfer"> | Date | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"PaymentTransfer"> | Date | string | null
    verifiedBy?: StringNullableWithAggregatesFilter<"PaymentTransfer"> | string | null
    notes?: StringNullableWithAggregatesFilter<"PaymentTransfer"> | string | null
    screenshotUrl?: StringNullableWithAggregatesFilter<"PaymentTransfer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentTransfer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentTransfer"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    price?: FloatWithAggregatesFilter<"OrderItem"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "orderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    bankAccounts?: BankAccountCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderCreateNestedManyWithoutOwnerInput
    paymentTransfersFrom?: PaymentTransferCreateNestedManyWithoutFromUserInput
    paymentTransfersTo?: PaymentTransferCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderUncheckedCreateNestedManyWithoutOwnerInput
    paymentTransfersFrom?: PaymentTransferUncheckedCreateNestedManyWithoutFromUserInput
    paymentTransfersTo?: PaymentTransferUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    bankAccounts?: BankAccountUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUpdateManyWithoutOwnerNestedInput
    paymentTransfersFrom?: PaymentTransferUpdateManyWithoutFromUserNestedInput
    paymentTransfersTo?: PaymentTransferUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUncheckedUpdateManyWithoutOwnerNestedInput
    paymentTransfersFrom?: PaymentTransferUncheckedUpdateManyWithoutFromUserNestedInput
    paymentTransfersTo?: PaymentTransferUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateInput = {
    id?: string
    name: string
    platform?: $Enums.Platform
    grabLink?: string | null
    shopeeLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutRestaurantInput
    groupOrders?: GroupOrderCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: string
    name: string
    platform?: $Enums.Platform
    grabLink?: string | null
    shopeeLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutRestaurantInput
    groupOrders?: GroupOrderUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    grabLink?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutRestaurantNestedInput
    groupOrders?: GroupOrderUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    grabLink?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutRestaurantNestedInput
    groupOrders?: GroupOrderUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: string
    name: string
    platform?: $Enums.Platform
    grabLink?: string | null
    shopeeLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    grabLink?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    grabLink?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutProductsInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    stock?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutProductsNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    stock?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    status?: $Enums.OrderStatus
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    status?: $Enums.OrderStatus
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupOrderCreateInput = {
    id?: string
    groupId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutGroupOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutGroupOrdersInput
    members?: GroupMemberCreateNestedManyWithoutGroupOrderInput
    payments?: PaymentTransferCreateNestedManyWithoutGroupOrderInput
  }

  export type GroupOrderUncheckedCreateInput = {
    id?: string
    groupId: string
    ownerId: string
    restaurantId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupOrderInput
    payments?: PaymentTransferUncheckedCreateNestedManyWithoutGroupOrderInput
  }

  export type GroupOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGroupOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutGroupOrdersNestedInput
    members?: GroupMemberUpdateManyWithoutGroupOrderNestedInput
    payments?: PaymentTransferUpdateManyWithoutGroupOrderNestedInput
  }

  export type GroupOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupOrderNestedInput
    payments?: PaymentTransferUncheckedUpdateManyWithoutGroupOrderNestedInput
  }

  export type GroupOrderCreateManyInput = {
    id?: string
    groupId: string
    ownerId: string
    restaurantId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateInput = {
    id?: string
    role?: $Enums.GroupRole
    cartTotal?: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
    groupOrder: GroupOrderCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutGroupMembersInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: string
    groupOrderId: string
    userId: string
    role?: $Enums.GroupRole
    cartTotal?: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type GroupMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole
    cartTotal?: FloatFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupOrder?: GroupOrderUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupOrderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole
    cartTotal?: FloatFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupMemberCreateManyInput = {
    id?: string
    groupOrderId: string
    userId: string
    role?: $Enums.GroupRole
    cartTotal?: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type GroupMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole
    cartTotal?: FloatFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupOrderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole
    cartTotal?: FloatFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BankAccountCreateInput = {
    id?: string
    bankName: string
    accountNumber: string
    accountHolderName: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBankAccountsInput
  }

  export type BankAccountUncheckedCreateInput = {
    id?: string
    userId: string
    bankName: string
    accountNumber: string
    accountHolderName: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBankAccountsNestedInput
  }

  export type BankAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountCreateManyInput = {
    id?: string
    userId: string
    bankName: string
    accountNumber: string
    accountHolderName: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransferCreateInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupOrder: GroupOrderCreateNestedOneWithoutPaymentsInput
    fromUser: UserCreateNestedOneWithoutPaymentTransfersFromInput
    toUser: UserCreateNestedOneWithoutPaymentTransfersToInput
  }

  export type PaymentTransferUncheckedCreateInput = {
    id?: string
    groupOrderId: string
    fromUserId: string
    toUserId: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupOrder?: GroupOrderUpdateOneRequiredWithoutPaymentsNestedInput
    fromUser?: UserUpdateOneRequiredWithoutPaymentTransfersFromNestedInput
    toUser?: UserUpdateOneRequiredWithoutPaymentTransfersToNestedInput
  }

  export type PaymentTransferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupOrderId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransferCreateManyInput = {
    id?: string
    groupOrderId: string
    fromUserId: string
    toUserId: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupOrderId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity?: number
    price: number
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
    quantity?: number
    price: number
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
    quantity?: number
    price: number
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    orderId: string
    amount: number
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    orderId: string
    amount: number
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type BankAccountListRelationFilter = {
    every?: BankAccountWhereInput
    some?: BankAccountWhereInput
    none?: BankAccountWhereInput
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type GroupOrderListRelationFilter = {
    every?: GroupOrderWhereInput
    some?: GroupOrderWhereInput
    none?: GroupOrderWhereInput
  }

  export type PaymentTransferListRelationFilter = {
    every?: PaymentTransferWhereInput
    some?: PaymentTransferWhereInput
    none?: PaymentTransferWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentTransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    grabLink?: SortOrder
    shopeeLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    grabLink?: SortOrder
    shopeeLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    grabLink?: SortOrder
    shopeeLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RestaurantScalarRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    stock?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    stock?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    stock?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumGroupOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupOrderStatus | EnumGroupOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GroupOrderStatus[] | ListEnumGroupOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupOrderStatus[] | ListEnumGroupOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupOrderStatusFilter<$PrismaModel> | $Enums.GroupOrderStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GroupOrderCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    ownerId?: SortOrder
    restaurantId?: SortOrder
    platform?: SortOrder
    platformOrderId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    deliveryFee?: SortOrder
    serviceFee?: SortOrder
    tax?: SortOrder
    lockedAt?: SortOrder
    placedAt?: SortOrder
    deliveredAt?: SortOrder
    paymentDeadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupOrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    deliveryFee?: SortOrder
    serviceFee?: SortOrder
    tax?: SortOrder
  }

  export type GroupOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    ownerId?: SortOrder
    restaurantId?: SortOrder
    platform?: SortOrder
    platformOrderId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    deliveryFee?: SortOrder
    serviceFee?: SortOrder
    tax?: SortOrder
    lockedAt?: SortOrder
    placedAt?: SortOrder
    deliveredAt?: SortOrder
    paymentDeadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupOrderMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    ownerId?: SortOrder
    restaurantId?: SortOrder
    platform?: SortOrder
    platformOrderId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    deliveryFee?: SortOrder
    serviceFee?: SortOrder
    tax?: SortOrder
    lockedAt?: SortOrder
    placedAt?: SortOrder
    deliveredAt?: SortOrder
    paymentDeadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupOrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    deliveryFee?: SortOrder
    serviceFee?: SortOrder
    tax?: SortOrder
  }

  export type EnumGroupOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupOrderStatus | EnumGroupOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GroupOrderStatus[] | ListEnumGroupOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupOrderStatus[] | ListEnumGroupOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.GroupOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumGroupOrderStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGroupRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRole | EnumGroupRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupRole[] | ListEnumGroupRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupRole[] | ListEnumGroupRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupRoleFilter<$PrismaModel> | $Enums.GroupRole
  }

  export type GroupOrderScalarRelationFilter = {
    is?: GroupOrderWhereInput
    isNot?: GroupOrderWhereInput
  }

  export type GroupMemberGroupOrderIdUserIdCompoundUniqueInput = {
    groupOrderId: string
    userId: string
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    groupOrderId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    cartTotal?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type GroupMemberAvgOrderByAggregateInput = {
    cartTotal?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    groupOrderId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    cartTotal?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    groupOrderId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    cartTotal?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type GroupMemberSumOrderByAggregateInput = {
    cartTotal?: SortOrder
  }

  export type EnumGroupRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRole | EnumGroupRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupRole[] | ListEnumGroupRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupRole[] | ListEnumGroupRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupRoleWithAggregatesFilter<$PrismaModel> | $Enums.GroupRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupRoleFilter<$PrismaModel>
    _max?: NestedEnumGroupRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BankAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPaymentTransferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentTransferStatus | EnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentTransferStatus[] | ListEnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentTransferStatus[] | ListEnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTransferStatusFilter<$PrismaModel> | $Enums.PaymentTransferStatus
  }

  export type PaymentTransferCountOrderByAggregateInput = {
    id?: SortOrder
    groupOrderId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    bankName?: SortOrder
    transferDate?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    notes?: SortOrder
    screenshotUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentTransferAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    groupOrderId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    bankName?: SortOrder
    transferDate?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    notes?: SortOrder
    screenshotUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentTransferMinOrderByAggregateInput = {
    id?: SortOrder
    groupOrderId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    bankName?: SortOrder
    transferDate?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    notes?: SortOrder
    screenshotUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentTransferSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentTransferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentTransferStatus | EnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentTransferStatus[] | ListEnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentTransferStatus[] | ListEnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTransferStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentTransferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTransferStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentTransferStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BankAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupOrderCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupOrderCreateWithoutOwnerInput, GroupOrderUncheckedCreateWithoutOwnerInput> | GroupOrderCreateWithoutOwnerInput[] | GroupOrderUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupOrderCreateOrConnectWithoutOwnerInput | GroupOrderCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupOrderCreateManyOwnerInputEnvelope
    connect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
  }

  export type PaymentTransferCreateNestedManyWithoutFromUserInput = {
    create?: XOR<PaymentTransferCreateWithoutFromUserInput, PaymentTransferUncheckedCreateWithoutFromUserInput> | PaymentTransferCreateWithoutFromUserInput[] | PaymentTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutFromUserInput | PaymentTransferCreateOrConnectWithoutFromUserInput[]
    createMany?: PaymentTransferCreateManyFromUserInputEnvelope
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
  }

  export type PaymentTransferCreateNestedManyWithoutToUserInput = {
    create?: XOR<PaymentTransferCreateWithoutToUserInput, PaymentTransferUncheckedCreateWithoutToUserInput> | PaymentTransferCreateWithoutToUserInput[] | PaymentTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutToUserInput | PaymentTransferCreateOrConnectWithoutToUserInput[]
    createMany?: PaymentTransferCreateManyToUserInputEnvelope
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BankAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupOrderUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupOrderCreateWithoutOwnerInput, GroupOrderUncheckedCreateWithoutOwnerInput> | GroupOrderCreateWithoutOwnerInput[] | GroupOrderUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupOrderCreateOrConnectWithoutOwnerInput | GroupOrderCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupOrderCreateManyOwnerInputEnvelope
    connect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
  }

  export type PaymentTransferUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<PaymentTransferCreateWithoutFromUserInput, PaymentTransferUncheckedCreateWithoutFromUserInput> | PaymentTransferCreateWithoutFromUserInput[] | PaymentTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutFromUserInput | PaymentTransferCreateOrConnectWithoutFromUserInput[]
    createMany?: PaymentTransferCreateManyFromUserInputEnvelope
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
  }

  export type PaymentTransferUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<PaymentTransferCreateWithoutToUserInput, PaymentTransferUncheckedCreateWithoutToUserInput> | PaymentTransferCreateWithoutToUserInput[] | PaymentTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutToUserInput | PaymentTransferCreateOrConnectWithoutToUserInput[]
    createMany?: PaymentTransferCreateManyToUserInputEnvelope
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BankAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutUserInput | BankAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutUserInput | BankAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutUserInput | BankAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupOrderUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupOrderCreateWithoutOwnerInput, GroupOrderUncheckedCreateWithoutOwnerInput> | GroupOrderCreateWithoutOwnerInput[] | GroupOrderUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupOrderCreateOrConnectWithoutOwnerInput | GroupOrderCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupOrderUpsertWithWhereUniqueWithoutOwnerInput | GroupOrderUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupOrderCreateManyOwnerInputEnvelope
    set?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    disconnect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    delete?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    connect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    update?: GroupOrderUpdateWithWhereUniqueWithoutOwnerInput | GroupOrderUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupOrderUpdateManyWithWhereWithoutOwnerInput | GroupOrderUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupOrderScalarWhereInput | GroupOrderScalarWhereInput[]
  }

  export type PaymentTransferUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<PaymentTransferCreateWithoutFromUserInput, PaymentTransferUncheckedCreateWithoutFromUserInput> | PaymentTransferCreateWithoutFromUserInput[] | PaymentTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutFromUserInput | PaymentTransferCreateOrConnectWithoutFromUserInput[]
    upsert?: PaymentTransferUpsertWithWhereUniqueWithoutFromUserInput | PaymentTransferUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: PaymentTransferCreateManyFromUserInputEnvelope
    set?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    disconnect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    delete?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    update?: PaymentTransferUpdateWithWhereUniqueWithoutFromUserInput | PaymentTransferUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: PaymentTransferUpdateManyWithWhereWithoutFromUserInput | PaymentTransferUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: PaymentTransferScalarWhereInput | PaymentTransferScalarWhereInput[]
  }

  export type PaymentTransferUpdateManyWithoutToUserNestedInput = {
    create?: XOR<PaymentTransferCreateWithoutToUserInput, PaymentTransferUncheckedCreateWithoutToUserInput> | PaymentTransferCreateWithoutToUserInput[] | PaymentTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutToUserInput | PaymentTransferCreateOrConnectWithoutToUserInput[]
    upsert?: PaymentTransferUpsertWithWhereUniqueWithoutToUserInput | PaymentTransferUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: PaymentTransferCreateManyToUserInputEnvelope
    set?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    disconnect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    delete?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    update?: PaymentTransferUpdateWithWhereUniqueWithoutToUserInput | PaymentTransferUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: PaymentTransferUpdateManyWithWhereWithoutToUserInput | PaymentTransferUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: PaymentTransferScalarWhereInput | PaymentTransferScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BankAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutUserInput | BankAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutUserInput | BankAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutUserInput | BankAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupOrderUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupOrderCreateWithoutOwnerInput, GroupOrderUncheckedCreateWithoutOwnerInput> | GroupOrderCreateWithoutOwnerInput[] | GroupOrderUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupOrderCreateOrConnectWithoutOwnerInput | GroupOrderCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupOrderUpsertWithWhereUniqueWithoutOwnerInput | GroupOrderUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupOrderCreateManyOwnerInputEnvelope
    set?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    disconnect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    delete?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    connect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    update?: GroupOrderUpdateWithWhereUniqueWithoutOwnerInput | GroupOrderUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupOrderUpdateManyWithWhereWithoutOwnerInput | GroupOrderUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupOrderScalarWhereInput | GroupOrderScalarWhereInput[]
  }

  export type PaymentTransferUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<PaymentTransferCreateWithoutFromUserInput, PaymentTransferUncheckedCreateWithoutFromUserInput> | PaymentTransferCreateWithoutFromUserInput[] | PaymentTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutFromUserInput | PaymentTransferCreateOrConnectWithoutFromUserInput[]
    upsert?: PaymentTransferUpsertWithWhereUniqueWithoutFromUserInput | PaymentTransferUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: PaymentTransferCreateManyFromUserInputEnvelope
    set?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    disconnect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    delete?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    update?: PaymentTransferUpdateWithWhereUniqueWithoutFromUserInput | PaymentTransferUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: PaymentTransferUpdateManyWithWhereWithoutFromUserInput | PaymentTransferUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: PaymentTransferScalarWhereInput | PaymentTransferScalarWhereInput[]
  }

  export type PaymentTransferUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<PaymentTransferCreateWithoutToUserInput, PaymentTransferUncheckedCreateWithoutToUserInput> | PaymentTransferCreateWithoutToUserInput[] | PaymentTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutToUserInput | PaymentTransferCreateOrConnectWithoutToUserInput[]
    upsert?: PaymentTransferUpsertWithWhereUniqueWithoutToUserInput | PaymentTransferUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: PaymentTransferCreateManyToUserInputEnvelope
    set?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    disconnect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    delete?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    update?: PaymentTransferUpdateWithWhereUniqueWithoutToUserInput | PaymentTransferUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: PaymentTransferUpdateManyWithWhereWithoutToUserInput | PaymentTransferUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: PaymentTransferScalarWhereInput | PaymentTransferScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput> | ProductCreateWithoutRestaurantInput[] | ProductUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput | ProductCreateOrConnectWithoutRestaurantInput[]
    createMany?: ProductCreateManyRestaurantInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type GroupOrderCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<GroupOrderCreateWithoutRestaurantInput, GroupOrderUncheckedCreateWithoutRestaurantInput> | GroupOrderCreateWithoutRestaurantInput[] | GroupOrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: GroupOrderCreateOrConnectWithoutRestaurantInput | GroupOrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: GroupOrderCreateManyRestaurantInputEnvelope
    connect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput> | ProductCreateWithoutRestaurantInput[] | ProductUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput | ProductCreateOrConnectWithoutRestaurantInput[]
    createMany?: ProductCreateManyRestaurantInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type GroupOrderUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<GroupOrderCreateWithoutRestaurantInput, GroupOrderUncheckedCreateWithoutRestaurantInput> | GroupOrderCreateWithoutRestaurantInput[] | GroupOrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: GroupOrderCreateOrConnectWithoutRestaurantInput | GroupOrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: GroupOrderCreateManyRestaurantInputEnvelope
    connect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput> | ProductCreateWithoutRestaurantInput[] | ProductUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput | ProductCreateOrConnectWithoutRestaurantInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutRestaurantInput | ProductUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ProductCreateManyRestaurantInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutRestaurantInput | ProductUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutRestaurantInput | ProductUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type GroupOrderUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<GroupOrderCreateWithoutRestaurantInput, GroupOrderUncheckedCreateWithoutRestaurantInput> | GroupOrderCreateWithoutRestaurantInput[] | GroupOrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: GroupOrderCreateOrConnectWithoutRestaurantInput | GroupOrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: GroupOrderUpsertWithWhereUniqueWithoutRestaurantInput | GroupOrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: GroupOrderCreateManyRestaurantInputEnvelope
    set?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    disconnect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    delete?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    connect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    update?: GroupOrderUpdateWithWhereUniqueWithoutRestaurantInput | GroupOrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: GroupOrderUpdateManyWithWhereWithoutRestaurantInput | GroupOrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: GroupOrderScalarWhereInput | GroupOrderScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput> | ProductCreateWithoutRestaurantInput[] | ProductUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput | ProductCreateOrConnectWithoutRestaurantInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutRestaurantInput | ProductUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ProductCreateManyRestaurantInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutRestaurantInput | ProductUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutRestaurantInput | ProductUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type GroupOrderUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<GroupOrderCreateWithoutRestaurantInput, GroupOrderUncheckedCreateWithoutRestaurantInput> | GroupOrderCreateWithoutRestaurantInput[] | GroupOrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: GroupOrderCreateOrConnectWithoutRestaurantInput | GroupOrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: GroupOrderUpsertWithWhereUniqueWithoutRestaurantInput | GroupOrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: GroupOrderCreateManyRestaurantInputEnvelope
    set?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    disconnect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    delete?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    connect?: GroupOrderWhereUniqueInput | GroupOrderWhereUniqueInput[]
    update?: GroupOrderUpdateWithWhereUniqueWithoutRestaurantInput | GroupOrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: GroupOrderUpdateManyWithWhereWithoutRestaurantInput | GroupOrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: GroupOrderScalarWhereInput | GroupOrderScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutProductsInput = {
    create?: XOR<RestaurantCreateWithoutProductsInput, RestaurantUncheckedCreateWithoutProductsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RestaurantUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<RestaurantCreateWithoutProductsInput, RestaurantUncheckedCreateWithoutProductsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput
    upsert?: RestaurantUpsertWithoutProductsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutProductsInput, RestaurantUpdateWithoutProductsInput>, RestaurantUncheckedUpdateWithoutProductsInput>
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PaymentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type UserCreateNestedOneWithoutGroupOrdersInput = {
    create?: XOR<UserCreateWithoutGroupOrdersInput, UserUncheckedCreateWithoutGroupOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutGroupOrdersInput = {
    create?: XOR<RestaurantCreateWithoutGroupOrdersInput, RestaurantUncheckedCreateWithoutGroupOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutGroupOrdersInput
    connect?: RestaurantWhereUniqueInput
  }

  export type GroupMemberCreateNestedManyWithoutGroupOrderInput = {
    create?: XOR<GroupMemberCreateWithoutGroupOrderInput, GroupMemberUncheckedCreateWithoutGroupOrderInput> | GroupMemberCreateWithoutGroupOrderInput[] | GroupMemberUncheckedCreateWithoutGroupOrderInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupOrderInput | GroupMemberCreateOrConnectWithoutGroupOrderInput[]
    createMany?: GroupMemberCreateManyGroupOrderInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type PaymentTransferCreateNestedManyWithoutGroupOrderInput = {
    create?: XOR<PaymentTransferCreateWithoutGroupOrderInput, PaymentTransferUncheckedCreateWithoutGroupOrderInput> | PaymentTransferCreateWithoutGroupOrderInput[] | PaymentTransferUncheckedCreateWithoutGroupOrderInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutGroupOrderInput | PaymentTransferCreateOrConnectWithoutGroupOrderInput[]
    createMany?: PaymentTransferCreateManyGroupOrderInputEnvelope
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupOrderInput = {
    create?: XOR<GroupMemberCreateWithoutGroupOrderInput, GroupMemberUncheckedCreateWithoutGroupOrderInput> | GroupMemberCreateWithoutGroupOrderInput[] | GroupMemberUncheckedCreateWithoutGroupOrderInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupOrderInput | GroupMemberCreateOrConnectWithoutGroupOrderInput[]
    createMany?: GroupMemberCreateManyGroupOrderInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type PaymentTransferUncheckedCreateNestedManyWithoutGroupOrderInput = {
    create?: XOR<PaymentTransferCreateWithoutGroupOrderInput, PaymentTransferUncheckedCreateWithoutGroupOrderInput> | PaymentTransferCreateWithoutGroupOrderInput[] | PaymentTransferUncheckedCreateWithoutGroupOrderInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutGroupOrderInput | PaymentTransferCreateOrConnectWithoutGroupOrderInput[]
    createMany?: PaymentTransferCreateManyGroupOrderInputEnvelope
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
  }

  export type EnumGroupOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.GroupOrderStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutGroupOrdersNestedInput = {
    create?: XOR<UserCreateWithoutGroupOrdersInput, UserUncheckedCreateWithoutGroupOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupOrdersInput
    upsert?: UserUpsertWithoutGroupOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupOrdersInput, UserUpdateWithoutGroupOrdersInput>, UserUncheckedUpdateWithoutGroupOrdersInput>
  }

  export type RestaurantUpdateOneRequiredWithoutGroupOrdersNestedInput = {
    create?: XOR<RestaurantCreateWithoutGroupOrdersInput, RestaurantUncheckedCreateWithoutGroupOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutGroupOrdersInput
    upsert?: RestaurantUpsertWithoutGroupOrdersInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutGroupOrdersInput, RestaurantUpdateWithoutGroupOrdersInput>, RestaurantUncheckedUpdateWithoutGroupOrdersInput>
  }

  export type GroupMemberUpdateManyWithoutGroupOrderNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupOrderInput, GroupMemberUncheckedCreateWithoutGroupOrderInput> | GroupMemberCreateWithoutGroupOrderInput[] | GroupMemberUncheckedCreateWithoutGroupOrderInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupOrderInput | GroupMemberCreateOrConnectWithoutGroupOrderInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupOrderInput | GroupMemberUpsertWithWhereUniqueWithoutGroupOrderInput[]
    createMany?: GroupMemberCreateManyGroupOrderInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupOrderInput | GroupMemberUpdateWithWhereUniqueWithoutGroupOrderInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupOrderInput | GroupMemberUpdateManyWithWhereWithoutGroupOrderInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type PaymentTransferUpdateManyWithoutGroupOrderNestedInput = {
    create?: XOR<PaymentTransferCreateWithoutGroupOrderInput, PaymentTransferUncheckedCreateWithoutGroupOrderInput> | PaymentTransferCreateWithoutGroupOrderInput[] | PaymentTransferUncheckedCreateWithoutGroupOrderInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutGroupOrderInput | PaymentTransferCreateOrConnectWithoutGroupOrderInput[]
    upsert?: PaymentTransferUpsertWithWhereUniqueWithoutGroupOrderInput | PaymentTransferUpsertWithWhereUniqueWithoutGroupOrderInput[]
    createMany?: PaymentTransferCreateManyGroupOrderInputEnvelope
    set?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    disconnect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    delete?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    update?: PaymentTransferUpdateWithWhereUniqueWithoutGroupOrderInput | PaymentTransferUpdateWithWhereUniqueWithoutGroupOrderInput[]
    updateMany?: PaymentTransferUpdateManyWithWhereWithoutGroupOrderInput | PaymentTransferUpdateManyWithWhereWithoutGroupOrderInput[]
    deleteMany?: PaymentTransferScalarWhereInput | PaymentTransferScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupOrderNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupOrderInput, GroupMemberUncheckedCreateWithoutGroupOrderInput> | GroupMemberCreateWithoutGroupOrderInput[] | GroupMemberUncheckedCreateWithoutGroupOrderInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupOrderInput | GroupMemberCreateOrConnectWithoutGroupOrderInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupOrderInput | GroupMemberUpsertWithWhereUniqueWithoutGroupOrderInput[]
    createMany?: GroupMemberCreateManyGroupOrderInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupOrderInput | GroupMemberUpdateWithWhereUniqueWithoutGroupOrderInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupOrderInput | GroupMemberUpdateManyWithWhereWithoutGroupOrderInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type PaymentTransferUncheckedUpdateManyWithoutGroupOrderNestedInput = {
    create?: XOR<PaymentTransferCreateWithoutGroupOrderInput, PaymentTransferUncheckedCreateWithoutGroupOrderInput> | PaymentTransferCreateWithoutGroupOrderInput[] | PaymentTransferUncheckedCreateWithoutGroupOrderInput[]
    connectOrCreate?: PaymentTransferCreateOrConnectWithoutGroupOrderInput | PaymentTransferCreateOrConnectWithoutGroupOrderInput[]
    upsert?: PaymentTransferUpsertWithWhereUniqueWithoutGroupOrderInput | PaymentTransferUpsertWithWhereUniqueWithoutGroupOrderInput[]
    createMany?: PaymentTransferCreateManyGroupOrderInputEnvelope
    set?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    disconnect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    delete?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    connect?: PaymentTransferWhereUniqueInput | PaymentTransferWhereUniqueInput[]
    update?: PaymentTransferUpdateWithWhereUniqueWithoutGroupOrderInput | PaymentTransferUpdateWithWhereUniqueWithoutGroupOrderInput[]
    updateMany?: PaymentTransferUpdateManyWithWhereWithoutGroupOrderInput | PaymentTransferUpdateManyWithWhereWithoutGroupOrderInput[]
    deleteMany?: PaymentTransferScalarWhereInput | PaymentTransferScalarWhereInput[]
  }

  export type GroupOrderCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupOrderCreateWithoutMembersInput, GroupOrderUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupOrderCreateOrConnectWithoutMembersInput
    connect?: GroupOrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupMembersInput = {
    create?: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGroupRoleFieldUpdateOperationsInput = {
    set?: $Enums.GroupRole
  }

  export type GroupOrderUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupOrderCreateWithoutMembersInput, GroupOrderUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupOrderCreateOrConnectWithoutMembersInput
    upsert?: GroupOrderUpsertWithoutMembersInput
    connect?: GroupOrderWhereUniqueInput
    update?: XOR<XOR<GroupOrderUpdateToOneWithWhereWithoutMembersInput, GroupOrderUpdateWithoutMembersInput>, GroupOrderUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutGroupMembersNestedInput = {
    create?: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembersInput
    upsert?: UserUpsertWithoutGroupMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupMembersInput, UserUpdateWithoutGroupMembersInput>, UserUncheckedUpdateWithoutGroupMembersInput>
  }

  export type UserCreateNestedOneWithoutBankAccountsInput = {
    create?: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutBankAccountsNestedInput = {
    create?: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankAccountsInput
    upsert?: UserUpsertWithoutBankAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBankAccountsInput, UserUpdateWithoutBankAccountsInput>, UserUncheckedUpdateWithoutBankAccountsInput>
  }

  export type GroupOrderCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<GroupOrderCreateWithoutPaymentsInput, GroupOrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: GroupOrderCreateOrConnectWithoutPaymentsInput
    connect?: GroupOrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentTransfersFromInput = {
    create?: XOR<UserCreateWithoutPaymentTransfersFromInput, UserUncheckedCreateWithoutPaymentTransfersFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentTransfersFromInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentTransfersToInput = {
    create?: XOR<UserCreateWithoutPaymentTransfersToInput, UserUncheckedCreateWithoutPaymentTransfersToInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentTransfersToInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentTransferStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentTransferStatus
  }

  export type GroupOrderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<GroupOrderCreateWithoutPaymentsInput, GroupOrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: GroupOrderCreateOrConnectWithoutPaymentsInput
    upsert?: GroupOrderUpsertWithoutPaymentsInput
    connect?: GroupOrderWhereUniqueInput
    update?: XOR<XOR<GroupOrderUpdateToOneWithWhereWithoutPaymentsInput, GroupOrderUpdateWithoutPaymentsInput>, GroupOrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentTransfersFromNestedInput = {
    create?: XOR<UserCreateWithoutPaymentTransfersFromInput, UserUncheckedCreateWithoutPaymentTransfersFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentTransfersFromInput
    upsert?: UserUpsertWithoutPaymentTransfersFromInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentTransfersFromInput, UserUpdateWithoutPaymentTransfersFromInput>, UserUncheckedUpdateWithoutPaymentTransfersFromInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentTransfersToNestedInput = {
    create?: XOR<UserCreateWithoutPaymentTransfersToInput, UserUncheckedCreateWithoutPaymentTransfersToInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentTransfersToInput
    upsert?: UserUpsertWithoutPaymentTransfersToInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentTransfersToInput, UserUpdateWithoutPaymentTransfersToInput>, UserUncheckedUpdateWithoutPaymentTransfersToInput>
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type OrderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    upsert?: OrderUpsertWithoutPaymentInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentInput, OrderUpdateWithoutPaymentInput>, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumGroupOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupOrderStatus | EnumGroupOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GroupOrderStatus[] | ListEnumGroupOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupOrderStatus[] | ListEnumGroupOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupOrderStatusFilter<$PrismaModel> | $Enums.GroupOrderStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGroupOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupOrderStatus | EnumGroupOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GroupOrderStatus[] | ListEnumGroupOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupOrderStatus[] | ListEnumGroupOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.GroupOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumGroupOrderStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGroupRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRole | EnumGroupRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupRole[] | ListEnumGroupRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupRole[] | ListEnumGroupRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupRoleFilter<$PrismaModel> | $Enums.GroupRole
  }

  export type NestedEnumGroupRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRole | EnumGroupRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupRole[] | ListEnumGroupRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupRole[] | ListEnumGroupRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupRoleWithAggregatesFilter<$PrismaModel> | $Enums.GroupRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupRoleFilter<$PrismaModel>
    _max?: NestedEnumGroupRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTransferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentTransferStatus | EnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentTransferStatus[] | ListEnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentTransferStatus[] | ListEnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTransferStatusFilter<$PrismaModel> | $Enums.PaymentTransferStatus
  }

  export type NestedEnumPaymentTransferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentTransferStatus | EnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentTransferStatus[] | ListEnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentTransferStatus[] | ListEnumPaymentTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTransferStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentTransferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTransferStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentTransferStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BankAccountCreateWithoutUserInput = {
    id?: string
    bankName: string
    accountNumber: string
    accountHolderName: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountUncheckedCreateWithoutUserInput = {
    id?: string
    bankName: string
    accountNumber: string
    accountHolderName: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountCreateOrConnectWithoutUserInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput>
  }

  export type BankAccountCreateManyUserInputEnvelope = {
    data: BankAccountCreateManyUserInput | BankAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.GroupRole
    cartTotal?: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
    groupOrder: GroupOrderCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    id?: string
    groupOrderId: string
    role?: $Enums.GroupRole
    cartTotal?: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupOrderCreateWithoutOwnerInput = {
    id?: string
    groupId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutGroupOrdersInput
    members?: GroupMemberCreateNestedManyWithoutGroupOrderInput
    payments?: PaymentTransferCreateNestedManyWithoutGroupOrderInput
  }

  export type GroupOrderUncheckedCreateWithoutOwnerInput = {
    id?: string
    groupId: string
    restaurantId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupOrderInput
    payments?: PaymentTransferUncheckedCreateNestedManyWithoutGroupOrderInput
  }

  export type GroupOrderCreateOrConnectWithoutOwnerInput = {
    where: GroupOrderWhereUniqueInput
    create: XOR<GroupOrderCreateWithoutOwnerInput, GroupOrderUncheckedCreateWithoutOwnerInput>
  }

  export type GroupOrderCreateManyOwnerInputEnvelope = {
    data: GroupOrderCreateManyOwnerInput | GroupOrderCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentTransferCreateWithoutFromUserInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupOrder: GroupOrderCreateNestedOneWithoutPaymentsInput
    toUser: UserCreateNestedOneWithoutPaymentTransfersToInput
  }

  export type PaymentTransferUncheckedCreateWithoutFromUserInput = {
    id?: string
    groupOrderId: string
    toUserId: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransferCreateOrConnectWithoutFromUserInput = {
    where: PaymentTransferWhereUniqueInput
    create: XOR<PaymentTransferCreateWithoutFromUserInput, PaymentTransferUncheckedCreateWithoutFromUserInput>
  }

  export type PaymentTransferCreateManyFromUserInputEnvelope = {
    data: PaymentTransferCreateManyFromUserInput | PaymentTransferCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentTransferCreateWithoutToUserInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupOrder: GroupOrderCreateNestedOneWithoutPaymentsInput
    fromUser: UserCreateNestedOneWithoutPaymentTransfersFromInput
  }

  export type PaymentTransferUncheckedCreateWithoutToUserInput = {
    id?: string
    groupOrderId: string
    fromUserId: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransferCreateOrConnectWithoutToUserInput = {
    where: PaymentTransferWhereUniqueInput
    create: XOR<PaymentTransferCreateWithoutToUserInput, PaymentTransferUncheckedCreateWithoutToUserInput>
  }

  export type PaymentTransferCreateManyToUserInputEnvelope = {
    data: PaymentTransferCreateManyToUserInput | PaymentTransferCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: FloatFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type BankAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: BankAccountWhereUniqueInput
    update: XOR<BankAccountUpdateWithoutUserInput, BankAccountUncheckedUpdateWithoutUserInput>
    create: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput>
  }

  export type BankAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: BankAccountWhereUniqueInput
    data: XOR<BankAccountUpdateWithoutUserInput, BankAccountUncheckedUpdateWithoutUserInput>
  }

  export type BankAccountUpdateManyWithWhereWithoutUserInput = {
    where: BankAccountScalarWhereInput
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type BankAccountScalarWhereInput = {
    AND?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    OR?: BankAccountScalarWhereInput[]
    NOT?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    id?: StringFilter<"BankAccount"> | string
    userId?: StringFilter<"BankAccount"> | string
    bankName?: StringFilter<"BankAccount"> | string
    accountNumber?: StringFilter<"BankAccount"> | string
    accountHolderName?: StringFilter<"BankAccount"> | string
    isDefault?: BoolFilter<"BankAccount"> | boolean
    isActive?: BoolFilter<"BankAccount"> | boolean
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    groupOrderId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    role?: EnumGroupRoleFilter<"GroupMember"> | $Enums.GroupRole
    cartTotal?: FloatFilter<"GroupMember"> | number
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    leftAt?: DateTimeNullableFilter<"GroupMember"> | Date | string | null
  }

  export type GroupOrderUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GroupOrderWhereUniqueInput
    update: XOR<GroupOrderUpdateWithoutOwnerInput, GroupOrderUncheckedUpdateWithoutOwnerInput>
    create: XOR<GroupOrderCreateWithoutOwnerInput, GroupOrderUncheckedCreateWithoutOwnerInput>
  }

  export type GroupOrderUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GroupOrderWhereUniqueInput
    data: XOR<GroupOrderUpdateWithoutOwnerInput, GroupOrderUncheckedUpdateWithoutOwnerInput>
  }

  export type GroupOrderUpdateManyWithWhereWithoutOwnerInput = {
    where: GroupOrderScalarWhereInput
    data: XOR<GroupOrderUpdateManyMutationInput, GroupOrderUncheckedUpdateManyWithoutOwnerInput>
  }

  export type GroupOrderScalarWhereInput = {
    AND?: GroupOrderScalarWhereInput | GroupOrderScalarWhereInput[]
    OR?: GroupOrderScalarWhereInput[]
    NOT?: GroupOrderScalarWhereInput | GroupOrderScalarWhereInput[]
    id?: StringFilter<"GroupOrder"> | string
    groupId?: StringFilter<"GroupOrder"> | string
    ownerId?: StringFilter<"GroupOrder"> | string
    restaurantId?: StringFilter<"GroupOrder"> | string
    platform?: EnumPlatformFilter<"GroupOrder"> | $Enums.Platform
    platformOrderId?: StringNullableFilter<"GroupOrder"> | string | null
    status?: EnumGroupOrderStatusFilter<"GroupOrder"> | $Enums.GroupOrderStatus
    totalAmount?: FloatFilter<"GroupOrder"> | number
    deliveryFee?: FloatFilter<"GroupOrder"> | number
    serviceFee?: FloatFilter<"GroupOrder"> | number
    tax?: FloatFilter<"GroupOrder"> | number
    lockedAt?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    placedAt?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    paymentDeadline?: DateTimeNullableFilter<"GroupOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"GroupOrder"> | Date | string
    updatedAt?: DateTimeFilter<"GroupOrder"> | Date | string
  }

  export type PaymentTransferUpsertWithWhereUniqueWithoutFromUserInput = {
    where: PaymentTransferWhereUniqueInput
    update: XOR<PaymentTransferUpdateWithoutFromUserInput, PaymentTransferUncheckedUpdateWithoutFromUserInput>
    create: XOR<PaymentTransferCreateWithoutFromUserInput, PaymentTransferUncheckedCreateWithoutFromUserInput>
  }

  export type PaymentTransferUpdateWithWhereUniqueWithoutFromUserInput = {
    where: PaymentTransferWhereUniqueInput
    data: XOR<PaymentTransferUpdateWithoutFromUserInput, PaymentTransferUncheckedUpdateWithoutFromUserInput>
  }

  export type PaymentTransferUpdateManyWithWhereWithoutFromUserInput = {
    where: PaymentTransferScalarWhereInput
    data: XOR<PaymentTransferUpdateManyMutationInput, PaymentTransferUncheckedUpdateManyWithoutFromUserInput>
  }

  export type PaymentTransferScalarWhereInput = {
    AND?: PaymentTransferScalarWhereInput | PaymentTransferScalarWhereInput[]
    OR?: PaymentTransferScalarWhereInput[]
    NOT?: PaymentTransferScalarWhereInput | PaymentTransferScalarWhereInput[]
    id?: StringFilter<"PaymentTransfer"> | string
    groupOrderId?: StringFilter<"PaymentTransfer"> | string
    fromUserId?: StringFilter<"PaymentTransfer"> | string
    toUserId?: StringFilter<"PaymentTransfer"> | string
    amount?: FloatFilter<"PaymentTransfer"> | number
    status?: EnumPaymentTransferStatusFilter<"PaymentTransfer"> | $Enums.PaymentTransferStatus
    transactionId?: StringNullableFilter<"PaymentTransfer"> | string | null
    bankName?: StringNullableFilter<"PaymentTransfer"> | string | null
    transferDate?: DateTimeNullableFilter<"PaymentTransfer"> | Date | string | null
    verifiedAt?: DateTimeNullableFilter<"PaymentTransfer"> | Date | string | null
    verifiedBy?: StringNullableFilter<"PaymentTransfer"> | string | null
    notes?: StringNullableFilter<"PaymentTransfer"> | string | null
    screenshotUrl?: StringNullableFilter<"PaymentTransfer"> | string | null
    createdAt?: DateTimeFilter<"PaymentTransfer"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentTransfer"> | Date | string
  }

  export type PaymentTransferUpsertWithWhereUniqueWithoutToUserInput = {
    where: PaymentTransferWhereUniqueInput
    update: XOR<PaymentTransferUpdateWithoutToUserInput, PaymentTransferUncheckedUpdateWithoutToUserInput>
    create: XOR<PaymentTransferCreateWithoutToUserInput, PaymentTransferUncheckedCreateWithoutToUserInput>
  }

  export type PaymentTransferUpdateWithWhereUniqueWithoutToUserInput = {
    where: PaymentTransferWhereUniqueInput
    data: XOR<PaymentTransferUpdateWithoutToUserInput, PaymentTransferUncheckedUpdateWithoutToUserInput>
  }

  export type PaymentTransferUpdateManyWithWhereWithoutToUserInput = {
    where: PaymentTransferScalarWhereInput
    data: XOR<PaymentTransferUpdateManyMutationInput, PaymentTransferUncheckedUpdateManyWithoutToUserInput>
  }

  export type ProductCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRestaurantInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput>
  }

  export type ProductCreateManyRestaurantInputEnvelope = {
    data: ProductCreateManyRestaurantInput | ProductCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type GroupOrderCreateWithoutRestaurantInput = {
    id?: string
    groupId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutGroupOrdersInput
    members?: GroupMemberCreateNestedManyWithoutGroupOrderInput
    payments?: PaymentTransferCreateNestedManyWithoutGroupOrderInput
  }

  export type GroupOrderUncheckedCreateWithoutRestaurantInput = {
    id?: string
    groupId: string
    ownerId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupOrderInput
    payments?: PaymentTransferUncheckedCreateNestedManyWithoutGroupOrderInput
  }

  export type GroupOrderCreateOrConnectWithoutRestaurantInput = {
    where: GroupOrderWhereUniqueInput
    create: XOR<GroupOrderCreateWithoutRestaurantInput, GroupOrderUncheckedCreateWithoutRestaurantInput>
  }

  export type GroupOrderCreateManyRestaurantInputEnvelope = {
    data: GroupOrderCreateManyRestaurantInput | GroupOrderCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutRestaurantInput, ProductUncheckedUpdateWithoutRestaurantInput>
    create: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutRestaurantInput, ProductUncheckedUpdateWithoutRestaurantInput>
  }

  export type ProductUpdateManyWithWhereWithoutRestaurantInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    restaurantId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type GroupOrderUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: GroupOrderWhereUniqueInput
    update: XOR<GroupOrderUpdateWithoutRestaurantInput, GroupOrderUncheckedUpdateWithoutRestaurantInput>
    create: XOR<GroupOrderCreateWithoutRestaurantInput, GroupOrderUncheckedCreateWithoutRestaurantInput>
  }

  export type GroupOrderUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: GroupOrderWhereUniqueInput
    data: XOR<GroupOrderUpdateWithoutRestaurantInput, GroupOrderUncheckedUpdateWithoutRestaurantInput>
  }

  export type GroupOrderUpdateManyWithWhereWithoutRestaurantInput = {
    where: GroupOrderScalarWhereInput
    data: XOR<GroupOrderUpdateManyMutationInput, GroupOrderUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type RestaurantCreateWithoutProductsInput = {
    id?: string
    name: string
    platform?: $Enums.Platform
    grabLink?: string | null
    shopeeLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupOrders?: GroupOrderCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    platform?: $Enums.Platform
    grabLink?: string | null
    shopeeLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupOrders?: GroupOrderUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutProductsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutProductsInput, RestaurantUncheckedCreateWithoutProductsInput>
  }

  export type OrderItemCreateWithoutProductInput = {
    id?: string
    quantity?: number
    price: number
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
    quantity?: number
    price: number
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutProductsInput = {
    update: XOR<RestaurantUpdateWithoutProductsInput, RestaurantUncheckedUpdateWithoutProductsInput>
    create: XOR<RestaurantCreateWithoutProductsInput, RestaurantUncheckedCreateWithoutProductsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutProductsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutProductsInput, RestaurantUncheckedUpdateWithoutProductsInput>
  }

  export type RestaurantUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    grabLink?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupOrders?: GroupOrderUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    grabLink?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupOrders?: GroupOrderUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderCreateNestedManyWithoutOwnerInput
    paymentTransfersFrom?: PaymentTransferCreateNestedManyWithoutFromUserInput
    paymentTransfersTo?: PaymentTransferCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderUncheckedCreateNestedManyWithoutOwnerInput
    paymentTransfersFrom?: PaymentTransferUncheckedCreateNestedManyWithoutFromUserInput
    paymentTransfersTo?: PaymentTransferUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity?: number
    price: number
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    quantity?: number
    price: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutOrderInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUpdateManyWithoutOwnerNestedInput
    paymentTransfersFrom?: PaymentTransferUpdateManyWithoutFromUserNestedInput
    paymentTransfersTo?: PaymentTransferUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUncheckedUpdateManyWithoutOwnerNestedInput
    paymentTransfersFrom?: PaymentTransferUncheckedUpdateManyWithoutFromUserNestedInput
    paymentTransfersTo?: PaymentTransferUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentUpsertWithoutOrderInput = {
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutGroupOrdersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    bankAccounts?: BankAccountCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    paymentTransfersFrom?: PaymentTransferCreateNestedManyWithoutFromUserInput
    paymentTransfersTo?: PaymentTransferCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutGroupOrdersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    paymentTransfersFrom?: PaymentTransferUncheckedCreateNestedManyWithoutFromUserInput
    paymentTransfersTo?: PaymentTransferUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutGroupOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupOrdersInput, UserUncheckedCreateWithoutGroupOrdersInput>
  }

  export type RestaurantCreateWithoutGroupOrdersInput = {
    id?: string
    name: string
    platform?: $Enums.Platform
    grabLink?: string | null
    shopeeLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutGroupOrdersInput = {
    id?: string
    name: string
    platform?: $Enums.Platform
    grabLink?: string | null
    shopeeLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutGroupOrdersInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutGroupOrdersInput, RestaurantUncheckedCreateWithoutGroupOrdersInput>
  }

  export type GroupMemberCreateWithoutGroupOrderInput = {
    id?: string
    role?: $Enums.GroupRole
    cartTotal?: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
    user: UserCreateNestedOneWithoutGroupMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupOrderInput = {
    id?: string
    userId: string
    role?: $Enums.GroupRole
    cartTotal?: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type GroupMemberCreateOrConnectWithoutGroupOrderInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupOrderInput, GroupMemberUncheckedCreateWithoutGroupOrderInput>
  }

  export type GroupMemberCreateManyGroupOrderInputEnvelope = {
    data: GroupMemberCreateManyGroupOrderInput | GroupMemberCreateManyGroupOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentTransferCreateWithoutGroupOrderInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fromUser: UserCreateNestedOneWithoutPaymentTransfersFromInput
    toUser: UserCreateNestedOneWithoutPaymentTransfersToInput
  }

  export type PaymentTransferUncheckedCreateWithoutGroupOrderInput = {
    id?: string
    fromUserId: string
    toUserId: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransferCreateOrConnectWithoutGroupOrderInput = {
    where: PaymentTransferWhereUniqueInput
    create: XOR<PaymentTransferCreateWithoutGroupOrderInput, PaymentTransferUncheckedCreateWithoutGroupOrderInput>
  }

  export type PaymentTransferCreateManyGroupOrderInputEnvelope = {
    data: PaymentTransferCreateManyGroupOrderInput | PaymentTransferCreateManyGroupOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGroupOrdersInput = {
    update: XOR<UserUpdateWithoutGroupOrdersInput, UserUncheckedUpdateWithoutGroupOrdersInput>
    create: XOR<UserCreateWithoutGroupOrdersInput, UserUncheckedCreateWithoutGroupOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupOrdersInput, UserUncheckedUpdateWithoutGroupOrdersInput>
  }

  export type UserUpdateWithoutGroupOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    bankAccounts?: BankAccountUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    paymentTransfersFrom?: PaymentTransferUpdateManyWithoutFromUserNestedInput
    paymentTransfersTo?: PaymentTransferUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    paymentTransfersFrom?: PaymentTransferUncheckedUpdateManyWithoutFromUserNestedInput
    paymentTransfersTo?: PaymentTransferUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type RestaurantUpsertWithoutGroupOrdersInput = {
    update: XOR<RestaurantUpdateWithoutGroupOrdersInput, RestaurantUncheckedUpdateWithoutGroupOrdersInput>
    create: XOR<RestaurantCreateWithoutGroupOrdersInput, RestaurantUncheckedCreateWithoutGroupOrdersInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutGroupOrdersInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutGroupOrdersInput, RestaurantUncheckedUpdateWithoutGroupOrdersInput>
  }

  export type RestaurantUpdateWithoutGroupOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    grabLink?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutGroupOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    grabLink?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupOrderInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupOrderInput, GroupMemberUncheckedUpdateWithoutGroupOrderInput>
    create: XOR<GroupMemberCreateWithoutGroupOrderInput, GroupMemberUncheckedCreateWithoutGroupOrderInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupOrderInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupOrderInput, GroupMemberUncheckedUpdateWithoutGroupOrderInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupOrderInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupOrderInput>
  }

  export type PaymentTransferUpsertWithWhereUniqueWithoutGroupOrderInput = {
    where: PaymentTransferWhereUniqueInput
    update: XOR<PaymentTransferUpdateWithoutGroupOrderInput, PaymentTransferUncheckedUpdateWithoutGroupOrderInput>
    create: XOR<PaymentTransferCreateWithoutGroupOrderInput, PaymentTransferUncheckedCreateWithoutGroupOrderInput>
  }

  export type PaymentTransferUpdateWithWhereUniqueWithoutGroupOrderInput = {
    where: PaymentTransferWhereUniqueInput
    data: XOR<PaymentTransferUpdateWithoutGroupOrderInput, PaymentTransferUncheckedUpdateWithoutGroupOrderInput>
  }

  export type PaymentTransferUpdateManyWithWhereWithoutGroupOrderInput = {
    where: PaymentTransferScalarWhereInput
    data: XOR<PaymentTransferUpdateManyMutationInput, PaymentTransferUncheckedUpdateManyWithoutGroupOrderInput>
  }

  export type GroupOrderCreateWithoutMembersInput = {
    id?: string
    groupId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutGroupOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutGroupOrdersInput
    payments?: PaymentTransferCreateNestedManyWithoutGroupOrderInput
  }

  export type GroupOrderUncheckedCreateWithoutMembersInput = {
    id?: string
    groupId: string
    ownerId: string
    restaurantId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentTransferUncheckedCreateNestedManyWithoutGroupOrderInput
  }

  export type GroupOrderCreateOrConnectWithoutMembersInput = {
    where: GroupOrderWhereUniqueInput
    create: XOR<GroupOrderCreateWithoutMembersInput, GroupOrderUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutGroupMembersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    bankAccounts?: BankAccountCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderCreateNestedManyWithoutOwnerInput
    paymentTransfersFrom?: PaymentTransferCreateNestedManyWithoutFromUserInput
    paymentTransfersTo?: PaymentTransferCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutGroupMembersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderUncheckedCreateNestedManyWithoutOwnerInput
    paymentTransfersFrom?: PaymentTransferUncheckedCreateNestedManyWithoutFromUserInput
    paymentTransfersTo?: PaymentTransferUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutGroupMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
  }

  export type GroupOrderUpsertWithoutMembersInput = {
    update: XOR<GroupOrderUpdateWithoutMembersInput, GroupOrderUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupOrderCreateWithoutMembersInput, GroupOrderUncheckedCreateWithoutMembersInput>
    where?: GroupOrderWhereInput
  }

  export type GroupOrderUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupOrderWhereInput
    data: XOR<GroupOrderUpdateWithoutMembersInput, GroupOrderUncheckedUpdateWithoutMembersInput>
  }

  export type GroupOrderUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGroupOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutGroupOrdersNestedInput
    payments?: PaymentTransferUpdateManyWithoutGroupOrderNestedInput
  }

  export type GroupOrderUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentTransferUncheckedUpdateManyWithoutGroupOrderNestedInput
  }

  export type UserUpsertWithoutGroupMembersInput = {
    update: XOR<UserUpdateWithoutGroupMembersInput, UserUncheckedUpdateWithoutGroupMembersInput>
    create: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupMembersInput, UserUncheckedUpdateWithoutGroupMembersInput>
  }

  export type UserUpdateWithoutGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    bankAccounts?: BankAccountUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUpdateManyWithoutOwnerNestedInput
    paymentTransfersFrom?: PaymentTransferUpdateManyWithoutFromUserNestedInput
    paymentTransfersTo?: PaymentTransferUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUncheckedUpdateManyWithoutOwnerNestedInput
    paymentTransfersFrom?: PaymentTransferUncheckedUpdateManyWithoutFromUserNestedInput
    paymentTransfersTo?: PaymentTransferUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateWithoutBankAccountsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderCreateNestedManyWithoutOwnerInput
    paymentTransfersFrom?: PaymentTransferCreateNestedManyWithoutFromUserInput
    paymentTransfersTo?: PaymentTransferCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutBankAccountsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderUncheckedCreateNestedManyWithoutOwnerInput
    paymentTransfersFrom?: PaymentTransferUncheckedCreateNestedManyWithoutFromUserInput
    paymentTransfersTo?: PaymentTransferUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutBankAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
  }

  export type UserUpsertWithoutBankAccountsInput = {
    update: XOR<UserUpdateWithoutBankAccountsInput, UserUncheckedUpdateWithoutBankAccountsInput>
    create: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBankAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBankAccountsInput, UserUncheckedUpdateWithoutBankAccountsInput>
  }

  export type UserUpdateWithoutBankAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUpdateManyWithoutOwnerNestedInput
    paymentTransfersFrom?: PaymentTransferUpdateManyWithoutFromUserNestedInput
    paymentTransfersTo?: PaymentTransferUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBankAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUncheckedUpdateManyWithoutOwnerNestedInput
    paymentTransfersFrom?: PaymentTransferUncheckedUpdateManyWithoutFromUserNestedInput
    paymentTransfersTo?: PaymentTransferUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type GroupOrderCreateWithoutPaymentsInput = {
    id?: string
    groupId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutGroupOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutGroupOrdersInput
    members?: GroupMemberCreateNestedManyWithoutGroupOrderInput
  }

  export type GroupOrderUncheckedCreateWithoutPaymentsInput = {
    id?: string
    groupId: string
    ownerId: string
    restaurantId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupOrderInput
  }

  export type GroupOrderCreateOrConnectWithoutPaymentsInput = {
    where: GroupOrderWhereUniqueInput
    create: XOR<GroupOrderCreateWithoutPaymentsInput, GroupOrderUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentTransfersFromInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    bankAccounts?: BankAccountCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderCreateNestedManyWithoutOwnerInput
    paymentTransfersTo?: PaymentTransferCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutPaymentTransfersFromInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderUncheckedCreateNestedManyWithoutOwnerInput
    paymentTransfersTo?: PaymentTransferUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutPaymentTransfersFromInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentTransfersFromInput, UserUncheckedCreateWithoutPaymentTransfersFromInput>
  }

  export type UserCreateWithoutPaymentTransfersToInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    bankAccounts?: BankAccountCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderCreateNestedManyWithoutOwnerInput
    paymentTransfersFrom?: PaymentTransferCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutPaymentTransfersToInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupOrders?: GroupOrderUncheckedCreateNestedManyWithoutOwnerInput
    paymentTransfersFrom?: PaymentTransferUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutPaymentTransfersToInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentTransfersToInput, UserUncheckedCreateWithoutPaymentTransfersToInput>
  }

  export type GroupOrderUpsertWithoutPaymentsInput = {
    update: XOR<GroupOrderUpdateWithoutPaymentsInput, GroupOrderUncheckedUpdateWithoutPaymentsInput>
    create: XOR<GroupOrderCreateWithoutPaymentsInput, GroupOrderUncheckedCreateWithoutPaymentsInput>
    where?: GroupOrderWhereInput
  }

  export type GroupOrderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: GroupOrderWhereInput
    data: XOR<GroupOrderUpdateWithoutPaymentsInput, GroupOrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type GroupOrderUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGroupOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutGroupOrdersNestedInput
    members?: GroupMemberUpdateManyWithoutGroupOrderNestedInput
  }

  export type GroupOrderUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupOrderNestedInput
  }

  export type UserUpsertWithoutPaymentTransfersFromInput = {
    update: XOR<UserUpdateWithoutPaymentTransfersFromInput, UserUncheckedUpdateWithoutPaymentTransfersFromInput>
    create: XOR<UserCreateWithoutPaymentTransfersFromInput, UserUncheckedCreateWithoutPaymentTransfersFromInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentTransfersFromInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentTransfersFromInput, UserUncheckedUpdateWithoutPaymentTransfersFromInput>
  }

  export type UserUpdateWithoutPaymentTransfersFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    bankAccounts?: BankAccountUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUpdateManyWithoutOwnerNestedInput
    paymentTransfersTo?: PaymentTransferUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentTransfersFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUncheckedUpdateManyWithoutOwnerNestedInput
    paymentTransfersTo?: PaymentTransferUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutPaymentTransfersToInput = {
    update: XOR<UserUpdateWithoutPaymentTransfersToInput, UserUncheckedUpdateWithoutPaymentTransfersToInput>
    create: XOR<UserCreateWithoutPaymentTransfersToInput, UserUncheckedCreateWithoutPaymentTransfersToInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentTransfersToInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentTransfersToInput, UserUncheckedUpdateWithoutPaymentTransfersToInput>
  }

  export type UserUpdateWithoutPaymentTransfersToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    bankAccounts?: BankAccountUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUpdateManyWithoutOwnerNestedInput
    paymentTransfersFrom?: PaymentTransferUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentTransfersToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupOrders?: GroupOrderUncheckedUpdateManyWithoutOwnerNestedInput
    paymentTransfersFrom?: PaymentTransferUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    userId: string
    status?: $Enums.OrderStatus
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    stock?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutPaymentInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    status?: $Enums.OrderStatus
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderUpsertWithoutPaymentInput = {
    update: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountCreateManyUserInput = {
    id?: string
    bankName: string
    accountNumber: string
    accountHolderName: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateManyUserInput = {
    id?: string
    groupOrderId: string
    role?: $Enums.GroupRole
    cartTotal?: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type GroupOrderCreateManyOwnerInput = {
    id?: string
    groupId: string
    restaurantId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransferCreateManyFromUserInput = {
    id?: string
    groupOrderId: string
    toUserId: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransferCreateManyToUserInput = {
    id?: string
    groupOrderId: string
    fromUserId: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole
    cartTotal?: FloatFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupOrder?: GroupOrderUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupOrderId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole
    cartTotal?: FloatFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupOrderId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole
    cartTotal?: FloatFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupOrderUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutGroupOrdersNestedInput
    members?: GroupMemberUpdateManyWithoutGroupOrderNestedInput
    payments?: PaymentTransferUpdateManyWithoutGroupOrderNestedInput
  }

  export type GroupOrderUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupOrderNestedInput
    payments?: PaymentTransferUncheckedUpdateManyWithoutGroupOrderNestedInput
  }

  export type GroupOrderUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransferUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupOrder?: GroupOrderUpdateOneRequiredWithoutPaymentsNestedInput
    toUser?: UserUpdateOneRequiredWithoutPaymentTransfersToNestedInput
  }

  export type PaymentTransferUncheckedUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupOrderId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransferUncheckedUpdateManyWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupOrderId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransferUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupOrder?: GroupOrderUpdateOneRequiredWithoutPaymentsNestedInput
    fromUser?: UserUpdateOneRequiredWithoutPaymentTransfersFromNestedInput
  }

  export type PaymentTransferUncheckedUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupOrderId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransferUncheckedUpdateManyWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupOrderId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyRestaurantInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupOrderCreateManyRestaurantInput = {
    id?: string
    groupId: string
    ownerId: string
    platform?: $Enums.Platform
    platformOrderId?: string | null
    status?: $Enums.GroupOrderStatus
    totalAmount?: number
    deliveryFee?: number
    serviceFee?: number
    tax?: number
    lockedAt?: Date | string | null
    placedAt?: Date | string | null
    deliveredAt?: Date | string | null
    paymentDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupOrderUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGroupOrdersNestedInput
    members?: GroupMemberUpdateManyWithoutGroupOrderNestedInput
    payments?: PaymentTransferUpdateManyWithoutGroupOrderNestedInput
  }

  export type GroupOrderUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupOrderNestedInput
    payments?: PaymentTransferUncheckedUpdateManyWithoutGroupOrderNestedInput
  }

  export type GroupOrderUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupOrderStatusFieldUpdateOperationsInput | $Enums.GroupOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyProductInput = {
    id?: string
    orderId: string
    quantity?: number
    price: number
  }

  export type OrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productId: string
    quantity?: number
    price: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type GroupMemberCreateManyGroupOrderInput = {
    id?: string
    userId: string
    role?: $Enums.GroupRole
    cartTotal?: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type PaymentTransferCreateManyGroupOrderInput = {
    id?: string
    fromUserId: string
    toUserId: string
    amount: number
    status?: $Enums.PaymentTransferStatus
    transactionId?: string | null
    bankName?: string | null
    transferDate?: Date | string | null
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    notes?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberUpdateWithoutGroupOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole
    cartTotal?: FloatFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole
    cartTotal?: FloatFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole
    cartTotal?: FloatFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentTransferUpdateWithoutGroupOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutPaymentTransfersFromNestedInput
    toUser?: UserUpdateOneRequiredWithoutPaymentTransfersToNestedInput
  }

  export type PaymentTransferUncheckedUpdateWithoutGroupOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransferUncheckedUpdateManyWithoutGroupOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentTransferStatusFieldUpdateOperationsInput | $Enums.PaymentTransferStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    transferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}