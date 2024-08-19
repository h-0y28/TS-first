# Utility Type

## keyof

keyof key : interface의 key값들을 union 형태로 바꿀 수 있음

```
interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

// keyof key : interface의 key값들을 union 형태로 바꿀 수 있다
type UserKey = keyof User; // "id" | "name" | "age" | "gender"

const uk: UserKey = "id"
// interface의 key 값 이외의 값 => error
const uk2: UserKey = ""

```

---

## Partial\<T>

property를 모두 옵션으로 바꿔줌 => 일부만 사용하는 것이 강함

잘못 된 코드

```
interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

// error
let admin: User = {
  id: 1,
  name: "Bob",
};
```

partial를 사용한 알맞은 코드

```
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
```

이것과 같은 코드임

```
interface User {
  id?: number;
  name?: string;
  age?: number;
  gender?: "m" | "f";
}
```

---

## Required\<T>

모든 property를 필수로 바꿔줌

```
interface User {
  id: number;
  name: string;
  age: number;
}

//error
let admin: Required<User> = {
  id: 1,
  name: "Bob",
};
```

---

## ReadOnly

읽기 전용으로 바꾸는 것

- 처음에 할당만 가능하고 **나중에 수정 불가**

```
interface User {
  id: number;
  name: string;
  age?: number;
}

let admin: Readonly<User> = {
  id: 1,
  name: "Bob"
};

// error
admin.id = 4
```

---

## Record<K,T>

K = key
T = type

기존 코드 - 성적 관리

```
interface Score  {
  "1": "A"|"B"|"C"|"D";
  "2": "A"|"B"|"C"|"D";
  "3": "A"|"B"|"C"|"D";
  "4": "A"|"B"|"C"|"D";
}

const score = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",

}
```

record 사용 코드 - 성적 관리

```
type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D" | "F";
// 여기 !!
const score: Record<Grade, Score> = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
};
```

유저 정보 확인 코드

```
interface User {
  id: number;
  name: string;
  age: number;
}

function isVaild(user: User) {
  // 여기 !!!
  const result: Record<keyof User, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}
```

---

## Pick\<T,K>

**t type 에서 k property만 골라서 사용**

```
interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "F";
}

const admin: Pick<User, "id"|"name"> = {
  id : 0 ,
  name: "Bob"
}
```

---

## Omit\<T, K>

특정 property를 **생략하고 사용 가능**

```
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
```

---

## Exclude\<T1,T2>

**type1에서 type2를 제외**하고 작성

Omit : property를 제거
exclude : type으로 제거

```
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | boolean>; // type t2 = string
```

---

## NonNullable\<Type>

null(+undefined)를 제외한 타입을 생성함

```
type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>;
```
