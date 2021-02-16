const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');

// const API_KEY = require('./sources/keys.json').API_KEY;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handlebars middlevare
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

// Index route
app.get('/', (req, res) => {    
    res.render('./index');
});

// Post route
app.post('/weather', (req, res) => {
    const cityName = req.body.cityName;

    const API_KEY = require('./sources/keys.json').API_KEY;
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`;
    
    axios.get(endpoint)
    .then(apiResponseData => {
        if (apiResponseData.status === 200) {
            const cityNameUpperCase = cityName.charAt(0).toUpperCase() + cityName.slice(1);
            const temp = apiResponseData.data.main.temp;

            res.render('./index', { 
                weatherText : `The temperature in ${cityNameUpperCase} is ${temp} °C!`
            });
        };
    })
    .catch(err => {
        res.status(400);
        res.render('./index', { weatherText: "City is not found!" });
    });
});

app.listen(3000);