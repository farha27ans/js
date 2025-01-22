let score = "33"

//check with null and undefined ke saath 
//let score = "33abc"
//the output will be Nan Not converted into number

console.log(typeof score);
console.log(typeof(score));


//Converted into number from string
let valueInnumber = Number(score)
console.log(typeof valueInnumber);

//"33" => 33
// "33abc" => NaN


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn); //true output

// " "=> false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);