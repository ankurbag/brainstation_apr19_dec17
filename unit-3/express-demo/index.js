const express = require('express');
const app = express();

//
// Demo #1: Simple route
//
// app.get('/', (_req, res) => {
//     console.log('Received a GET request to /');
//     res.send('Hey, here is your response');
// });


//
// Demo #2: Route with several HTTP methods
//
// app.route('/students')
//     .get((req, res) => {
//         // Load the whole list of students
//         res.send('Heres a list of all the students');
//     })
//     .post((req, res) => {
//         // Push a new student into an array
//         res.send('Added a new student to the list');
//     })
//     .put((req, res) => {
//         // Edit a certain student object
//         res.send('Edited the student object');
//     });


//
// Demo #3: Practical API example!
//

// Mock data
const shoes = [
    { id: '001', brand: 'Converse', model: 'The blue one', color: 'blue' },
    { id: '002', brand: 'Nike', model: 'The sporty one', color: 'white' },
    { id: '003', brand: 'Nike', model: 'The fancy one', color: 'red' },
    { id: '004', brand: 'Adidas', model: 'With the stripes', color: 'blue' },
    { id: '005', brand: 'New Balance', model: '2020 exclusive', color: 'black' }
];

// URL query example
app.get('/shoes', (req, res) => {
    console.log(req.query);

    let filteredShoes = shoes;

    // If the client requested a specific color, filter our array to just those shoes
    if (req.query.color) {
        filteredShoes = shoes.filter((shoe) => shoe.color === req.query.color);
    }

    // Respond with just the final array of shoes
    res.json(filteredShoes); 
});

// URL params example
app.get('/shoes/:shoeId', (req, res) => {
    console.log(req.params);

    // Find the individual shoe that was requested
    const individualShoe = shoes.find((shoe) => shoe.id === req.params.shoeId);

    // If it exists, respond with just that individual shoe
    // Else respond with a 404 Not Found
    if (individualShoe) {
        res.json(individualShoe);
    } else {
        res.status(404).send('Shoe not found');
    }
});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
