// console.log("02" >3);
// console.log("2" >3);
// console.log(2 >3);
// console.log("02" < 3);

// comparison and equality check are two different things

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// console.log(undefined > 0);
// console.log(undefined == 0);

console.log("2" === 2);


console.log(null > 0)



//https://262.ecma-international.org/5.1/#sec-11.4.3


// ***********************stack and heap memory***************************
// stack (primitve) -- copy of original
// heap (non-primitive) --referance

let myName = "manasitakalkar";
let anotherName = myName;
anotherName = "chaiaurcode";
console.log(myName);
console.log(anotherName);


let user ={
    name: "user",
    upi: "user@ybl"
}

let user2 = user;
user2.name = "manasi";
console.log(user.name);
console.log(user2.name);