// Step 1 : Import and Initialize Express
const express = require("express");
const app = express(); // Step 1 : Import and Initialize Express
const ingredients = ['Noodles', 'Peanuts', 'Shrimps', 'Chicken', 'Pad Thai Sauce'];

// Step 2 Create Routes
// Ankur Bag's Thai Place Restaurant
app.get('/famousdish', (req , res) => {
    res.send('Famous dish : Pad THai');
});

// Ingrdtients
app.get('/ingredients', (req , res) => {
    // REturn ingredients
    // res.json(ingredients);

    // In object
    res.json({'ingredients' : ingredients } );
});

// Orders
app.post('/orders',(req, res) =>{
    res.status(503);
    res.send('We are not taking orders at this time. Our service is temporarily down')
});

// Step 3 :
app.listen("8080", () => {
  console.log("Server is listening.....");
});
