// keyof

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

// keyof key : interface의 key값들을 union 형태로 바꿀 수 있다
type UserKey = keyof User; // "id" | "name" | "age" | "gender"

const uk: UserKey = "id";
// interface의 key 값 이외의 값 => error
const uk2: UserKey = "";
