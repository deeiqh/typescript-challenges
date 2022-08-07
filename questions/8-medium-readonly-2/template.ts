export type MyReadonly2<T, K extends keyof T = keyof T> = 
{
    [E in Exclude<keyof T, K>]: T[E];
} & 
{
    +readonly [E in K]: T[E]
};