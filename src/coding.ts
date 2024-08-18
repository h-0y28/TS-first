// literal types
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

//Union Types

// name이 식별 가능한 union type이라고 함
interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  // 둘다 있는 속상 깂 이기 때문에 오류 x
  console.log(gift.color);

  // 둘다 있는 속성값이 아니기 때문에 오류 o
  // gift.start()

  // 오류 x
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}
