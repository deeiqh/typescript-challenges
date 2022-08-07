export type Flatten<T extends any[], R extends any[]=[]> =
    T extends [infer A, ...infer B] ?
        A extends any[] ?
            Flatten<[...A, ...B], R>
            :Flatten<B, [...R, A]>
    :R
        
    
            type FF = Flatten<[1, [2]]>;

        