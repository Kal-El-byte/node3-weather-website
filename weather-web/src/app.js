const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

//register partials
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    res.render('index', {
        pagetitle: 'Home',
        title: 'Weather',
        name: 'Kamelot'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        pagetitle: 'About',
        title: 'About Page',
        name: 'Kamelot'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        pagetitle: 'Help',
        title: 'Help Page',
        name: 'Kamelot'
    });
});

//sample code to test how to get req from Query
app.get('/products', (req, res) => {

    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        });
    };
    console.log(req.query.search);

    res.send({
        products: []
    });
});

app.get('/weather', (req, res) => {
    // res.send({
    //     forecast: 'It is snowing',
    //     location: 'Philadelphia'
    // });
    if(!req.query.address){
        return res.send({
            error: 'Please provide a search address',
        });
    };

    // res.send({
    //     forecast: 'It is snowing',
    //     location: 'Boston',
    //     address: req.query.address
    // });
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
         return res.send(error);
        }
       forecast(latitude, longitude, (error, forecastData) => {
        if(error){
          return res.send(error);
        }
        res.send({
            forecast: forecastData,
            location,
            address: req.query.address
        })
      });
    })
});

// app.get('/help/*', (req, res) => {
//     res.render(('404'), {
//         pagetitle: '404',
//         title: '404',
//         name: 'Kamelot',
//         errorText: 'Help article not found'
//     });
// });

app.get('*', (req, res) => {
    res.render(('404'), {
        pagetitle: '404',
        title: '404',
        name: 'Kamelot',
        errorText: 'Page not found'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});