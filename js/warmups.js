function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean" || value === null);
}

let lilarray = [1, 4, 3, 2];
let strings = ["wild", "yellow", "strong"];
function averageArray(array) {
        let total = 0;
        for(let i = 0; i < array.length; i++){
            if (!isNumber(array[i]))
            {return false;}
            total += array[i];
        }
        return total/array.length;
    }
console.log(averageArray(lilarray));


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

function longestString(arrayOfStrings){
    let longest = '';
    for(let i = 0; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > longest.length){
            longest = arrayOfStrings[i];
        }
    }
    return longest;
}