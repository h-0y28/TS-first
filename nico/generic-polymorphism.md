## 앞서서

#### poly?

다수

#### morphic | morphos

형태나 구조 혹은 모양

#### polymorphous

여러가지 다른 구조들(모양들)

#### 제네릭 타입 vs 리터럴 표기법

> 제네릭 타입

```
type Friends = Array<string>
```

- 배열 외의 제네릭 타입을 사용하는 경우 일관성을 유지하기 위해 선호될 수 있음
- 제네릭 타입을 자주 사용하는 코드베이스에서는 제네릭 표기법을 사용해 **일관성**을 유지할 수 있음

> 리터럴 표기법

```
type Friends = string[]
```

- 더 간결하고 읽기 쉽기 때문에, 많은 개발자들이 이 방식을 선호
- 간단한 배열 타입을 정의할 때 더 직관적일 수 있음

둘다 동일한 의미 (= 문자열의 배열)
**실질적인 차이는 없음**

---

## Generic ⭐⭐⭐

- **받은 타입을 정확히 모를 때 사용** ⭐
- 타입을 **유추**하여 알아서 발견 ⭐
- 타입의 placeholder
- placeholder를 **발견**하는 타입으로 **대체**
- **concrete type(string,number 등)을 사용하는 것 대신** 사용

> 사용 법

`` 안에 있는 것은 개발자가 지정

````

type `typeName` = {
<`T`>(`type`: `T`[]): `returnType`;
};

```

**적용**

> 기존코드

```

type SuperPrint = {
(arr: number[]): void;
(arr: boolean[]): void;
(arr: string[]): void;
(arr: (number | boolean)[]): void;
};

const superPrint: SuperPrint = (arr) => {
arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["1", "2", "3"]);
superPrint([1, false, true, 4]);

```

> Generic 사용

```

type SuperPrint = {
<TypePlaceholder>(arr: TypePlaceholder[]): void;
};

const superPrint: SuperPrint = (arr) => {
arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["1", "2", "3"]);
superPrint([1, false, true, 4]);

```

---

#### any를 사용하지 않고 Generic을 사용하는 이유?

모두가 any라는 뜻 => 에러 발생 확율 있음

> 기존 코드

```

type SuperPrint = <T>(a: T[]) => T
const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["1", "2", "3"]);
const d = superPrint([1, false, true, 4, "hello"]);

```

> any를 사용한 코드 - 보호를 받지 못 함

```

type SuperPrint = (a: any[]) => any;

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]); // a: any
const b = superPrint([true, false, true]); // b: any
const c = superPrint(["1", "2", "3"]); // c: any
const d = superPrint([1, false, true, 4, "hello"]); // d: any

// generic을 사용해도 허용하지 않음 / error를 띄움으로써 런타임 과정중에ㅔ 에러가 나지 않도록 막아줌
// 보로를 받지 못 함 -> 배열의 첫번째 요소를 리턴해줌 = number
d.toUpperCase();

```

---

### 2개 이상의 Generic

```

type SuperPrint = <T, V>(a: T[], b: V) => T;

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], "x");
const b = superPrint([true, false, true], 1);
const c = superPrint(["1", "2", "3"], false);
const d = superPrint([1, false, true, 4, "hello"], []);

```

---

```

type Player<E> = {
name: string;
extraInfo: E;
};

const nico: Player<{ favFood: string }> = {
name: "nico",
extraInfo: {
favFood: "kimchi",
},
};

```

위 아래 같은 의미를 가짐

```

type Player<E> = {
name: string;
extraInfo: E;
};

type NicoPlayer = Player<{ favFood: string }>;

const nico: NicoPlayer = {
name: "nico",
extraInfo: {
favFood: "kimchi",
},
};

```

---

### Generic의 재사용

```

type Player<E> = {
name: string;
extraInfo: E;
};

type NicoExtra = {
favFood: string;
};

type NicoPlayer = Player<NicoExtra>;

const nico: NicoPlayer = {
name: "nico",
extraInfo: {
favFood: "kimchi",
},
};

const lynn: Player<null> = {
name: "lynn",
extraInfo: null,
};

```

```
````
