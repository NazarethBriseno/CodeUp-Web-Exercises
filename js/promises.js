function getUsersLastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': `token ${GITHUB_API_TOKEN}`
        }
    }).then(response => response.json())
        .then(events => {
            console.log(events[0].payload.commits[0].message)
            console.log(events[0].created_at)})
        .catch(error => console.error(error));
}

