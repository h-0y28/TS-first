// interface User {
//   name: string;
//   age: number;
//   gender?: string;
// }

// let user: User = {
//   name: "jack",
//   age: 19,
// };

// user.gender = "male";

// type Score = "A" | "B" | "C" | "F";

// interface User {
//   [grade: number]: Score;
// }

// let user: User = {
//   1: "A",
//   2: "B",
// };

interface Add {
  // (인자값, 리턴 값) : 반환 값
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

add(10, 20); // 30

interface IsAdult {
  (age: number): boolean;
}

const a: IsAdult = (age) => {
  return age > 19;
};
