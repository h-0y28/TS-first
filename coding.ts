type SuperPrint = {
  // return type도 T로 지정
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["1", "2", "3"]); // c: string
const d = superPrint([1, false, true, 4, "hello"]); // d: string | number | boolean
