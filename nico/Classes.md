# Class

**js : private나 public 같은 보호는 제공하지 않음
ts : 제공함**

```
class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public niconame: string
  ) {}
}

const nico = new Player("nico", "las", "니꼬");

// error - firstName = private
nico.firstName()
```

---

## 추상 클래스 - abstract

**오직 다른 클래스가 상속받을 수 있는** 클래스
**직접 새로운 인스턴스**를 만들 수는 **없음**

**constructor 메서드?**

- 클래스에서 객체가 생성될 때 호출되는 메서드
- 객체의 초기 상태를 설정, 초기화하기 위해 사용됨
- **클래스 내**에서 정의

**private / public / protected**

- js에선 안 보임
- ts가 보호를 위해 사용한 것임

  **private**
  클래스를 상속하였더라도 접근 **불가** = 자식 클래스에서도 접근 **불가**

  **protected**
  외부로부턴 보호, but 자식 클래스에선 사용

```
// 추상 클래스
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public niconame: string
  ) {}
}

// 상속
class Player extends User {
  getNickName() {
    // private라 상속을 받아도 접근 불가
    console.log(this.nickName);
  }
}

// error - 직접 인스턴스 만듦
const nico = new User("nico", "las", "니꼬");
```

---

### 추상 메소드

추상 클래스를 상속 받는 모든 것들이 구현을 해야하는 메소드
