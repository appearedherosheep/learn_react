// 프로그래밍의 패러다임
// functional progrmaming : 함수형 프로그래밍
// object-oriented programming : OOP, 객체 지향 프로그래밍
//  - OOP는 모든걸 object나 classes로 만듬

class human {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;

    }
}

const nico = new human("NICO","LAS");

console.log(nico);

class baby extends human {
    cry() {
        console.log("waaaaa");
    }
    sayName() {
        console.log(`my name is ${this.name}`);
    }
}
// class 전속 가능 
const mybaby = new baby("mini","me");
console.log(mybaby.cry(), mybaby.sayName());