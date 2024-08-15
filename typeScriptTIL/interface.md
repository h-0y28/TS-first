# interface?

property를 정의하여 객체로 변환 할 때 사용

---

### property

사용된 것

- 기본
  - **name: number;**
- 옵셔널
  - name **?** : nuber;
- read only property : 읽기 전용, 수정 불가
  - **readonly** name : number;

```
interface User {
  name: string;
  age: number;

  // 옵셔널
  gender?: string;

  // read only property
  readonly birthYear: number;
}

let user: User = {
  // name, age, birthYear는 무조건 작성 !!
  name: "jack",
  age: 19,

  // birthYear은 수정 불가
  birthYear: 2000;

  // gender은 옵셔널이기에 작성하지 않아도
  };

// 변경 가능
user.age = 10;

// 옵셔널이여서 원래는 없었는데 추가 함
user.gender = "male";

```

---

#### 문자열 인덱스 설명 추가

ex) 학년
사용 전 (옵셔널 이용)

```
interface User {
  1?: string;
  2?: string;
  3?: string;
  4?: string;
}
```

사용 후

```
interface User {
  // number -> key로 string -> value로 하는 property를 여러개 받을 수 있다는 뜻
  [grade: number]: string;
}

let user: User = {
  1: "A",
  2: "B",
};
```

성적? - string은 범위가 다소 넓음

이때 사용하는 것  
 = **문자열 리터널 타입**

```

type Score = "A" | "B" | "C" | "F";

interface User {
  [grade: number]: Score;
}

let user: User = {
  1: "A",
  2: "B",
};
```

---

## function 정의

**(인자값, 리턴 값) : 반환 값**

예제 1

```
interface Add {
  // 함수 시그니처 정의
  // (인자값, 리턴 값) : 반환 값
  (num1: number, num2: number): number;
}

// 함수 정의
const add: Add = function (x, y) {
  return x + y;
};

// 함수 호출
add(10, 20); // 30
```

예제 2

```
interface IsAdult {
  (age: number): boolean;
}

const a: IsAdult = (age) => {
  return age > 19;
};

a(33) // true
```

---

## class 정의

### implements

예시

- constructor : 클래스에서 객체를 **생성**할 때 호출되는 특수한 메서드

```
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  // 이걸 무조건 작성 해줘야 함
  color;

  // color를 받아 객체를 생성
  constructor(c: string) {
    this.color = c;
  }
  wheels: 4;
  start(): void {
    console.log("go...");
  }
}

const b = new Bmw("green");

// 속성 출력
console.log(b);
// Bmw { color: 'green', wheels: 4 }

// 메서드 출력
console.log(b.start());
// "go..."
```

---

## extends

예제 1

```
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

// extends !!!!
interface Benz extends Car {
  door: number;
  stop(): void;
}

// 모두 갖ㅅ 지정 해주어야 함
const benz: Benz = {
  door: 5,
  stop() {
    console.log("stop");
  },
  color: "black",
  wheels: 4,
  start() {
    console.log("start...");
  },
};
```

**여러개 가능**
예제 2

```
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}
```
