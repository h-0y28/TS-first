# Generic

클래스나 함수 인터페이스를 **다양하게** 사용 가능

다양한 타입? 코드 길이가 너무 길어짐

```
// 여기 !!!
function getSize(arr: number[] | string[] | boolean[] | object[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize(arr1);

const arr2 = ["a", "b", "c"];
getSize(arr2);

const arr3 = [false, true, false];
getSize(arr3);

const arr4 = [{}, {}, { name: "Time" }];
getSize(arr4);
```

이때 사용하는 것 = generic
**\<T>** : 사용하는 쪽에서 이 타입을 결정

```
// <T> -> generic
function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
// 타입 작성
getSize<number>(arr1);

const arr2 = ["a", "b", "c"];
// 타입 작성
getSize<string>(arr2);

const arr3 = [false, true, false];
// <boolean> 생략 가능
getSize(arr3);

const arr4 = [{}, {}, { name: "Time" }];
// 여기도 생략
getSize<object>(arr4);
```

---

### interface에서 사용

generic 사용 전

```
interface Mobile {
  name: string;
  price: number;
  option: any;
}
```

사용 후

```
interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

// Mobile<color: string; coupon: boolean}>
const m1: Mobile<object> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
};

```

**하나의 인터페이스만** 선언하고, **각기 다른 객체**들을 만들 수 있음

---

error X = 잘못 된 방식

```
interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user: User = { name: "a", age: 10 };
const car: Car = { name: "bmw", color: "red" };
const book: Book = { price: 3000 };

function showName(data): string {
  return data.name;
}

showName(user);
showName(car);
showName(book);

```

올바른 방식

- <T extends { name: string }>
  - T타입은 name이 string인 객체를 확장한 형태이다 !
  - 다양한 형태의 객체가 올 수 있음
  - but, name은 항상 string 이어야 함
    => name이 없거나 name이 다른 타입을 가진다면 error

```
interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user: User = { name: "a", age: 10 };
const car: Car = { name: "bmw", color: "red" };
const book: Book = { price: 3000 };

// <T>만 사용? 모든 매개변수에 name이 있다고 장담하지 못 해 에러 발생
// extends를 사용해야함 !!
// T타입은 name이 string인 객체를 확장한 형태이다 !!!
function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(user);
showName(car);

// error
showName(book);
```
