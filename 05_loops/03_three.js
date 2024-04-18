// for of

// ["", "", ""] ==strings inside arrays
// [{},{},{}] arrays of objects
let arrays = [1,2,3,4,5];

for (const num of arrays) {
    //console.log(num);
}


const greetings = "welcome home";

// for (const greet of greetings) {
//     if(greet ==" "){
//       console.log("empty");
//     }else{
//         console.log(`greeting letters are ${greet}`);
//     }
// }


const map = new Map();
map.set('IN', 'India');
map.set('uk', 'united kingdom')
map.set('Arb', 'arabia')
map.set('us', 'united srtates')
map.set('uk', 'united kingdom')


// console.log(map);
// for (const key of map) {
//     console.log(key);
// }
for (const [key, value] of map) {
   //console.log(key, ":-", value);
}

let myObj = {
    'game1': 'nfs',
    'game2': 'nf',
    'game3': 'ns',
    'game4': 's',
}
for (const key of myObj) {
  //  console.log(key); //objects are not iterable 
}