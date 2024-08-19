// Reauied

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

//error
let admin: Required<User> = {
  id: 1,
  name: "Bob",
};
