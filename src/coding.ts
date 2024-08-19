// Record<K,T>
// K = key
// T = type

// interface Score  {
//   "1": "A"|"B"|"C"|"D";
//   "2": "A"|"B"|"C"|"D";
//   "3": "A"|"B"|"C"|"D";
//   "4": "A"|"B"|"C"|"D";
// }

// type Grade = "1" | "2" | "3" | "4";
// type Score = "A" | "B" | "C" | "D" | "F";
// const score: Record<Grade, Score> = {
//   1: "A",
//   2: "B",
//   3: "C",
//   4: "D",
// };

interface User {
  id: number;
  name: string;
  age: number;
}

function isVaild(user: User) {
  const result: Record<keyof User, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}
