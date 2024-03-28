//Singleton ==> when we make actully like literals, then it will not be singleton. no more explination given.
// Object.create 

// Object literals

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")


const jsUser = {
    name: "manasi",
    "full name": "Manasi Takalkar",
    mySym : "MyKey1",
    [mySym2]: "Mykey2",
    age: 22,
    location: "Pune",
    email: "manasi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(jsUser["full name"]);

// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);

// console.log(jsUser[mySym2]);
// console.log(typeof jsUser[mySym2]);  //have to learn more about symbols


jsUser.email = "manasi@avni.in"
// Object.freeze(jsUser);
jsUser.age = 21;

// console.table([jsUser.age, jsUser["email"]])

jsUser.greetings = function(){
    // console.log("hello JS user");
    return `hello ${this.name}`;  // to avoid undefined
}

jsUser.greetingTwo = function(){
    console.log(`hello ${this.name}`);
}
console.log(jsUser.greetings() );
console.log(jsUser.greetingTwo() );

/*
  
## The reason you're seeing "undefined" printed in the VS Code terminal is because the functions `jsUser.greetings()` and `jsUser.greetingTwo()` do not explicitly return any value. Therefore, they implicitly return `undefined`, which is being printed to the console.
## To avoid printing "undefined", you can modify the functions to explicitly return a value or remove the `console.log()` calls when invoking them. For example:

```javascript
jsUser.greetings = function(){
    return "hello JS user";
}

jsUser.greetingTwo = function(){
    return `hello ${this.name}`;
}
```

Or, if you want to keep the console logs, you can modify the console.log calls like this:

```javascript
console.log(jsUser.greetings() || ''); // This will print an empty string if the function returns undefined
console.log(jsUser.greetingTwo() || '');
```

*/


