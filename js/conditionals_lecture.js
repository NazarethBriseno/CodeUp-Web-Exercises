// let flavor = prompt("Welcome to Codeup Ice cream, what flavor would you like?");
// flavor = flavor.toLowerCase();

// if (flavor === "chocolate"){
//     alert("One chocolate scoop coming right up!")
// } else if (flavor === "vanilla")}
// { else
// } {
//     alert("We dont actually have anything other than chocolate")
// }
// switch (flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla is coming up right now!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up");
//         break;
//     default:
//         alert("Sorry, we only have chocolate, vanilla and strawberry");
//         break;
// }

// let decision = confirm("Are you sure you want to close this page?");
// alert(decision);
// if (decision) {
//     alert("OK, closing this page!");
// } else {
//     alert("Ok, keeping the page open!");
// }

// (decision)?alert("Closing the page"):alert("Keeping page open!");

// let number =

// function divideByFive(number){
//     if(number % 5 === 0){
//         alert("That number is divisible by 5");
//     } else {
//         alert("That number's not divisible by 5!");
//     }
// }

// function divideByFive(number){
//     alert(number % 5 === 0 ? "That number is divisible by 5" : "That number is not divisible by 5");
// }
//
// divideByFive(prompt("Enter a number:"));


// function alertMVPCustomer(purchaseTotal) {
//     if (purchaseTotal >= 1000) {
//     alert("You're an MVP Customer!");
// } else {
//     alert("Buy more to become an MVP Customer!")}
// }


function isMVP(purchaseTotal){
    return purchaseTotal > 1000;
}
let customer1purchase = 1001;
if(isMVP(customer1purchase)){
    alert("MVP!")
}