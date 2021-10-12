const express = require('express');
const path = require('path');

let app = express();

const port = 3777;

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/test', (req, res) => {
  console.log('Endpoint Test Success!');
  res.sendStatus(200);
})

app.listen(port, function() {
  console.log(`Listening on Port: ${port}`);
});