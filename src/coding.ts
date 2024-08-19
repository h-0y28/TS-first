// Exclude<T1,T2>

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | boolean>; // type t2 = string
