const days = ["Mon","Tues","Wed"];
const otherDays = ["Thu","Fri","Sat"];

const allDays = days + otherDays;

console.log(allDays);
// 배열이 string 됨

let allDays1 = [days + otherDays];
console.log(allDays1);

let allDays2 = [days,otherDays];
console.log(allDays2);

let allDays3 = [...days,...otherDays];
console.log(allDays3);
// 콘텐츠를 뽑아서 배열 만듬

const ob = {
    first:"hi",
    second:"hello"
}

const ab = {
    third:"bye bye"
}

const two = {ob,ab};
console.log(two)

const two1 = {...ob,...ab};
console.log(two1)

//argument, function 다 잘 작동함

const shi = (something, args) => console.log(...args)
// 누군가 제공한 모든 argument를 console.log 할 수 있다
