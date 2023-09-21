const request = require('request');


//Geocode

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGFuaXZldCIsImEiOiJjbGgxMjV1OHAwZmliM2VvaDdzOW0yeHByIn0.l_G-81CNE38lrbaeJQCpGw&limit=1';

// request( {url: geocodeURL, json: true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather location')
//     }else if(response.body.features.length === 0){
//         console.log('Unable to find location, try another search')
//     }else{
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);
//     };

// });


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ '+ encodeURIComponent(address) +' .json?access_token=pk.eyJ1IjoiZGFuaXZldCIsImEiOiJjbGgxMjV1OHAwZmliM2VvaDdzOW0yeHByIn0.l_G-81CNE38lrbaeJQCpGw&limit=1'
    request( { url: url, json: true }, (error, response) => { //you can destructure the response just like forecast.js
        if(error){
            callback('Unable to connect to weather location', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location, try another search', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        };
    });
};

    module.exports = geocode;