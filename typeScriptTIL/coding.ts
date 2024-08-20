function hello(): never {
  throw new Error("xxxx");
}

function hello2(name: string | number) {
  if (typeof name === "string") {
    name.replace; // string
  } else if (typeof name === "number") {
    name; // number
  } else {
    name; // never -> 이 코드는 절대 실행 되지 않아야 한다는 것
  }
}
