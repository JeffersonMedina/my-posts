'use strict';

require('dotenv').config()

const PORT = process.env.NODE_PORT;
// const HOST = 0.0 .0 .0;
// const HOST = process.env.NODE_HOST;

const express = require('express');
// const bodyParser = require("body-parser");
const userRoutes = require('./routes/users.route');

// App
const app = express();

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);