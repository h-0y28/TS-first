# Function

**function 함수명(매개변수: 매개변수 타입): _반환 값 타입_**
ex)

```
function add(num1: number, num2: number): void {
  console.log(num1 + num2);
}

```

interface처럼 함수의 매개변수도 **옵셔널로** 지정이 가능하다

```
function hello(name?: string) {
  return `Hello, ${name || "world"}`;
}

const result = hello(); // "Hello, world"
const result2 = hello("Sam"); // "Hello, Sam"
```

주의 할 점

```
function hello(name: string, age?: number): string {
  if (age !== undefined) return `Hello, ${name}. You are ${age}`;
  else return `Hello, ${name}`;
}
```

위 코드에서
**옵셔널인 age**가 name **앞에** 오면 **안 됨** !!
잘못된 코드

```
function hello(age?: number, name: string): string {
  if (age !== undefined) return `Hello, ${name}. You are ${age}`;
  else return `Hello, ${name}`;
}

console.log(hello("Sam", 19));
```

선택적 매개변수를 필수 매개변수 앞에 쓰고 싶다면?

```
function hello(age?: number | undefined, name: string): string {
  if (age !== undefined) return `Hello, ${name}. You are ${age}`;
  else return `Hello, ${name}`;
}

console.log(hello(undefined,"Sam"));
```

---

## 나머지 매개변수

전달 받은 매개변수를 배열로 나타낼수 있음
즉, type은 "타입[]" 형태로 써야함
ex) number[]

```
function add(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add(1, 2, 3); //6

```

---

## This

**this의 타입**을 지정할 때 **함수의 첫 번째 매개변수**에 타입을 작성하여 알려준다

```
interface User {
  name: string;
}

const Sam: User = { name: "Sam" };

// this의 타입을 지정할 때 함수의 첫 번째 매개변수에 타입을 작성하여 알려준다
function showName(this: User) {
  console.log(this.name);
}

const a = showName.bind(Sam);
a();
```

**함수**를 **호출** 할 때 **전달한 매개변수**는 **this 다음 부터 적용**됨

```
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
```

---

## 오버로드

- 전달 받은 **매개변수의 갯수나 타입**에 따라 **다른 동작**을 하게 하는 것
- 매개변수의 타입이나 개수에 따라 **다른 방식**으로 동작 해야 될 때
- 함수 위에 똑같은 모습으로 작성

잘못된 방식

```
interface User {
  name: string;
  age: number;
}

function join(name: string, age: number | string): User | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요.";
  }
}

// error
const sam: User = join("Sam", 30);
const jane: User = join("Jane", "30");
```

오버로드 사용

```
interface User {
  name: string;
  age: number;
}

// 함수 위에 똑같은 모습으로 작성
function join(name: string, age: string): string;
function join(name: string, age: number): User;

function join(name: string, age: number | string): User | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요.";
  }
}

const sam: User = join("Sam", 30);
const jane: string = join("Jane", "30");
```
