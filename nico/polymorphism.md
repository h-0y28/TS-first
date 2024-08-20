#### poly?

다수

#### morphic | morphos

형태나 구조 혹은 모양

#### polymorphous

여러가지 다른 구조들(모양들)

### Generic ⭐⭐

- **받은 타입을 정확히 모를 때 사용** ⭐
- 타입의 placeholder
- **concrete type(string,number 등)을 사용하는 것 대신** 사용
- 타입을 **유추**하여 알아서 발견 ⭐

> 사용 법

`` 안에 있는 것은 개발자가 지정

```
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
