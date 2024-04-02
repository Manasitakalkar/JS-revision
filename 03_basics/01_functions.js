function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("S");
    console.log("I");
}

//sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 +number2);
// }

function addTwoNumbers(number1, number2){  //here are parameters, as we are defining functions
    // let result = number1+ number2; 
    // return result;  //console.log(result) will not store in any variable out of the function,only return can
    return number1 + number2;
}

// addTwoNumbers();
const result2 = addTwoNumbers(3,5);  // these are arguments, we pass to parameters
//console.log(addTwoNumbers(2,4));
//console.log(result2);

function loginUserMsg(username = "sam"){
    if(username === undefined){   // if(!username)
        console.log("please enter username");
        return
    }
        return`${username} just logged in`

}
console.log(loginUserMsg());