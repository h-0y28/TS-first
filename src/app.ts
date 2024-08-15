// //array

// // (타입) <- 2개 이상일 때 ()로 묶음
// let testNumber: (number | string)[];

// testNumber = [1, 2, 4, "we"];

// //object

// let user = {
//   username: "john",
//   age: 22,
//   isAdmin: false,
// };

// // 가능
// user.username = "jane";
// user.age = 18;

// // 불가능
// // user.age = "eighteen"

// // 값을 넣을 땐 =
// let userObject = {
//   username: "jane",
//   age: 18,
//   isAdmin: false,
// };

// // ⭐ 타입만 지정할 땐 = 아니고 :
// let userObject2: {
//   username: string;
//   age: number;
//   isAdmin: boolean;
// };

// userObject2 = {
//   username: "jane",
//   age: 18,
//   isAdmin: false,
// };

// // any

// // 값이나 유형을 제공하지 않으면 모든 유형 가능
// // 유형에 대한 확신이 없을 때만 이것을 사용해야함 !!
// let testAny;

// testAny = 12;
// testAny = "hello";
// testAny = true;
// // 배열에서도 적용 가능
// let testAnyArray: any[];
// testAnyArray = [12, "hello", true];

// // functions

// //tyoe aliases

// type UserType = {
//   username: string;
//   age: number;
//   phone?: string;
// };

// let betterNunc = (user: UserType) => {
//   console.log(user.username);
// };

// // interface

// // 인터페이스 명 옆에 = or : 없음
// interface IUser {
//   username: string;
//   email: string;
//   age: number;
// }

// interface IEmployee extends IUser {
//   employeeId: number;
// }

// const emp: IEmployee = {
//   username: "tom",
//   email: "tom@gmail.com",
//   age: 43,
//   employeeId: 1,
// };

// const client: IUser = {
//   username: "tom",
//   email: "tom@gmail.com",
//   age: 43,
//   // employeeId: 1,
// };

// // generices

// interface Ipost {
//   id : number;
//   title: string;
// }
