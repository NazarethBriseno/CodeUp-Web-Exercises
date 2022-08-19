
// declaring an array literal:
// Each item in an array is called an element
//
let groceryList = ['bread', 'eggs', 'butter,', 'milk']
//
// for(let i = 0; i < groceryList.length; i++){
//     if (i === groceryList.length - 1){
//         console.log("I have to buy " + groceryList[i] + ".");
//     } else {
//     console.log("I have to buy " + groceryList[i] + " and ");
// }}

let topArtists = ["Drake", "The Weeknd", "Ed Sheeran", "Taylor Swift", "Bad Bunny"];
// for(let i = 0; i < topArtists.length; i++) {
//     console.log(topArtists[i]);
// }
//
// function outputArray(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }

//The first parameter .forEach is the elements name's. The second parameter is the index!
let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// forEach loop takes an anonymous function
// the function we pass to the forEach loop as up to three parameters
// The first parameter represents the array elements
// the Second parameter represents the element index
//The third parameter represents the array itself
//the second and third parameters are optional


// prices.forEach(function(price, index){
//    console.log("Item number " + (index + 1) + " costs " + price);
// });
//since the function is anonymous, we can use arrow syntax
// prices.forEach((price => {
//    console.log(price)
// })

// Pushes items to the end of the array
groceryList.push("potatoes");
//Pop will delete the last item on the array
groceryList.pop();
//Unshift will add whatever added to the beginning
groceryList.unshift("sliced cheddar");
//Shift will remove anything that was at the beginning
groceryList.shift();
//This will show the index location of butter
let indexOfButter = groceryList.indexOf("butter");

//You can reassign an index by putting the array name with the index location and putting a new value
groceryList[indexOfButter] = "peanut butter";

let bread = groceryList[0];
groceryList[0] = "avacadoes";
//This will split the array, you can push and pop in these areas
let firstHalfOfGroceryList = groceryList.slice(0, 2);
let secondHalfOfGroceryList = groceryList.slice(2);

firstHalfOfGroceryList.push("butter");
// This will combine the seperated slices back together into the formed array
groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);

//Reverse orders of array
groceryList.reverse();
let string = "Hello";
//Sort puts everything in alphabetical order
groceryList.sort();
console.log(groceryList);