// The parts of a function
// 1. Function Keyword
// 2. The name of the function (Should be called something that the function is going to do)
// 3. Parentheses have zero or more parameters
// 4. If there is more than one parameter, the list is comma seperated
// 5. Curly braces contain the function body
// 6. The function body contains the code that runs when the function is invoked
function sayHello(greeting, name) {
    return `${greeting}, ${name}`;
}

// Global scope means that it can be used throughout all expressions, functions, etc. Local means they are stuck within that function

// Here number has local scope so it won't work outside the function
// function localOrGlobal() {
//     let number= 20;
// }
// console.log(number);


// Here the number has global scope
// let number = 20;
// function localOrGlobal() {
//     console.log(number);
// }

// let number = 20;

// function declarations
// function localOrGlobal(){
//     let number= 10;
//     console.log(number);
// }
// localOrGlobal();
// console.log(number);

//function expression
// functions declarations are hoisted, so this will work:
// const bark = function(){
//     console.log("Woof!");
// }
//
// function yap() {
//     console.log("yip yip");
// }
// function declaration
// function add(num1, num2) {
//     return num1 + num2;
// }
//function expression
// const add = function(num1, num2){
//     return num1 + num2;
// }

const add = (num1, num2) => num1 + num2;