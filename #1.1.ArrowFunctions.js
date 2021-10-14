// ctrl + alt + N

function sayHello(name) {
    // function sayHello(name = "hyun woong"){ } 
    // 요로케 default값을 줄 수도 있다
    return "Hello " + name;
}

const arrowSayHello = (name) => "Hello " + name;
// 요것이 arrow function, return을 한다는 게 함축되있다
// const arrowSayHello = (name = "hyunwoong") => "hello " + name
// 얘도 default값 줄 수 있다 
const I = sayHello();

console.log(I);
/////////////////////////////////////

const button = document.querySelector("button");

const handleClick = (event) => console.log(event);

button.addEventListener("click", handleClick);

/////////////////////////////////////
// 위 방법보다 이게 더 좋다
button.addEventListener("click",event => console.log(event));

// arrow function rule
// argument가 하나라면 괄호 할 필요 없음
// 두 개 이상이면 괄호 필요
// button.addEventListener("click",(event,something) => console.log(event));
