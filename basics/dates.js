let date = new Date();

// console.log(typeof date);

// console.log(`date => ${date}`);
// console.log(`tostring => ${date.toString()}`);
// console.log(`todatestring => ${date.toDateString()}`);
// console.log(`toISOString => ${date.toISOString()}`);
// console.log(`toJSON => ${date.toJSON()}`);
// console.log(`toLocaldatestring => ${date.toLocaleDateString()}`);
// console.log(`tolocalstring => ${date.toLocaleString()}`);
// console.log(`totimestring => ${date.toTimeString()}`);
// console.log(`tolocaltimetring => ${date.toLocaleTimeString()}`);


//let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate = new Date(2023, 0, 23, 6,7);

// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let nDate = new Date();
// console.log(nDate);
// console.log(`localdatestring ${nDate.toLocaleDateString()}`);
// console.log(`localstring ${nDate.toLocaleString()}`);

// console.log(nDate.getDate());
// console.log(nDate.getDay());
// console.log(nDate.getFullYear());
// console.log(nDate.getHours());
// console.log(nDate.getMinutes());
// console.log(nDate.getMonth());

nDate.toLocaleString('default', {
weekday: "long",
})
console.log(nDate);