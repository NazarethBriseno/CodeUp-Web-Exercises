console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let response= prompt("What's your favorite color?");
alert("Wow " + response + " is my favorite color too!");


// Question 3-1
// let daysOfLittleMermaid = prompt("How many days did you rent The Little Mermaid");
// let daysOfBrotherBear = prompt("How many days did you rent Brother Bear?");
// let daysOfHercules= prompt("How many days did you rent Hercules?");
//
// let totalCost = (daysOfLittleMermaid * 3) + (daysOfBrotherBear * 3) + (daysOfHercules * 3);
//
// alert("Your total rental cost is $" + totalCost);


// Question 3 -2
// let hoursAtGoogle = prompt("How many hours did you work at Google?");
// let payAtGoogle = prompt("What is your hourly pay at Google?");
// let hoursAtAmazon = prompt("How many hours did you work at Amazon?");
// let payAtAmazon = prompt("What is your hourly pay at Amazon?");
// let hoursAtFacebook = prompt("How many hours did you work at Facebook");
// let payAtFacebook = prompt("What is your hourly pay at Facebook?");
//
// let totalPay= (hoursAtGoogle * payAtGoogle) + (hoursAtAmazon * payAtAmazon) + (hoursAtFacebook * payAtFacebook);
// alert("Your total pay is $" + totalPay);

// Questions 3-3
// let classFull = confirm("Is the class not full?");
// let scheduleConflict = confirm("Is there no schedule conflict?");
//
//
// let canEnroll = !classFull && !scheduleConflict;
//
// if (canEnroll){
//     alert ("You are good to enroll!")
// } else {
//     alert("You cannot enroll");
// }

// Question 3-4

let itemsBought = prompt("How many items did you buy?");
let offerExpired = confirm("Has the offer expired?");
let premiumMember = confirm("Are you a premium member?");

let productOffer= (premiumMember || itemsBought > 2) && !offerExpired;

if (productOffer) {
    alert("You are eligible for a product offer!")
} else {
    alert("Sorry, you're not a premium member so you are not eligible for a product offer :(")
}

