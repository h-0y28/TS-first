// generic
// 클래스나 함수 인터페이스를 다양하게 사용 가능

// 다양한 타입의 배열을 넘겨줬을 때 너무 길어짐
function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
// 타입 작성
getSize<number>(arr1);

const arr2 = ["a", "b", "c"];
// 타입 작성
getSize<string>(arr2);

const arr3 = [false, true, false];
// <boolean> 생략 가능
getSize(arr3);

const arr4 = [{}, {}, { name: "Time" }];
// 여기도 생략
getSize<object>(arr4);
