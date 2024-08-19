// Partial<T>
// property를 모두 옵션으로 바꿔줌 => 일부만 사용하는 것이 강함

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

let admin: Partial<User> = {
  id: 1,
  name: "Bob",
};
