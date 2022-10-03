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

let onlyThreeLanguages = users.filter((person) => person.languages.length === 3);
console.log(onlyThreeLanguages);
onlyThreeLanguages.forEach((person, index) => {
    document.body.innerHTML += `<p>User: ${index + 1} has only learned ${person.languages}</p>`
})

let emailAddresses = users.map((person) => person.email)
console.log(emailAddresses)


let totalYears = users.reduce((currentAmount, person) => currentAmount + person.yearsOfExperience, 0)
console.log(totalYears);

let averageYearsOfUsers = totalYears / users.length;
console.log(averageYearsOfUsers)

let longestEmail = users.reduce(function(currentAmount, user){
    if(user.email.length > currentAmount.length){
        return currentAmount = user.email.length;
    }
}, "")
console.log(longestEmail)