const numbers = [23,41,234,123,4,123,41,23,4,12,341,23412,43123,41234,43,754,7456,878,35,12]

const biggerThan100 = numbers.filter(number => number > 100);
// 배열의 모든 요소들에 function을 실행하고 true를 return하는 요소로만 이루어진 배열을 만듬
// number(해당 argument)는 각 아이템의 값을 취하게 됨
console.log(biggerThan100);

const testCondition = (number) => number < 100;
const smallerThan100 = numbers.filter(testCondition);
console.log(smallerThan100);

let posts = ["hi","hello","bye"];
posts = posts.filter(post => post !== "bye");
console.log(posts);