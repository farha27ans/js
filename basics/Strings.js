const name ="Zoya"
const repoCount = 50

console.log(name + repoCount +"Value");

console.log('Hello my name us ${name} and my repo count is $ {repoCount}');

const gameName = new String("hitesh-hc-com")


// Methods ya functions
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

//Slicing

const newString = gameName.substring(0,4)
console.log(newString);


//-slicing means JavaScript's slice() method doesn't directly support negative indexing (like Python does), where you can count from the end of an array using negative numbers. However, you can mimic this behavior by converting negative indices into positive ones.
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = " Farha "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'))

console.log(gameName,split('-'));


