//Method #1
// const fetch = require('node-fetch');

// const Darth = "http://swapi.dev/api/people/4/"

// let person = function(url) {
//     return fetch(url)
//         .then((response) => {
//             return response.json()
//     })
//     .then(person => {
//         console.log(person.name)
//         return (person)
//     })
// }

// let homeWorld = function(url) {
//     return fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then(person => {
//         console.log(person.homeworld);
//         return fetch(person.homeworld)
//             .then((response) => {
//                 return response.json()
//             })
//     })
// }

// let films = function(url) {
//     return fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then(person => {
//         return Promise.all(person.films.map(url => {
//             return fetch(url)
//                 .then((response) => {
//                     return response.json()
//                 })
//         }))
//     });
// }

// Promise.all([person(Darth), homeWorld(Darth), films(Darth)]).then(results => console.log(results))



//Method #2

const fetch = require('node-fetch')
fetch('https://swapi.dev/api/people/4')
    .then((response) => {
        return response.json()
    })
    .then(person => {
        return person
    })
    .then(person => {
        fetch(person.homeworld)
            .then((response) => {
                return response.json()
            })
        return person
    })
    .then(person => {
        const movies = person.films.map(film => {
            return fetch(film).then(response =>
                response.json())
        })
        Promise.all(movies).then(movieobjects =>
            console.log(movieobjects))
    })
    .catch((reason) => {
        console.log('rejected because', reason)
    })


const fs = require('fs').promises;

fs.writeFile('filename.txt', 'fileContents', 'utf-8')
    .then(() => {
        console.log("The file is finished being written");
    })
    .catch (e => {
        console.error("Something went wrong when writing the file");
})






