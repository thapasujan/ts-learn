"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username = "Sujan";
let name = "Raman";
let age = 22;
let price = 19.99;
let isLoggedIn = true;
let isAdmin = false;
let nothingHere = null;
let notDefinedYet = undefined;
let bigNumber = 1241341241241n;
let uniqueId = Symbol('id');
let anything = 'String';
anything = 42;
anything = true;
let value = 'Hello';
value = 123;
value = false;
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}
function throwError(message) {
    throw new Error(message);
}
function loopForever() {
    while (true) { }
}
let score = 100;
score = "One hundred";
let directions;
directions = 'Left';
// directions = 'Forward' // error: Type '"Forward"' is not assignable to type '"Left" | "Right" | "Up" | "Down"'.
console.log(`My name is ${username} and I am ${age} years old.`);
const person = {
    id: 1,
    name: "Sujan",
    age: 22,
    isWorking: true
};
const numbers = [1, 2, 3, 4, 5];
const strings = ["Hello", "World"];
const strings1 = ["Hello", "TypeScript"];
const persons = [person];
const mixedArray = [1, 2, 3, "Four", "Five"];
const newPerson = {
    id: 2,
    name: "Raman",
    age: 30
};
const myDog = {
    name: "Buddy",
    breed: "Golden Retriever"
};
function greet(name) {
    console.log(`Hello, ${name}!`);
}
function add(a, b) {
    return a + b;
}
function multiply(a, b = 1) {
    return a * b;
}
multiply(5); // returns 5, since b defaults to 1
multiply(5, 2); // returns 10 
// enums 
// enum Direction {
//     Up, 
//     Down,
//     Left,
//     Right
// }
// Direction.Up // returns 0
// Direction.Down // returns 1
// Direction.Left // returns 2
// Direction.Right // returns 3
// function move(direction: number) {
//     if(direction === 0) console.log("Going Up")
// }
// move(0);
// enum Status {
//     Success = 'SUCCESS',
//     Error = 'ERROR',
// }
// Classes
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const user = new User("Sujan", 22);
user.greet();
class PersonDetails {
    name;
    ssn;
    age;
    constructor(name, ssn, age) {
        this.name = name;
        this.ssn = ssn;
        this.age = age;
    }
    getSSN() {
        return this.ssn;
    }
}
class Employee extends PersonDetails {
    role;
    constructor(name, ssn, age, role) {
        super(name, ssn, age);
        this.role = role;
    }
    print() {
        console.log(`${this.name} is a ${this.role}`);
        console.log(`Age: ${this.age} protected, not accessible outside the class or its subclasses`);
    }
}
const employee = new Employee("Raman", "987-65-4321", 30, "Developer");
class Invoice {
    print() {
        console.log("Printing invoice...");
    }
}
const invoice = new Invoice();
invoice.print();
// const p = new PersonDetails("Sujan", "123-45-6789", 22);
// console.log(p.name); // Accessible
// console.log(p.getSSN());
// generics
function indentityNumber(value) {
    return value;
}
function identityString(value) {
    return value;
}
function identity(value) {
    return value;
}
let num = identity(42);
let str = identity("Hello, Generics!");
let bool = identity(true);
function getFirst(items) {
    return items[0];
}
getFirst([1, 2, 3]); // returns 1
getFirst(["a", "b", "c"]); // returns "a"
getFirst([true, false]); // returns true
const numberBox = { value: 123 };
const stringBox = { value: "Hello" };
class DataHolder {
    data;
    constructor(data) {
        this.data = data;
    }
}
const numberHolder = new DataHolder(42);
const stringHolder = new DataHolder("TypeScript");
function logLength(item) {
    console.log(`Length: ${item.length}`);
}
logLength("Hello, World!"); // Length: 13
logLength([1, 2, 3, 4]); // Length: 4
//# sourceMappingURL=index.js.map