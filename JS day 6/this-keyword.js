// this Basics + call/apply/bind
// ---------------------
function introduce(city, country) {
    console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
}

let user1 = { name: "Bob" };
introduce.call(user1, "Kathmandu", "Nepal");

let user2 = { name: "Xin" };
introduce.apply(user2, ["Beijing", "China"]);

let user3 = { name: "Garry" };
let userInfo = introduce.bind(user3, "Edgebaston", "England");
userInfo();

// ---------------------
// Fun Exercise using call/apply/bind
// ---------------------
function sayHello(greeting) {
    console.log(`${greeting}, I am ${this.name}`);
}

let userA = { name: "Alice" };
sayHello.call(userA, "Namaste");

let userB = { name: "Bob" };
sayHello.apply(userB, ["Hello"]);

let userC = { name: "Carlos" };
let greetingUserC = sayHello.bind(userC, "Hola");
greetingUserC();