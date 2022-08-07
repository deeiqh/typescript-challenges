export type MyOmit<T, K> = {[Property in Exclude<keyof T, K>]: T[Property]};

