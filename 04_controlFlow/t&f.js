// const email = "h@gmail.com"
// if(email){
//     console.log("exists");
// }else{
//     console.log("don't exists");
// }

/*
falsy values 
false, 0, -0, BigInt(0n), "", null, undefined, NaN 
all others are truthy values

truthy values
"0", 'false', " ", [], {}, function(){}
*/

// const user = []
// if(user.length === 0){
//     console.log("array is empty");
// }

// const obj = {}
// if(Object.keys(obj).length ===0){
//     console.log("object is empty");
// }



// Nulish coalescing operator (??) : null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined?? 15
val1 = null ?? 10 ?? 1210

// console.log(val1);

//ternairy operator 

// condition ? true: false

const iceTeaPrice = 10 ;

iceTeaPrice >=80 ? console.log(`price is ${iceTeaPrice}`): console.log("price is less");