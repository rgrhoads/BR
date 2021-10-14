const express = require('express');
const path = require('path');
const axios = require('axios');
const router = require('./router.js');

let app = express();

const port = 3777;

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', router);

app.listen(port, function() {
  console.log(`Listening on Port: ${port}`);
});