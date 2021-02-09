const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');

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

    res.json({ cityName });
});

app.listen(3000);