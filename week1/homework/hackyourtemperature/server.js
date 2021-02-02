const express = require('express');
const expressHndlbrs = require('express-handlebars');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    res.send('hello from backend to frontend!');
});

app.listen(3000);