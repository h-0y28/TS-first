// implements

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

// interface Benz extends Car {
//   door: number;
//   stop(): void;
// }

// const benz: Benz = {
//   door: 5,
//   stop() {
//     console.log("stop");
//   },
//   color: "black",
//   wheels: 4,
//   start() {
//     console.log("start...");
//   },
// };

class Bmw implements Car {
  color;
  constructor(c: string) {
    this.color = c;
  }
  wheels: 4;
  start(): void {
    console.log("go...");
  }
}

const b = new Bmw("green");

console.log(b);
console.log(b.start());
