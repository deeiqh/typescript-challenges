type Space = ' '|'\n'|'\t'
export type Trim<S extends string> = 
    S extends `${Space}${infer R}${Space}` ? Trim<R> : S;