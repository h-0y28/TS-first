# Overloading

함수가 **서로 다른 여러개**의 call signatures를 가지고 있을 때 발생

#### 참고 코드

> 기존의 화살표 함수

```
type Add = (a: number, b: number) => number;
```

> 오버로딩 형식으로 바꾼 함수

```
type Add = {
  (a: number, b: number): number;
};
```

### 활용

```
type Config = {
  path: string;
  state: object;
};

// 두 가지 다른 형태의 인수 처리하는 함수
type Push = {
  (path: string): void;
  (config: Config): void;
};

// 문자열 또는 Config 객체를 받아, 적절한 처리 수행
const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};
```

두 가지 다른 형태의 인수를 처리할 수 있는 push 함수를 정의
이 함수는 문자열 또는 Config 객체를 받아, 적절한 처리를 수행
오버로딩 기능 -> 두 가지 호출 방식에 대응할 수 있도록 구현됨

> 많이 사용되진 않지만 다른 예시

```
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

// 실제 함수 구현부에서 optional인지 정의함
const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
```
