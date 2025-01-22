//Primitive

// 7 types: String, Number, Boolean, null, undefined ,Symbol,BigInt  (they all are call by value)


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp= null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id== anotherid);

const bigNumber = 3435566797557436n


//Reference (non primitive)

//Array,Objects,Functions

const heros =["shaktiman", "naagraj","iron man"];
let myObj={
     name:"Zoya",
     age: 21,
}

const myFunction =function(){
    console.log("Hello World");
}

https://262.ecma-international.org/5.1/#sec-11.4.3