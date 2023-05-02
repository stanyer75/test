'use strict';
/*

//Example of imperative code
let fruit = ['Banana', 'strawberry', 'Orange', 'Apple', 'grape', 'plum' ]


let fruitsThatContainE = [];

fruit.forEach(function(fruit){
    if(fruit.includes('e')){
        fruitsThatContainE.push(fruit);
    }
});

document.getElementById('output').innerHTML = fruitsThatContainE.join(',  ') */

/*

//Declerative code
let fruit = ['Banana', 'strawberry', 'Orange', 'Apple', 'grape', 'plum' ]

let fruitsThatContainE = fruit.filter(f => f.includes('e'));
document.getElementById('output').innerHTML = fruitsThatContainE.join(',  ')

let users = [
    { 
        name: 'anthony',
        email: 'email',
        stars: 5
    },
    {
        name: 'you',
        email: 'you email',
        stars: 9

    }, 
     {
        name: 'me',
        email: 'me email',
        stars: 1
     }
]

let totalStars = users.reduce((stars, user) => stars += user.stars, 0)
document.getElementById('output2').innerHTML += 'TotalStars: ' + totalStars;
*/


// map filtering
let users = [
    { 
        name: 'anthony',
        email: 'email',
        stars: 5
    },
    {
        name: 'you',
        email: 'you email',
        stars: 9

    }, 
     {
        name: 'me',
        email: 'me email',
        stars: 1
     }
]

let userEmails = users.map(user => user.email);
document.getElementById('output2').innerHTML += 'Emails: ' + userEmails.join(', ');

