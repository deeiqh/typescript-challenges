export type DeepReadonly<T> = 
{
    +readonly [K in keyof T]: 
        T[K] extends {(...args: any[]): any} ?
            T[K]
            : DeepReadonly<T[K]>;
}
