// function isNumber(value){
//     return !(isNaN(value) || typeof value === "boolean" || value === null);
// }
//
// let lilarray = [1, 4, 3, 2];
// let strings = ["wild", "yellow", "strong"];
// function averageArray(array) {
//         let total = 0;
//         for(let i = 0; i < array.length; i++){
//             if (!isNumber(array[i]))
//             {return false;}
//             total += array[i];
//         }
//         return total/array.length;
//     }
// console.log(averageArray(lilarray));


// newLongString= 0;
// function longString(input){
//     for (i = 0; i < input.length; i++){
//         if (input[i].length > newLongString){
//             newLongString = input;
//         }
//     }
//     return newLongString;
// }
// console.log(longString(strings));

// function longestString(arrayOfStrings){
//     let longest = '';
//     for(let i = 0; i < arrayOfStrings.length; i++){
//         if (arrayOfStrings[i].length > longest.length){
//             longest = arrayOfStrings[i];
//         }
//     }
//     return longest;
// }

// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22}
// ];
//
//
// function calculateTotalStudents(classes){
//     let total = 0;
//     for (let i=0; i < classes.length; i++){
//         total = total + classes[i].students;
// }
//     return total;
// }

// const convertToObject = function (nameOfClass, numberOfStudents){
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }
// // convertToObject(convertToObject("Into to Programming", 20));
//
// const neighborhood1 ={
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 6},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// const neighborhood2 ={
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 8},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// const neighborhood3 ={
//     neighborhood: "Ginormous Ego Estates",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 9},
//         {name: "MS2", rating: 9},
//         {name: "HS3", rating: 9}
//     ]
// }
//
// function bestNeighborhood(neighborhoodsObject){
//         let total = 0;
//     for (let i=0; i < neighborhoodsObject.schools.length; i++){
//         total = total + neighborhoodsObject.schools[i].rating;
// }
//     return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low";
// }

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

function beeramid(bonus, price){
    let totalCost = 0;
    let levels = 0;
    while(totalCost < bonus){
        totalCost += levels * levels * price;
        levels++;
    }
    return levels - 2;
}