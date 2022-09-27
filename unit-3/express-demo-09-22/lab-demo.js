// Step 1 : Import and Initialize Express
const express = require('express');
const app = express();
const ingredients = ['rice noodles', 'shrimp', 'peanuts', 'a scrambled egg', 'bean sprouts'];

// Routes
app.get('/famousdish', (req, response) => {
    response.send('Pad thai');
});

app.get('/ingredients', (req, response) => {
    response.json(ingredients);
});

app.get('/ingredients/:ingredient', (req, response) => {
    const ingredient = req.params.ingredient;
    console.log(ingredients.includes(ingredient));
    response.json(ingredients.includes(ingredient) ? `${ingredient} is in stock` : `${ingredient} is not in stock`);
});

app.post('/orders', (req, response) => {
    response.status(504);
    response.end('We are not taking orders at this time. Our service is temporarily down');
});

// Step 3 : To create a port and listen on port
app.listen('5000',() => {
    console.log('Server is listening.....')
})