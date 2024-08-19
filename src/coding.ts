// // Pick<T,K>

// interface User {
//   id: number;
//   name: string;
//   age: number;
//   gender: "M" | "F";
// }

// const admin: Pick<User, "id"|"name"> = {
//   id : 0 ,
//   name: "Bob"
// }

// Admit<T,K>

interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "F";
}

const admin: Omit<User, "age" | "gender"> = {
  id: 0,
  name: "Bob",
};
