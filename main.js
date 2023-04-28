'use strict';

let username = {

    name: 'anthony',
    email: 'example@example.com'
};

username = {
    name: 'Ashley',
    email: 'ashley@example.com'
};

/* function init() {

          //var email = 'nvbrvber'
    document.getElementById('output').innerHTML = `${username.name} (${username.email})`; 
} */

/* const init = (name,isTrue) => {
    document.getElementById('output').innerHTML = `${username.name} (${username.email})`;
} */



/* function nameString(){
    return`${username.name}(${username.email})`
}
document.getElementById('output').innerHTML = nameString() */

/* const nameString = name => `${name} (${username.email})`
document.getElementById('output').innerHTML = nameString('Anthony') */



let users = [
    {
        name: 'Andrew',
        email: 'andrew@example.com'
    },
    {
        name: 'Ashley',
        email: 'ashley@example.com'
    }
]

let names = []
/* 
users.forEach(function(user) {
    names.push(user.name);
}); */

users.forEach(user => names.push(user.name))

document.getElementById('output').innerHTML = names.join(', ')


document.getElementById('btn').addEventListener ('click', function(){

    
    const getDetails = () => {
        console.log(this);
        return `The button id is ${this.getAttribute('id')}`;
    }

    document.getElementById('output').innerHTML = getDetails();
}) 
