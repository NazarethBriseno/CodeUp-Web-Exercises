// Create prompt allowing user to input number
//Check if the number inputted by the user is odd
//Make sure the numbers are in between 1 and 50
//Every odd number will be console logged
//The user's odd number will be skipped with "Yikes, skipping (userNumber)


// let number =parseFloat(prompt("Enter an odd number between 1 and 50:"));
// while(true){
//     if(number % 2 === 0){
//         number = prompt("Please enter an odd number!");
//     } else {
//         console.log("Here is an odd number " + number);
//         break;
//     }
// }
//
// for(let i = 1; i <= 50; i++) {
//     if (number === i) {
//         console.log("Yikes! Skipping over " + number);
//         continue;
//     }
//     console.log(i + " is an Odd number");
//}

//Teacher's Code------------------------------------------------

while(true){
    let oddNumber = prompt("Please enter an odd number: ");
    if(oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 ===1){
        for(let i = 1; i <= 50; i+=2){
            if (i == oddNumber){
                console.log("Yikes! Skipping number " + oddNumber)
                continue;
            } else {
                console.log(i);
            }
        }
        break;
    }
}

