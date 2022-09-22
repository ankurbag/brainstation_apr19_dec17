const express = require('express');
const app = express();


console.log('This is Server!');

app.get('/', (req, res) => {
    res.send('Hello World! This is the First API!');
})

app.listen('8080',() => {
    console.log('Server is listening....');
})

