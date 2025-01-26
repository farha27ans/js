//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
// console.log(myDate.toLocalString());
console.log(typeof myDate); //object

// let myCreatedDate = new Date(2025,0,26)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-26-2025")
console.log(myCreatedDate.toString());

let myTimesStamp = Date.now()
// console.log(myTimesStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleDateString('default',{
    weekday:"long",
    

})