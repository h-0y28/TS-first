```
const nico: {
  name: string;
  age?: number;
} = {
  name: "nico",
};

const lynn: {
  name: string;
  age?: number;
} = {
  name: "lynn",
  age: 20,
};
```

**재사용성**을 높임

```
type Player = {
  name: string;
  age?: number;
};

const nico: Player = {
  name: "nico",
};

const lynn: Player = {
  name: "lynn",
  age: 20,
};
```

---

### unknown
