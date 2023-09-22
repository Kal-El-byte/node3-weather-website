const request = require('request');

// forecast

// const url = 'http://api.weatherstack.com/current?access_key=9863ad178291d21b0085414c8bc0fec7&query=New%20York&units=f';

// request({ url, json: true  }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if (response.body.error){
//         console.log('The given location is invalid')
//     }else{
//         console.log('It is currently ' + response.body.current.temperature + ' degrees out.' + ' It feels like ' + response.body.current.feelslike + ' degrees out.' )
//     }
// });

const forecast = ((latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=9863ad178291d21b0085414c8bc0fec7&query= ' +encodeURIComponent(latitude) + ', ' + encodeURIComponent(longitude) + '&units=m';

    request( { url, json:true }, (error, {body}={})=>{
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('This given location is invalid', undefined)
        }else{
            callback(undefined,body.current.weather_descriptions+ ' through out the day, it is currently ' + body.current.temperature + '°c' + ' There is ' + body.current.precip + '% chance of rain.')
        };
    });
});


module.exports = forecast

