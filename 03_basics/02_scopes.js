// var c = 300;


let a  = 300;
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    //console.log(`inner a : ${a}`);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "manasi"
    function two(){
        const website ="youtube"
        console.log(username);
        
    }
    // console.log(website);
     two()
}
//one();

if(true){
    const username = "m2"
    if(username === "m2"){
        const website = " google"
        // console.log(username + website);
    }
    //console.log(website);
    //console.log(username);
}
//console.log(username);


// *****************************Interesting********************************
console.log(addOne(5));  //no error will occur
//function 
function addOne(num){
    return num +1;
}
// console.log(addOne(5));

//console.log(addTwo(5));  ReferenceError: Cannot access 'addTwo' before initialization

//function==> expression
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));

