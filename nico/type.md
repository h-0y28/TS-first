# type

#### 재사용성 높이기

기존 코드

```
const nico: {
  name: string;
  age?: number;
} = {
  name: "nico",
};

const lynn: {
  name: string;
  age?: number;
} = {
  name: "lynn",
  age: 20,
};
```

바뀐 코드

```
type Player = {
  name: string;
  age?: number;
};

const nico: Player = {
  name: "nico",
};

const lynn: Player = {
  name: "lynn",
  age: 20,
};
```

---

## unknown

- 용도 : 변수의 타입을 미리 알지 못 할 때
- 조건 : 값을 바꿀때 타입을 확인 해야함

잘못된 코드

```
let a: unknown;

let b = a + 1;
```

올바른 코드

```
let a: unknown;

// 타입을 확인 해야함
if (typeof a === "number") {
  let b = a + 1;
}
```

---

## never

함수가 절대 return하지 않을 때 발생

```
function hello():never {
  throw new Error("xxxx")
}
```

타입이 두가지 일 수도 있는 상황에서 발생

```
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
```

---

이전까지는 string과 같은 concrete 타입을 써야 했음
but, 아래와 같이 xonxrete타입의 **특정 값**을 쓸 수 있음

```
// 여기 !!!!
type Team = "red" | "blue" | "yellow";

type Player = {
  nickname: string;
  team: Team;
};
```

좀 더 많은 내용이 담긴 코드

```
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type Player = {
  nickname: string;
  team: Team;
  health: Health;
};

const nico: Player = {
  nickname: "nico",

  // 정해진 것 이외의 값을 넣으면 오류
  team: "blue",
  health: 5,
};
```
