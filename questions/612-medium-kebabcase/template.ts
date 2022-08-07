type KebabCase_<S> =
    S extends `${infer H}${infer T}`?
            H extends Lowercase<H> ?
                `${H}${KebabCase_<T>}`
            : `-${Lowercase<H>}${KebabCase_<T>}`
    : S;

export type KebabCase<S> =
    KebabCase_<S> extends infer A ?
        A extends `-${infer H}${infer T}`?
            `${H}${T}`
        : A
    : never ;
