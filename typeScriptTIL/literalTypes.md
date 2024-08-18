#### literal types

```
const userName1 = "Bob";
let userName2: string | number = "Tom";
userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: "Bob",
  job: "developer",
};
```

---

## Union Types, "|"

-> **식별 가능한 타입**

- **interface "|" interface2**
  - 두 interface안에 속성이 있어야 사용 가능함
  - 아래 코드에서는 if문 사용 함
  - 검수 항목이 많아지면 switch case문이 훨씬 좋음

```
// name : union type
interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name : "mobile";
  color : string;
  call() : void;
}

function getGift(gift: Car| Mobile){
  // 둘다 있는 속상 깂 이기 때문에 오류 x ⭐
  console.log(gift.color);

  // 둘다 있는 속성값이 아니기 때문에 오류 o ⭐
  gift.start()

  // 오류 x ⭐
  if(gift.name === "car"){
    gift.start();
  } else{
    gift.call();
  }
}
```

---

## Intersection Types => "&"

- 여러개의 타입을 하나로 함쳐 줌
- 필요한 모든 기능을 가진 하나의 타입이 만들어짐

```
interface Car {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: "타요",
  start() {},
  color: "blue",
  price: 1000,
};
```
