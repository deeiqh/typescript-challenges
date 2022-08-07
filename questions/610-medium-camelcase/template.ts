export type CamelCase<S> =
S extends `${infer A}-${infer B}${infer C}`?
    B extends '-' ?
        `${A}-${CamelCase<`${B}${C}`>}`
    :Uppercase<B> extends ('' | B) ?
        S
    :`${CamelCase<A>}${Uppercase<B>}${CamelCase<C>}`
: S;
