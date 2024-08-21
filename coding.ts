interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Health{
  health: number
}

class Player implements User, Health {
  // 무조건 public
  constructor(public firstName: string, public lastName: string, public health: number) {}
  fullName(): string {
    return `${this.firstName}${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName}`;
  }
}
