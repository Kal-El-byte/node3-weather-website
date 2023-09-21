// const request = require('request');
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#msg1');
const messageTwo = document.querySelector('#msg2');



messageOne.textContent = 'From Javascriot';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        };
    });
});
});


//for card

// const search2 = document.querySelector('#input1');
// const search3 = document.querySelector('.search');
// const city = document.querySelector('.city')
// const temp = document.querySelector('.temp')

// search3.addEventListener('click', (e) => {
//     e.preventDefault

// fetch('http://api.weatherstack.com/current?access_key=9863ad178291d21b0085414c8bc0fec7&query=' + search2).then((response) => {
//     response.json().then((data) => {
//         temp.textContent = data.body.current.temperature
//     });
// });

// // weatherDegree();
//     city.textContent = search2.value;
// });