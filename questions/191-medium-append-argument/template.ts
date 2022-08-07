export type AppendArgument<Fn, A> = 
    Fn extends {(...args: infer Args): infer R} ?
        {(...args: [...Args, A]): R} 
        : never;

    type Fn = (a: number, b: string) => number

    type Result = AppendArgument<Fn, boolean>