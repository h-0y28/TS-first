## Array

- 지정한 타입 이외의 값을 넣으면 오류
- (타입) <- 2개 이상일 때 ()로 묶음

```
let testNumber: (number | string)[];

testNumber = [1, 2, 4, "we"];
```

---

## Object

- 값을 넣을 땐 **=**
- ⭐ 타입만 지정할 땐 = 아니고 **:**

```
let userObject: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObject= {
  username: "jane",
  age: 18,
  isAdmin: false,
};
```

- 조건도 넣을 수 있음 **?** 사용

```
userObject= {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string,
};

userObject= {
  username: "jane",
  age: 18,
  isAdmin: false,
  // phone 은 생략 가능 !!!
  phone: "1234567",
};
```

---

## any

- 값이나 유형을 제공하지 않으면 모든 유형 가능
- 유형에 대한 확신이 없을 때만 이것을 사용해야함 !!

```
let testAny;

testAny = 12;
testAny = "hello";
testAny = true;
```

- 배열에서도 적용 가능

```
let testAnyArray: any[];
testAnyArray = [12, "hello", true];
```

---

