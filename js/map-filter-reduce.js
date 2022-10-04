const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Shows the people who've only learned 3 languages
let onlyThreeLanguages = users.filter((person) => person.languages.length === 3);
console.log(onlyThreeLanguages);
onlyThreeLanguages.forEach((person, index) => {
    document.body.innerHTML += `<p>User: ${index + 1} has only learned ${person.languages}</p>`
})

//Get all the users email addresses in a new array
let emailAddresses = users.map((person) => person.email)
console.log(emailAddresses)


//Calculate the average years of all the users
let totalYears = users.reduce((currentAmount, person) => currentAmount + person.yearsOfExperience, 0)
console.log(totalYears);

let averageYearsOfUsers = totalYears / users.length;
console.log(averageYearsOfUsers)


//Using .reduce with a string accumulator--------------------------
let longestEmail = users.reduce(function(currentAmount, user){
    // if(user.email.length > currentAmount.length){
    //     currentAmount = user.email;
    // }
    // return currentAmount
    return currentAmount.length > user.email.length ? currentAmount : user.email
}, "")

console.log(longestEmail)


//Log All Users Name in One String using the reduce method
let allNamesInOne = users.reduce(function(currentNames, user){
    return currentNames + " " + user.name.toUpperCase();
}, "")
console.log(allNamesInOne);


//============================MINI EXERCISES========================================
const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
];
// MAP
// TODO 1: using map, create a new array of dog names from the dogs array

let allDogNames = dogs.map((dog) => dog.dogName)
console.log('Exercise 1');
console.log(allDogNames);

// TODO 2: using map, create a new array of dog ages from the dogs array

let allDogAges = dogs.map((dog) => dog.age);
console.log('Exercise 2:');
console.log(allDogAges)

// TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values

console.log('Exercise 3:');
let dogNamesAndAge = dogs.map(function(dog){
 return {
     name: dog.dogName,
     age: dog.age
 }
})
console.log(dogNamesAndAge)

// FILTER
// TODO 4: using filter, create a new array containing only dogs younger than 10 years old

console.log('Exercise 4:');
let dogsUnder10 = dogs.filter((dog) => dog.age < 10);
console.log(dogsUnder10);

// TODO 5: using filter, create a new array containing only dogs named 'Lexie'

console.log('Exercise 5:');
let dogsNamedLexie = dogs.filter((dog) => dog.dogName === "Lexie");
console.log(dogsNamedLexie);

// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10

console.log('Exercise 6:');
let dogsTrainedAndYoungerThan10 = dogs.filter((dog) => dog.isTrained === true && dog.age < 10);
console.log(dogsTrainedAndYoungerThan10);

// REDUCE
// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")

console.log('Exercise 7:');
let allDogNamesInString = dogs.reduce((dogNames, dog) => dogNames + dog.dogName, "")
console.log(allDogNamesInString);

// TODO 8: using reduce, return the total of adding all dog ages together (18)

console.log('Exercise 8:');
let allDogAgesTogether = dogs.reduce((dogAges ,dog) => dogAges + dog.age, 0);
console.log(allDogAgesTogether)

// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true

console.log('Exercise 9:');
let allDogsTrained = dogs.reduce((acc, dog) =>{
    let newDog = {
        dogName: dog.dogName,
        age: dog.age,
        isTrained: true
    }
    acc.push(newDog);
    return acc;
}, []);
console.log(allDogsTrained);

// EXTRA CHALLENGES
// TODO 10: what is the average age of each dog?

console.log('Exercise 10:');


// TODO 11: what is the average age of dogs that are trained?

console.log('Exercise 11:');


// TODO 12: what is the average length of names of untrained dogs?

console.log('Exercise 12:');


// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)

console.log('Exercise 13:');


// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")

console.log('Exercise 14:');