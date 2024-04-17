// for loop=>

for( let i = 0; i<=10; i++  ){
   
   if(i == 5){
    //console.log("it is best number");
   }
   //console.log(i);
}

// console.log(i);


for (let index = 0; index <=10; index++) {
    // console.log(`outer loop : ${index}`);
    for (let i = 0; i <=10; i++) {
        //console.log(`inner loope ${i}`);
        //console.log(index +"*" + i + "=" + index*i);
    }
    
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}


/// break and continue

for (let index = 0; index < 20; index++) {
   // console.log(index); // op == upto 15
    if(index == 15){
        break;
    }    
    //console.log(index); //op == upto 14
}

for (let index = 0; index < 30; index++) {
    //console.log(index); // print 3 as if is after console 
    if(index==3){
        console.log("contiune will be used here");
        continue;
    }
    console.log(index); // will not print 3 
}