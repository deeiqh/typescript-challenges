export type Absolute<T extends number | string | bigint> =  
    `${T}` extends `${'-'}${infer B }` ?
        B
        : `${T}`;
