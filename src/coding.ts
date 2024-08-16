// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// function hello(name: string, age?: number): string {
//   if (age !== undefined) return `Hello, ${name}. You are ${age}`;
//   else return `Hello, ${name}`;
// }

// const result = hello(); // "Hello, world"
// const result2 = hello("Sam"); // "Hello, Sam"

// function add(...nums: number[]) {
//   return nums.reduce((result, num) => result + num, 0);
// }

// add(1, 2, 3); //6

interface User {
  name: string;
}

const Sam: User = { name: "Sam" };

function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);

// 여기서 전달한 매개변수는 this 다음 부터 적용됨
a(30, "m");
