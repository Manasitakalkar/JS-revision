// Immediately invoked function expressions

(function chai(){
    console.log(`DB connected`);
})();   //semicolon is important to allow next functions invoked immediately
// syntax of iife : (fn)();, used to avoid pollution due to global scope

(()=> {console.log(`db connected two`)})();

((name)=> {console.log(`db connected by ${name}`)})("manasi");
