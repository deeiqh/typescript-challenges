export type Pop<T extends any[]> =
T extends [... infer Es, infer _]? Es : never;
