// let number = 2;
// while(number <= 65536) {
//     console.log(number);
//     number = number *2;
// }

// Naz's Code for Cones Sold Exercise--------------------------------
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     let customersCones = Math.floor(Math.random() * 5) + 1;
//     console.log(`There are ${allCones} left!`);
//     console.log(`${customersCones} just got sold!`);
// } while (allCones = allCones - customersCones);
// alert(`All ${allCones} cones are sold!`)

// Teacher's Code for Cones Sold Exercise-----------------------------
// let allCones = Math.floor(Math.random() * 51) + 50;
//
// do {
//     let conesWanted = Math.floor(Math.random() * 5) + 1;
//     if (conesWanted > allCones) {
//         console.log(`Cannot sell you ${conesWanted}, I only have ${allCones} left!`)
//     } else {
//         console.log(`${conesWanted} sold...`);
//         allCones = allCones - conesWanted;
//     }
//     console.log(`${allCones} left`);
// } while (allCones > 0);
// console.log("Yay i sold them all!");

// Created an IF statement, if a customer asks for more cones than we have, it'll let them know we don
// don't have that amount, everything else gets sold and the amount of cones gets decreased by the
//amount that people have bought. When there's no more it console logs that they were all sold

