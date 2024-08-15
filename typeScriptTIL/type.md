## 기본 타입

- number
- boolean
- 타입[]
  - [1,2,3]
  - ex) number[],
  - Array\<타입> 이랑 같음
    - ex) Array\<number>

---

## 튜플

```
let b:[string,number];

b = ['z', 1];

//사용 가능
b[0].toLowerCase();

// 사용 불가
b[1].toLowerCase();
```

---

### void

반환 X

```
function sayHello(): void {
  console.log("hello");
}
```

---

### never

항상 **에러**를 **반환**

```
function showError() {
  throw new Error();
}
```

영원히 **끝나지 않는**

```
function infLoop() {
  while (true) {
    // do something..
  }
}
```

---

## enum

##### 비슷한 타입끼리 묶여진 것

#### 용도

- 특정값만 입력할 수 있게 강조 하고 싶을 때
- 값들이 공통점이 있을 때

#### 사용

- 수동으로 값을 넣어주지 않으면 자동으로 0부터 **1씩 증가하여 값이 넣어짐**

  ```
  enum Os {
    Window, //0
    Ios, //1
    Android, //2
  }
  ```

- **양방향 래핑이** 되어있음

  ```
  enum Os {
    Window = 3,
    Ios =10,
    Android, // 1
  }

  console.log(Os[1]); // "Ios"
  console.log(Os["Ios"]); // 10
  ```

- 숫자가 아닌 문자열도 입력 가능
  ```
  enum Os {
    Window = 'win',
    Ios = 'ios',
    Android ='and',
  }
  ```
  => 이경우에 숫자가 아니기에 **단방향 래핑만 됨**
  아래와 같은 의미임
  ```
  enum Os {
    Window : 'win',
    Ios : 'ios',
    Android : 'and',
  }
  ```

---
