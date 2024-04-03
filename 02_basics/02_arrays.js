const marvelHeros = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvelHeros.push(dc);  //pushes in existing array
// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

const allHeros = marvelHeros.concat(dc);  // returns new array
// console.log(marvelHeros);
// console.log(allHeros);


// Spreading an array : 
const all_new_heros = [...marvelHeros, ...dc, ...allHeros]

// console.log(all_new_heros);

// const anotherArray = [1, 2, 3, 4, [5, 6, [11, 12, 13], 7, 8], 9, 10];
// console.log(anotherArray);
// console.log(...anotherArray);
// const perfectArray = anotherArray.flat(Infinity);  //flat=> to spready upto level inside you want
// console.log(` fully spreaded array : ${perfectArray}`);


// console.log(Array.isArray("manasi"));

// console.log(Array.from("manasi"));
// console.log(Array.from({name: "manasi"}));  // This will return empty array. As it isn't clearly defined from what the console should extract indices

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2,score3));
