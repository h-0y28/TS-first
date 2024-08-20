## Did

error - type을 알 수 없기 때문

```
function add(a, b) {
  return a + b;
}
```

fixed error

```
// function name(a: type, b: type):return type(optional)
function add(a: number, b: number):number {
  return a + b;
}
```

```
const add = (a: number, b: number) => a + b;
```

---

# callSignatures

타입 생성, 함수의 동작 방식 서술 - 함수를 구현하기 전에!

```
type Add = (a: number, b: number) => number;

const add3: Add = (a, b) => a + b;
```
