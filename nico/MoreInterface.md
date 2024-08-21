## TypeScript의 타입 정의 및 클래스

### **`interface`**

- *`interface`*는 객체, 클래스, 함수의 구조를 정의하는 데 사용됩니다. 주로 객체의 형태를 명확히 하고, 클래스와의 상호작용에 유리합니다.

### 특징

- **객체 구조 정의**: 객체의 구조를 명시합니다.
- **확장 (Inheritance)**: 다른 인터페이스를 확장할 수 있습니다.
- **클래스와의 상호작용**: 클래스가 인터페이스를 구현할 수 있습니다.
- **선언 병합 (Declaration Merging)**: 같은 이름으로 여러 번 선언하면 병합됩니다.

### 예제

1. **기본 객체 정의**
    
    ```tsx
    interface Person {
        name: string;
        age: number;
    }
    
    let user: Person = {
        name: "Alice",
        age: 30
    };
    ```
    
2. **인터페이스 확장**
    
    ```tsx
    interface Address {
        street: string;
        city: string;
    }
    
    interface Contact extends Address {
        phone: string;
    }
    
    let contact: Contact = {
        street: "123 Main St",
        city: "Metropolis",
        phone: "555-1234"
    };
    ```
    
3. **클래스 구현**
    
    ```tsx
    interface Person {
        name: string;
        age: number;
    }
    
    class Employee implements Person {
        name: string;
        age: number;
        employeeId: number;
    
        constructor(name: string, age: number, employeeId: number) {
            this.name = name;
            this.age = age;
            this.employeeId = employeeId;
        }
    }
    ```
    
4. **선언 병합**
    
    ```tsx
    interface Person {
        name: string;
    }
    
    interface Person {
        age: number;
    }
    
    // Person은 { name: string; age: number; }과 동일함
    ```
---

### **`type`**

- *`type`*은 다양한 타입을 정의하는 데 사용됩니다. 복잡한 타입 조합이나 유니온, 교차 타입을 정의할 수 있습니다.

### 특징

- **복합 타입 정의**: 유니온 타입, 교차 타입 등을 정의할 수 있습니다.
- **튜플 및 배열 타입**: 튜플과 배열의 타입을 정의할 수 있습니다.
- **타입 추론 및 조건부 타입**: 타입 추론 및 조건부 타입을 사용할 수 있습니다.

### 예제

1. **기본 타입 별칭**
    
    ```tsx
    type ID = string | number;
    let userId: ID = "abc123";
    ```
    
2. **교차 타입**
    
    ```tsx
    type Person = {
        name: string;
        age: number;
    };
    
    type Employee = Person & { employeeId: number };
    ```
    
3. **튜플**
    
    ```tsx
    type Coordinates = [number, number];
    let point: Coordinates = [10, 20];
    ```
    
4. **조건부 타입**
    
    ```tsx
    type IsString<T> = T extends string ? "Yes" : "No";
    type Result = IsString<string>;  // "Yes"
    ```
---

### **`interface`와 `type`의 차이점**

`interface`와 `type`은 TypeScript에서 타입을 정의하는 두 가지 주요 방법이지만, 그 사용 방법과 기능에서 몇 가지 차이점이 있습니다.

### 1.1 **객체 구조 정의**

- **`interface`**: 객체의 구조를 정의하는 데 주로 사용됩니다.
- **`type`**: 객체의 구조를 정의할 수 있지만, 이 외에도 다양한 타입 조합을 만들 수 있습니다.

```tsx
interface Person {
    name: string;
    age: number;
}

type Person = {
    name: string;
    age: number;
};
```

### **확장 및 조합**

- **`interface`**: 다른 인터페이스를 `extends` 키워드를 사용해 확장할 수 있습니다.
- **`type`**: 교차 타입(`&`)을 사용해 여러 타입을 결합할 수 있습니다.

```tsx
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

type Animal = {
    name: string;
};

type Dog = Animal & { breed: string };
```

### **선언 병합**

- **`interface`**: 동일한 이름으로 여러 번 선언할 수 있으며, 선언된 인터페이스들이 병합됩니다.
- **`type`**: 동일한 이름으로 여러 번 선언할 수 없으며, 타입 이름이 중복되면 오류가 발생합니다.

```tsx
interface Person {
    name: string;
}

interface Person {
    age: number;
}

// Resulting interface: { name: string; age: number; }

type Person = {
    name: string;
};

// Duplicate type declaration would cause an error
```

### **사용 가능 영역**

- **`interface`**: 주로 객체의 형태를 명확히 정의하는 데 사용됩니다.
- **`type`**: 유니온 타입, 튜플, 복잡한 타입 조합, 조건부 타입 등 다양한 타입을 정의할 수 있습니다.

```tsx
type ID = string | number;
type Coordinates = [number, number];
type Callback = () => void;
```

---

### **`abstract class`**

- *`abstract class`*는 추상 클래스입니다. 추상 클래스는 직접 인스턴스화할 수 없으며, 주로 공통적인 기능을 하위 클래스에서 구현하도록 강제할 때 사용됩니다.

### 특징

- **추상 메서드**: 하위 클래스에서 구현해야 하는 메서드를 정의할 수 있습니다.
- **공통 기능**: 여러 하위 클래스에서 공유하는 기능을 구현할 수 있습니다.
- **인스턴스화 불가**: 추상 클래스는 직접 인스턴스화할 수 없습니다.

### 예제

1. **기본 추상 클래스**
    
    ```tsx
    abstract class Animal {
        abstract makeSound(): void;  // 추상 메서드
    
        move(): void {
            console.log("Moving along...");
        }
    }
    
    class Dog extends Animal {
        makeSound(): void {
            console.log("Bark!");
        }
    }
    
    let myDog = new Dog();
    myDog.makeSound();  // "Bark!"
    myDog.move();       // "Moving along..."
    ```
    
2. **추상 클래스와 다형성**
    
    ```tsx
    abstract class Shape {
        abstract area(): number;  // 추상 메서드
    }
    
    class Circle extends Shape {
        radius: number;
    
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
    
        area(): number {
            return Math.PI * this.radius * this.radius;
        }
    }
    
    let myCircle = new Circle(5);
    console.log(myCircle.area());  // 78.54
    ```   
---

### **`interface`와 추상 클래스 (`abstract class`)의 연관성**

`interface`와 `abstract class`는 모두 클래스의 구조를 정의하고, 특정 메서드나 속성을 구현하도록 강제하는 기능을 제공합니다. 하지만 사용 목적과 기능에서 차이점이 있습니다.

### **공통점**

- **구조 정의**: 둘 다 클래스를 설계할 때 구조를 정의하는 데 사용됩니다.
- **구현 강제**: 특정 메서드나 속성의 구현을 강제할 수 있습니다.

### **차이점**

- **인스턴스화**:
    - **`interface`**: 객체의 구조만 정의하며, 인스턴스를 생성할 수 없습니다.
    - **`abstract class`**: 일부 구현을 포함할 수 있으며, 직접 인스턴스화할 수 없습니다. 그러나 하위 클래스에서 상속받아 사용할 수 있습니다.
- **기능 제공**:
    - **`interface`**: 메서드의 시그니처만 정의하고, 구현은 제공하지 않습니다.
    - **`abstract class`**: 추상 메서드와 함께 공통 기능(구현)을 제공할 수 있습니다.
- **다중 상속**:
    - **`interface`**: 클래스가 여러 인터페이스를 구현할 수 있습니다.
    - **`abstract class`**: 단일 상속만 가능하므로, 한 클래스만 상속받을 수 있습니다.

```tsx
// interface
interface Drivable {
    drive(): void;
}

interface Flyable {
    fly(): void;
}

class Car implements Drivable {
    drive() {
        console.log("Driving...");
    }
}

class Plane implements Drivable, Flyable {
    drive() {
        console.log("Driving on runway...");
    }

    fly() {
        console.log("Flying...");
    }
}

// abstract class
abstract class Vehicle {
    abstract startEngine(): void;

    stopEngine() {
        console.log("Engine stopped");
    }
}

class Car extends Vehicle {
    startEngine() {
        console.log("Car engine started");
    }
}
```
---
### 요약

- **`interface`**:
    - 객체의 구조를 정의하고, 클래스를 통해 구현 가능.
    - 인터페이스 간의 상속 및 선언 병합 가능.
    - 주로 객체와 클래스의 형태를 정의할 때 사용.
- **`type`**:
    - 다양한 타입 조합 (유니온, 교차 타입 등)을 정의.
    - 튜플, 배열 타입과 복잡한 타입 정의에 유리.
    - 타입 별칭을 통해 타입을 간단하게 정의할 수 있음.
- **`abstract class`**:
    - 공통 기능과 추상 메서드를 정의.
    - 하위 클래스에서 추상 메서드를 구현하도록 강제.
    - 직접 인스턴스화할 수 없음.

이 내용을 참고하여 각 개념을 상황에 맞게 활용하면 코드의 재사용성과 가독성을 높일 수 있습니다.




- **`interface`와 `type`의 차이점**:
    - `interface`는 객체의 구조를 정의하고, 선언 병합을 지원하며, 클래스와의 상호작용에 적합합니다.
    - `type`은 유니온 타입, 튜플, 교차 타입 등 다양한 타입을 정의할 수 있으며, 보다 유연한 타입 조합이 가능합니다.
- **`interface`와 `abstract class`의 연관성**:
    - `interface`는 구조만 정의하고 구현은 강제하지 않으며, 클래스가 여러 인터페이스를 구현할 수 있습니다.
    - `abstract class`는 일부 구현을 포함할 수 있고, 추상 메서드를 통해 하위 클래스에 특정 기능을 구현하도록 강제할 수 있습니다. 다만 단일 상속만 가능합니다.

상황에 따라 `interface`와 `abstract class`를 적절히 선택하여 사용하면 코드의 재사용성과 유지보수성을 높일 수 있습니다.