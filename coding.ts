type SuperPrint = (a: any[]) => any;

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]); // a: any
const b = superPrint([true, false, true]); // b: any
const c = superPrint(["1", "2", "3"]); // c: any
const d = superPrint([1, false, true, 4, "hello"]); // d: any

// 보로를 받지 못 함 -> 배열의 첫번째 요소를 리턴해줌 = number
d.toUpperCase();
