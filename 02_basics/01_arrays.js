const myArr = [1,2,3,4,5, true, "manasi"];
//console.log(myArr[3]);

const myHeros = [ "shaktiman", "naagraj"];
const myArr2 = new Array(1,2,3)

// Array methods 
// myArr.push(6);
// myArr.push(6);
// myArr.push(6);
// myArr.pop();

myArr.shift();
myArr.unshift(9);

// console.log(myArr);
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(5));
// console.log(myArr.indexOf(8));
const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

// Slice and splice 
//console.log("A", myArr);
console.log(myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log(myArr);

const myn2 = myArr.splice(5, 6, "AK")
console.log(myn2);
// console.log(myArr);

//console.log(myArr);

/*

slice():
Copies a portion of an array into a new array.
Does not change the original array.

splice(): 
Modifies the original array by adding, removing, or replacing elements in place.
*/