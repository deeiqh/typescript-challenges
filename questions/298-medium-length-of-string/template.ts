export type LengthOfString<S extends string, L extends string[] = []> = 
    S extends `${infer A}${infer B}` ?
        LengthOfString<B, [...L, B]>
        : L['length']
