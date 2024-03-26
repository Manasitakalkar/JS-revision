const accountId = 12345;
let accountEmail = "mvt@google.com";
var accountPassword = "12345678";
accountCity = "Jaipur";
let accountState; 

/*
Prefer to not var 
beacuse of the issues in block scope and function scope
*/

//accountId = 2;  ==> reassignment to const is not possible
// console.log(accountId);
accountEmail = "m@gmail.com";
accountPassword = "abcde";
accountCity = "pune";

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])