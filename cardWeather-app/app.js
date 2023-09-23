const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const address = process.argv[2]
// geocode
if(!address){
    return console.log('Please provide an address')
}else{
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if (error){
            return console.log(error);
        }
            //forecast
            forecast(latitude, longitude, (error, forecastdata) => {
                if (error){
                    return console.log(error)
                }
                console.log(location);
                console.log(forecastdata)
            });
        });
    };


