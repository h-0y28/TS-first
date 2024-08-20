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
