// ReadOnly

interface User {
  id: number;
  name: string;
  age?: number;
}

let admin: Readonly<User> = {
  id: 1,
  name: "Bob",
};

//error
admin.id = 4;
