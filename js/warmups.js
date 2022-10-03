// // function isNumber(value){
// //     return !(isNaN(value) || typeof value === "boolean" || value === null);
// // }
// //
// // let lilarray = [1, 4, 3, 2];
// // let strings = ["wild", "yellow", "strong"];
// // function averageArray(array) {
// //         let total = 0;
// //         for(let i = 0; i < array.length; i++){
// //             if (!isNumber(array[i]))
// //             {return false;}
// //             total += array[i];
// //         }
// //         return total/array.length;
// //     }
// // console.log(averageArray(lilarray));
//
//
// // newLongString= 0;
// // function longString(input){
// //     for (i = 0; i < input.length; i++){
// //         if (input[i].length > newLongString){
// //             newLongString = input;
// //         }
// //     }
// //     return newLongString;
// // }
// // console.log(longString(strings));
//
// // function longestString(arrayOfStrings){
// //     let longest = '';
// //     for(let i = 0; i < arrayOfStrings.length; i++){
// //         if (arrayOfStrings[i].length > longest.length){
// //             longest = arrayOfStrings[i];
// //         }
// //     }
// //     return longest;
// // }
//
// // let classes = [
// //     {class: "6th grade history", students: 18},
// //     {class: "7th grade history", students: 20},
// //     {class: "8th grade history", students: 22}
// // ];
// //
// //
// // function calculateTotalStudents(classes){
// //     let total = 0;
// //     for (let i=0; i < classes.length; i++){
// //         total = total + classes[i].students;
// // }
// //     return total;
// // }
//
// // const convertToObject = function (nameOfClass, numberOfStudents){
// //     return {
// //         class: nameOfClass,
// //         numberOfStudents: numberOfStudents
// //     }
// // }
// // // convertToObject(convertToObject("Into to Programming", 20));
// //
// // const neighborhood1 ={
// //     neighborhood: "Lovely Estates",
// //     medianHomePrice: 280000,
// //     pool: true,
// //     tennis: false,
// //     crimeRate: "low",
// //     schools: [
// //         {name: "ES1", rating: 8},
// //         {name: "MS2", rating: 6},
// //         {name: "HS3", rating: 8}
// //     ]
// // }
// //
// // const neighborhood2 ={
// //     neighborhood: "Luminous Estates",
// //     medianHomePrice: 270000,
// //     pool: true,
// //     tennis: false,
// //     crimeRate: "low",
// //     schools: [
// //         {name: "ES1", rating: 8},
// //         {name: "MS2", rating: 8},
// //         {name: "HS3", rating: 8}
// //     ]
// // }
// //
// // const neighborhood3 ={
// //     neighborhood: "Ginormous Ego Estates",
// //     medianHomePrice: 350000,
// //     pool: true,
// //     tennis: true,
// //     crimeRate: "low",
// //     schools: [
// //         {name: "ES1", rating: 9},
// //         {name: "MS2", rating: 9},
// //         {name: "HS3", rating: 9}
// //     ]
// // }
// //
// // function bestNeighborhood(neighborhoodsObject){
// //         let total = 0;
// //     for (let i=0; i < neighborhoodsObject.schools.length; i++){
// //         total = total + neighborhoodsObject.schools[i].rating;
// // }
// //     return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low";
// // }
//
// //Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
// //
// // A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
// //
// // Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
// //
// //     your referral bonus, and
// //
// //     the price of a beer can
// //
// // For example:
// //
// // beeramid(1500, 2); // should === 12
// // beeramid(5000, 3); // should === 16
//
// // function beeramid(bonus, price){
// //     let totalCost = 0;
// //     let levels = 0;
// //     while(totalCost < bonus){
// //         totalCost += levels * levels * price;
// //         levels++;
// //     }
// //     return levels - 2;
// // }
//
// // const attendance = {
// //     miami: 32789,
// //     buffalo: 45678,
// //     portland: 24567
// // }
// //
// // //Write a function that returns the total attendance across all teams
// // function totalAttendance(attendanceObject){
// //     let attendanceArray = Object.values(attendanceObject);
// //     let total = 0;
// //     for(let i = 0; i < attendanceArray.length; i++){
// //         total += attendanceArray[i];
// //     }
// //     return total;
// // }
// // //Given the attendance object, write a function that returns the average attendance
// // function averageAttendance(attendanceObject){
// //     let total = 0;
// //     for (const prop in attendance){
// //         total += attendance[prop];
// //     }
// //     return total/Object.keys(attendance).length
// // }
// //Given the attendance object, write a function that returns an object with totalAttendance properties set to the
// // correct values
//
// // function createObject(attendanceObject){
// //     let total = 0;
// //     for (const prop in attendance){
// //         total += attendance[prop];
// //     }
// //     return {
// //         totalAttendance: total,
// //         averageAttendance: total/Object.keys(attendance).length
// //     }
// // }
//
// /**
//  * Convert Address to Object
//  * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
//  *
//  * Examples
//  *
//  * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
//  * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
//  **/
// // let address = "325 Elm Street";
// //
// // function convertAddressToObject(addressString){
// //     return {
// //         streetNumber: addressString.substring(0, indexOf(' ')),
// //         streetName:   addressString.substring(address.indexOf(' ') + 1)
// //     }
// // }
//
// /**
//  * Count total pets
//  * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
//  *
//  * Examples
//  *
//  * >> totalPets([
//  *       {name: 'Fernando Mendoza', pets: 1},
//  *       {name: 'Douglas Hirsh', pets: 8},
//  *       {name: 'Kenneth Howell', pets: 2}
//  *    ]) ➞ 11
//  */]
// // let peopleWithPets = [
// //     {name: 'Fernando Mendoza', pets: 1},
// //     {name: 'Douglas Hirsh', pets: 8},
// //     {name: 'Kenneth Howell', pets: 2}
// // ]
// //
// // function totalPets(arrayOfPets) {
// //     let toal = 0;
// //     for(let i = 0; i < arrayOfPets.length; i++){
// //         total += arrayOfPets[i].pets;
// //     }
// //     return total;
// // }
//
// // function totalPets(arrayOfPets){
// //     let total = 0;
// //     arrayOfPets.forEach(function(object){
// //         total += object.pets;
// //     });
// //     return total;
// // }
//
// //DOM WARMUPS-----------------------------------------------------
//
// //When the user clicks the button that has the text "Change heading", the text of the <h1> element changes to read
// // "I pwn the DOM"
//
let bodyHeading = document.getElementsByTagName("h1")[0]
let buttonHeading = document.getElementById("buttonHeading")

// buttonHeading.addEventListener("click", function(){
//     bodyHeading.innerHTML = "Hello"
// })

document.getElementsByTagName("button")[0].addEventListener('click', function(e){
    if (document.getElementsByTagName("h1")[0].innerHTML === "I pwn the DOM") {
        document.getElementsByTagName("h1")[0].innerHTML = "Hello!"
    } else {
        document.getElementsByTagName("h1")[0].innerHTML = "I pwn the DOM"
    }
})

