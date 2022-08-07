export type Merge<F, S> = {
    [Key in keyof F]: Key extends keyof S ? S[Key]: F[Key];
}