export type AnyOf<T extends readonly any[]> = 
    T[number] extends ''|' '|[]|{[key: string]: never}|0|false ?
        false
    : true;