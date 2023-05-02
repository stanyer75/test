'use strict';
/*
const fruit = new Map();

fruit.set(1, 'banna');
fruit.set(2, 'apple');
fruit.set(3, 'strawberry');
*/
/*
document.getElementById('output').innerHTML = fruit.get(2);

fruit.delete(2);


fruit.forEach(item => { 
    document.getElementById('output2').innerHTML  += '<br>' + item;    
}); */
/*
fruit.set (4, {
    type: 'Orange',
    colour: 'orange',
    flavour: ' orangey'
});

document.getElementById('output').innerHTML = fruit.get(4).flavour; */





const users = new Map(); // maps are on a value to key basis, much like a dictionary

users.set({
    name: 'Andrew',
    email: 'email'

}, function(user){
    document.getElementById('output').innerHTML += `${user.name} (${user.email}) <br>`;
});

const userAnthony = {
    name: 'Anthony',
    email: 'email 2'
}

users.set(userAnthony, function(user){
    document.getElementById('output2').innerHTML += `${user.email} (${user.name}) <br>`;
});

users.forEach((value, key) => {
    value(key)
});

let userAnthonyExists = users.has(userAnthony);

console.log('userAnthonyExists', userAnthonyExists);


const fruit = new Set(); // sets only contain values, no keys like maps do 

fruit.add('banna') // cannot have duplicate value however
fruit.add('Apple')
fruit.add('Strawberry')

fruit.forEach(value => {
    document.getElementById('output3').innerHTML += '<br>' + value
});
