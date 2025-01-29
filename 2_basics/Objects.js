// singleton construsctor se bnega toh singleton bnega
// Object.create

//object literals

const mySym=Symbol("key1")

const JsUser={
    name : "Zoya",
    "Full name": "Zoya Ansari",
     ["mySym"]: key,
    age: 18,
    location: "Jaipur",
    email: "zoya@google.com",
    isLoggedIn : false,
    lastlogindays :["Monday","Saturday"]
    
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full name"])
console.log(JsUser[mySym])

JsUser.email= "zoya@chatgpt.com"
Object.freeze(JsUser)
JsUser.email= "zoya@microsoft.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());



