// let slices = 4;
// console.log(`There are ${slices} slices`)
// while (slices > 0){
//     console.log("I'll have slice");
//     slices = slices -1;
//     console.log (`Now there's ${slices} left`);
// }
// console.log("No more slices");

// let counter = 100;
//
// while (counter >= 0){
//     console.log(counter);
//     counter--;
// }

//Ask a user for input(how much something costs)
//Assign user input to a variable
// Declare a variable to hold the total cost
// Tell the user what the total is
// Get the user input for the next item's cost
// There needs to be a way for the user to say when there's no more items
// let total = 0;
// let priceOfItem;
// while(true){
//     let userInput = prompt("Enter the price of your item:" +
//                            "\n Enter STOP when you are done");
//     if (userInput === "STOP") {
//         alert("Your final total is " + total.toFixed(2));
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//
//         alert("Your total is " + total.toFixed(2));
//     }
// }
//
// total = total + priceOfItem;
// alert("Your total is " + total);

// let number = Math.ceil(Math.random() * 6);
// let guess;
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6:"))
// } while (guess !== number);
// alert(`Your guess of ${guess} matches the number ${number}!`);

// This is the loop control variable


// let count = 100;// Initiate with a starting value

// while (count >= 0){   // check the value of the loop control variable in a conditional test
//     console.log(count);
//     count = count - 1; // Change the value of the loop control variable
}
   // Starting Value||Check Value||Change the Value
// for(let count = 100; count >= 0; count = count - 1){
//     console.log(count);
// }
//
// for (let i = 100; i >= 0; i--) {
//     console.log(i)
// }

// let i = 0;
// while(i < 100){
//     console.log(i);
//     i++;
// }

// for(i = 1; i < 100; i++;){
//     console.log(i);
// }
// console.log("Outside the loop: " + i);