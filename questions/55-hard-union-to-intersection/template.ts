export type UnionToIntersection<U> = 
    (U extends any ? 
        (arg: U) => void 
    : never) extends (arg: infer T) => void ?
        T
    : never;