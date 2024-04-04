const user = {
    name: "manasi",
    fees: 999,
    welcomeMsg: function(){
        console.log(`welcome ${this.name}`);  //this refers current context
        console.log(this);
    }
}

// user.welcomeMsg();
// user.name = "sam"
// user.welcomeMsg();

//console.log(this);  //this will give empty object, bcoz, we are in node invironment, as we don't have global context here
// if we print this in browser's console, it will return windows object


// function chai(){
//     const username = "manasi"
//     console.log(this.username);  //never works in function, only works in objects
// }
// chai();

const username = "1234567890";
const chai1 = function(){
    //let username = "manasi"
    console.log(this.username);
    // console.log(this);
}
//chai1();

const chai = ()=>{
    //let username = "manasi"
    console.log(this.username);
    // console.log(this);
}
//chai();


// const addTwo = (num1, num2)=>{
//     return num1 + num2;
// }


//Implicite return 
// const addTwo = (num1, num2)=> num1 + num2;
// const addTwo = (num1, num2)=> (num1 + num2);

// const addTwo = (num1, num2)=>( {username: "manu"});  // without () to object, will return undefined


// console.log(addTwo(3,5));

