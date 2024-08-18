# Class

class 작성 시 맴버 변수는 property를 선언해주어야 함

```
class Car {
  // class 작성 시 맴버 변수는 property를 선언해주어야 함
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

const bmw = new Car("red");
```

---

## 접근 제한자 (Access modifier)

### public

- **자식 클래스, 클래스 인스턴스 모두 접근 가능**
- **기본 값**
- 클래스 인스턴스 접근 가능

### protect

- **해당 클래스 내부에서만 접근 가능**
- 자식 클래스에선 접근 가능 !!
- 클래스 인스턴스로는 사용 불가 !!

### private

- **자식 클래스에서 접근 가능**
- \# 사용으로 대체 가능
  - 모두 #으로 바꿔야함

```
class Car {
  // #으로 바꿈
  #name: string = "car";
  color: string;
  constructor(color: string) {
    this.color = color;
    // 모두 #으로 바꿔야함
    console.log(this.#name);
  }
  start() {
    console.log("start");
  }
}
```

---

### readonly

변경하고 싶은 속성 값이 있다면 constructor 내부에서 작업을 해야함

원래 코드

```
class Car {
  name: string = "car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
    console.log(this.name);
  }
}

class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(super.name);
  }
}

const z4 = new Bmw("black");
console.log(z4.name);

// 변경
z4.name = "zzzz4";
```

변경 코드

```
class Car {
  readonly name: string = "car";
  color: string;
  // name 추가
  constructor(color: string, name) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(this.name);
  }
}

class Bmw extends Car {
  // name 추가
  constructor(color: string, name) {
    super(color, name);
  }
  showName() {
    console.log(super.name);
  }
}

// name 추가
const z4 = new Bmw("black", "zzzz4");
console.log(z4.name);
// z4.name = "zzzz4";
```

---

### static 정적 매개 변수

- this 사용 x
- 클래스 명 사용 o

```
class Car {
  readonly name: string = "car";
  color: string;

  // 정적 매개 변수
  static wheels = 4;
  constructor(color: string, name) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(this.name);

    // this -> class 명 !!!!
    console.log(Car.wheels);
  }
}
```

---

## 추상 class

**abstract 클래스명**

- 추상화?
  - propert나 메소드의 이름만 선언 구체적인 기능은 상속 받은 쪽에서 구현
- new를 통해서 객체 생성 불가
- 오직 상속을 통해서만 가능

```
// 추상 class
abstract class Car {
  color: string;
  constructor(color: string) {
    this.color;
  }
  start() {
    console.log("start");
  }
}

// new - error
const car = new Car("red")

// 상속 - error X
class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
}

const z4 = new Bmw("black");
```

- 추상 클래스 내부의 추상 메서드는 반드시 상속 받은 쪽에서 구체적인 구현을 해야함
  = 추상 클래스를 받은 수 많은 객체들이 동일하게 메소드를 가지고 있지만 구체적인 기능은 가지각색일 수 있음

```
// 추상 class
abstract class Car {
  color: string;
  constructor(color: string) {
    this.color;
  }
  start() {
    console.log("start");
  }
  // 여기부분이
  abstract doSomething(): void
}

// 여기서 구현이 안 됨 - error
class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
}

const z4 = new Bmw("black");
```

오류 없는 버전

```
// 추상 class
abstract class Car {
  color: string;
  constructor(color: string) {
    this.color;
  }
  start() {
    console.log("start");
  }
  abstract doSomething(): void;
}

class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }

  // this !!!!!!!!!
  doSomething(): void {
    alert(3);
  }
}

const z4 = new Bmw("black");

```
