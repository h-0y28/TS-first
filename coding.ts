interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

class Player implements User {
  // 무조건 public
  constructor(public firstName: string, public lastName: string) {}
  fullName(): string {
    return `${this.firstName}${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName}`;
  }
}
