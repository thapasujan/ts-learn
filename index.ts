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



 