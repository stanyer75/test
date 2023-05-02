'use strict';

let myPromise = new Promise((resolve,reject) =>{

    let user = {

        name: 'andrew',
        email: 'andrew@exaple.com'
    };

    setTimeout(()=>{
        resolve(user); //if user is retrieveable then this code will execute
        //reject('could not retrieve user') //if not retrievable then this will display within the console of the website not neccessarily on the page
    }, 2000);       /* a delay of two seconds is set to emulate pulling in or accessing large files*/

});

const getAdditionalUserData = user => {

    document.getElementById('output'). innerHTML = `${user.name} (${user.email})`; 

    return new Promise((resolve, reject)=> {
       
        user.favouriteColor = 'Blue',
        user.currentDrink = 'La croix'

        setTimeout(()=>{
            resolve(user);
        }, 2000);
    });
}

myPromise.then(getAdditionalUserData)
.then((user) => {
    document.getElementById('output'). innerHTML = `${user.name} (${user.email}) ${user.currentDrink} ${user.favouriteColor}`;
})
.catch((error) => {   //catch is just tagged onto the end of the promise executor 
    document.getElementById('output').innerHTML = error; // this code displays the error when a rejection occurs and cancels all code thereafter
});

document.getElementById('output').innerHTML = 'text here!!' /* this code will be true and execute for two seconds in lue of the promise being resolved up top*/ 
