let b: [string, number];

b = ["z", 1];

b[0].toLowerCase();
// b[1].toLowerCase();

// void never

function sayHello(): void {
  console.log("hello");
}

function showError() {
  throw new Error();
}

function infLoop() {
  while (true) {
    // do something..
  }
}

//enum

enum Os {
  Window = "win",
  Ios = "ios",
  Android = "and",
}

console.log(Os[1]); // "Ios"
