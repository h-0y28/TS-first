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
  doSomething(): void {
    alert(3);
  }
}

const z4 = new Bmw("black");
