export type MyReturnType<T> = T extends {(...args: never[]): infer Y} ? Y : never;
