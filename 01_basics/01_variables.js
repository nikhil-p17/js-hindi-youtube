const accountId = 123456;
let accountEmail = "nkl@gmail.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;

//accountId = 9876; //Not allowed
accountEmail = "xyz@gmail.com";
accountPassword = "67890";
accountCity = "Pune";
//accountState = "MP";



console.log(accountId);

/*Prefer NOT to use var
because of the issue in block scope and functional scope
Use const and let
*/


//Write in tabular form
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



