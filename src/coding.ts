// 접근 제한자 (Access modifier) - public, private, protect
class Car {
  readonly name: string = "car";
  color: string;
  static wheels = 4;
  constructor(color: string, name) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(this.name);
    console.log(Car.wheels);
  }
}

class Bmw extends Car {
  constructor(color: string, name) {
    super(color, name);
  }
  showName() {
    console.log(super.name);
  }
}

const z4 = new Bmw("black", "zzzz4");
console.log(Car.wheels);
// z4.name = "zzzz4";
