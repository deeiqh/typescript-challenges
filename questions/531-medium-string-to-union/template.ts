export type StringToUnion<T extends string, U = never> = 
    T extends `${infer A}${infer B}` ?
        StringToUnion<B, U | A>
        : U;