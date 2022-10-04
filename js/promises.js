function getUsersLastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': `token ${GITHUB_API_TOKEN}`
        }
    }).then(response => response.json())
        .then(events => {
            console.log(events)
            console.log(events[0].payload.commits[0].message)
            console.log(new Date (events[0].created_at).toDateString())})
        .catch(error => console.error(error));
}
//Create your own promise exercise cancelled==================================

async function getUserLastCommitAsync(username){
    let response = await fetch(`https://api.github.com/users/${username}/events/public`)
    let events = await response.json();
    console.log(events);
}

function getUsersLastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': `token ${GITHUB_API_TOKEN}`
        }
    }).then(response => response.json())
        .then(events => {
            console.log(events)
            console.log(events[0].payload.commits[0].message)
            console.log(events[0].created_at)})
        .catch(error => console.error(error));
}
