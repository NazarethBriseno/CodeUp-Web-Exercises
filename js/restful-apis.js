// API- Application Programming Interface
//This is a set of rules defining how applications and/or devices can connect to each other and communicate with one
// another

//REST means representational state transfer
//A pattern of design principles for APIs
//REST APIs communicate via HTTP requests

//In a REST API, communication via HTTP requests is used to perform the standard set of actions called CRUD (CREATE,
// READ, UPDATE, DELETE)

//JSON JavaScript Object Notation is not mandatory but is popular because it is both human= and machine-readable

//https://glitch.com/second-workable-airship

const booksURL = "https://second-workable-airship.glitch.me/books";

const moviesURL = "https://second-workable-airship.glitch.me/movies";

//The R in CRUD: Read
function getMovies(){
    fetch(moviesURL).then(response => response.json().then(data => console.log(data)))
}

getMovies();

// The C in CRUD: Create:
    const booktoPost = {
        title: "Hello",
        author: {
            firstName: "Ralph",
            lastName: "Mason"
        }
    }

    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(booktoPost)
    }

function getBooks(){
    fetch(booksURL).then(response => response.json().then(data => console.log(data)))
}


// fetch(booksURL, postOptions).then(getBooks);

// THE U in CRUD: Updating with PUT and PATCH requests
// We'll use PUT to replace the entire content
//We'll use PATCH to modify only part of the entry

let modification = {
        title: "Hello, again"
}

const patchOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(modification)
}

// fetch(booksURL + '/1', patchOptions).then(getBooks);

modification = {
        title: "Goodbye",
        author: {
            firstName: "John",
            lastName: "Mason"
        }
}

const putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(modification)
}

fetch(booksURL + '/1', putOptions).then(getBooks);

// The D in CRUD -- Delete
    const deleteOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        }
    }
fetch(booksURL + '/1', deleteOptions).then(getBooks);