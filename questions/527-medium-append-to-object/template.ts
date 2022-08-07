export type AppendToObject<T, U extends string, V extends any> = {
    [Key in keyof T | U]: Key extends keyof T ? T[Key] : V;
}
