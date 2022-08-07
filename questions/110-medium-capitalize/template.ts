export type Capitalize<S extends string> = 
    S extends `${infer C}${infer R}` ? `${Uppercase<C>}${R}` : S;