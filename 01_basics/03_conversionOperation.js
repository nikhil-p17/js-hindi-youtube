

let score = "35abc";
let age = null;



console.log(typeof score);
console.log((score));

//convert to Number
let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNum = Number(age);

console.log(typeof valueInNum);
console.log(valueInNum);


// "35" => 35
// "35abc" => NaN
// "null" => 0
// "true/false" => 1/0
// "undefined" => NaN


//convert to Boolean
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// "1" => true; "0" => false;
// "" => false;
// "Nikhil" => true;


//convert to String
let anyNumber = 35;

let valueInString = String(anyNumber);


console.log(valueInString);
console.log(typeof valueInString);
