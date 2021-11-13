// forEach : 각각의 아이템에 대해서 어떠한 시행을 하는 것 
// map : 새로운 배열을 return 
// filter : 조건에 맞는 새로운 배열을 return
let posts = ["hi","hello","bye"];
posts.forEach(post => console.log(post)) 

// push : 새로운 아이템을 배열에 추가하는 역할 
posts.push("new");
console.log(posts);

// include : 해당하는 string이 배열에 존재하느 지 확인할 수 있는 method
let greetings = ["hi","hello","howdy","suup"];
if(!greetings.includes("hello")) {
    greetings.push("hello");
}

console.log(greetings);

