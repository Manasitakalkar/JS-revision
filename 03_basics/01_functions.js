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
// console.log(loginUserMsg());

function calculateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrice(300, 400, 500,344567890));

const user = {
    username : "manasi",
    price: 200
}

function handleObj(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObj(user);

handleObj({
    username: "sam",
    price: 399
})


const myNewArray =[1,2,3,4,5,6,7];

function array(arr){
console.log(`array is ${arr[3]}`);
}
// array(myNewArray);

array([123456,12345,12345,12345,1234,1234,123456,1234567890])