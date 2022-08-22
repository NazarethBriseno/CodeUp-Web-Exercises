// let currentWeather = {
//     humidity: 77,
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75
//     description: "cloudy"
// }
// console.log(currentWeather.temp);
// console.log(currentWeather.description);
// console.log(currentWeather.feels_like);
//
// console.log(currentWeather["humidity"]);

//Arrays of objects
// let hourlyWeather = [
//     {
//         time: "08:00",
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];

//Loop over an array of objects

//Using the for loop
// for(let i = 0; i < hourlyWeather.length; i++){
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`)
// }

// Use a forEach loop
// hourlyWeather.forEach(function(forecast, index){
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`)
// })

//forEach loop with arrow syntax
// hourlyWeather.forEach(forecast =>
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`)
// );

//Array of objects where in the objects have properties that are objects

// let texasInfo = [
//     {
//         city: "San Antonio",
//         latitude: 29.423017,
//         longitude: -98.48527,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 77,
//             temp: 82.33,
//             feels_like: 88.79,
//             clouds: 75
//         }
//     },
//     {
//         city: "Houston",
//         latitude: 29.7915,
//         longitude: -95.093,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 68,
//             temp: 87.44,
//             feels_like: 97.7,
//             clouds: 75
//         }
//     }
// ];


// console.log("The temperature in " + texasInfo[1].city + " is " + texasInfo[1].currentWeather.temp);
//
// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     }

//         var damage = Math.ceil(Math.random() * this.maxDamage);
//         console.log(this.name + " does " + damage + " points of damage!");
//     }
// }
//
// fighter.attack();

// let monster = {
//     name: "Goblin",
//     gitPoints: 8,
//     maxDamage: 6,
// }

//Lets create a controller object to handle anything players or game objects do that affects the states of the game.
// The controller might handle taking user input and calculating the input's affect on the game.
// let controller = {
//     attack: function(attacker, defender){
//         let damage = Math.ceil(Math.random() * attacker.maxDamage);
//         defender.hitPoints -= damge;
//         view.displayAttackResults(attacker, defender, damage);
//     }
// }
// let view = {
//     displayAttackResults: function(attacker, defender, damage{
//         console.log(`${defender.name} has ${defender.hitPoints} hit points`);
//         console.log(attacker.name + " attacks!");
//         console.log(`${attacker.name} does ${damage} hit points of damage!`);
//         console.log(`${defender.name} now has ${defender.hitPoints - damage} hit points`);
//         console.log("------------------");
//     })
// }
//
//
// controller.attack(fighter, monster);
// controller.attack(monster, fighter);


//Object destructuring

const car = {
    make: "Toyota",
    model: "Tacoma",
    year: "2019",
    mileage: "12657"
}

// let make = car.make;
// let carModel = car.model;
// console.log(make);
// console.log(carModel);

const {make, model, year, mileage} = car;
console.log(make);
console.log(mode);
console.log(year);
console.log(mileage);

const outputCarInfo = ({make, model, year, mileage} = car) => {consle.log(`${year} ${make ${model} with ${mileage`)}
outputCarInfo(car);








