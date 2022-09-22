// Step 1 : Import and Initialize Express
const express = require('express');
const app = express();

console.log('Welcome to Backend!!');

// Step 2 : Create routes
// Syntax : app.HTTP_METHOD('ENDPOINT / url', callback method)
app.get('/', (request, response)=>{
    // Logic on the backend
    response.send('This is my first api');
});


// Step 3 : To create a port and listen on port
app.listen('5000',() => {
    console.log('Server is listening.....')
})