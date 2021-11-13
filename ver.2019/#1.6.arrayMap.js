const days = ["Mon","Tue","Wed","Thu","Fri"];

const smilingDays = days.map(potato => console.log(potato));
// days에 있는 모든 요일에 function을 실행
// 변수명이 potato, potato가 처음엔 mon이였다가 다음엔 tue 이런식
// return한 값으로 이루어진 배열을 return 

console.log(smilingDays);

const smilingDays1 = days.map(potato => `😊 ${potato}`);
console.log(smilingDays1); 

const addSmile = (day) => `😊 ${day}`;
const smilingDays2 = days.map(addSmile);
console.log(smilingDays2);

const smilingDays3 = days.map((potato,index) => `#${index+1} 😊 ${potato}`);
// 현재 아이템이 있는 위치에 대한 숫자를 전달
console.log(smilingDays3); 

const addSmile1 = (day,index) => `#${index}😊 ${day}`;
const smilingDays4 = days.map(addSmile1);
console.log(smilingDays4);