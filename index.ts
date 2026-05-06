let username: string = "Sujan"
let name = "Raman"

let age: number = 22
let price = 19.99

let isLoggedIn: boolean = true
let isAdmin = false

let nothingHere: null = null
let notDefinedYet: undefined = undefined

let bigNumber: bigint = 1241341241241n

let uniqueId: symbol = Symbol('id')

let anything: any = 'String'
anything = 42
anything = true

let value: unknown = 'Hello'
value = 123
value = false

if(typeof value === 'string') {
    console.log(value.toUpperCase())
}

function throwError(message: string): never{
    throw new Error(message);
}

function loopForever(): never {
    while(true) {}
}

let score: number | string = 100
score = "One hundred"

let directions: 'Left' | 'Right' | 'Up' | 'Down';
directions = 'Left'
// directions = 'Forward' // error: Type '"Forward"' is not assignable to type '"Left" | "Right" | "Up" | "Down"'.


console.log(`My name is ${username} and I am ${age} years old.`)


// objects and arrays
type Person = {
    readonly id: number,
    name: string,
    age: number,
    isWorking?: boolean
}
const person: Person = {
    id: 1,
    name: "Sujan",
    age: 22,
    isWorking: true
}


const numbers: number[] = [1, 2, 3, 4, 5]

const strings: Array<string> = ["Hello", "World"]

const strings1 : string[] = ["Hello", "TypeScript"]

const persons: Person[] = [person];

const mixedArray: (string | number)[] = [1, 2, 3, "Four", "Five"]

// for data from DOM
// const input = document.getElementById('username') as HTMLInputElement;

interface IPerson {
    readonly id: number,
    readonly name: string,
    age : number,
    isWorking?: boolean
}

const newPerson: IPerson = {
    id: 2,
    name: "Raman",
    age: 30
}


type Animal = { name: string}
type Dog = Animal & {breed: string}

interface IAnimal {
     name: string;
}

interface IDog extends IAnimal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever"
}

function greet(name: string): void{
    console.log(`Hello, ${name}!`);
}


function add (a: number, b: number): number {
    return a + b;
}

function multiply (a: number, b: number = 1): number {
    return a * b;
}

multiply(5) // returns 5, since b defaults to 1
multiply(5, 2) // returns 10 

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
    name : string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const user = new User("Sujan", 22);
user.greet();

class PersonDetails {
    public name: string;
    private ssn: string;
    protected age: number;

    constructor(name: string, ssn: string, age: number){
        this.name = name;
        this.ssn = ssn;
        this.age = age;
    }
    getSSN() : string {
        return this.ssn;
    }

}


class Employee extends PersonDetails {
    role: string;
    constructor(name: string, ssn: string, age: number, role: string){
        super(name , ssn, age);
        this.role = role;
    }
    print(): void {
        console.log(`${this.name} is a ${this.role}`);
        console.log(`Age: ${this.age} protected, not accessible outside the class or its subclasses`);
    }
}

const employee = new Employee("Raman", "987-65-4321", 30, "Developer");

interface Printable {
    print() : void;
}

class Invoice implements Printable {
    print(){
        console.log("Printing invoice...");
    }
}

const invoice = new Invoice();
invoice.print();
// const p = new PersonDetails("Sujan", "123-45-6789", 22);
// console.log(p.name); // Accessible
// console.log(p.getSSN());


// generics
function indentityNumber(value: number): number {
    return value;
}


function identityString(value: string): string{
    return value;
}

function identity<T>(value: T): T {
    return value;
}

let num = identity<number>(42);
let str = identity<string>("Hello, Generics!");
let bool = identity<boolean>(true);

function getFirst<T>(items: T[]): (T | undefined) {
    return items[0];
}

getFirst<number>([1, 2, 3]) // returns 1
getFirst<string>(["a", "b", "c"]) // returns "a"
getFirst<boolean>([true, false]) // returns true

interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 123 };
const stringBox: Box<string> = { value: "Hello" };

class DataHolder<T> {
    constructor(public data: T) {}
}

const numberHolder = new DataHolder<number>(42);
const stringHolder = new DataHolder<string>("TypeScript");

function logLength<T extends { length: number }> (item: T): void {
    console.log(`Length: ${item.length}`);
}

logLength("Hello, World!"); // Length: 13
logLength([1, 2, 3, 4]); // Length: 4