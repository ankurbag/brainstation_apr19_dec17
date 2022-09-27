// Step 1 : Import and Initialize Express
const express = require("express");
const app = express();

console.log("Welcome to Backend!!");

// Step 2 : Create routes
// Syntax : app.HTTP_METHOD('ENDPOINT / url', callback method)

// Default Endpoints
app.get("/", (request, response) => {
  // Logic on the backend
  response.send("This is my first api");
});
app.post("/", (request, response) => {
  response.send("This is POST");
});
app.put("/", (request, response) => {
  response.send("This is PUT");
});
app.delete("/", (request, response) => {
  response.send("This is DELETE");
});

// WAY 1
// REST - Level 1 (URI) + HTTP Verbs = Level 2
// HRMS system
// ACtors : Employee, Manager, Attendance
// Employee Endpoints
// Get Employee
app.get("/employee", (request, response) => {
  // Logic on the backend
  response.send("GET employee API");
});
// Add a employee
app.post("/employee", (request, response) => {
  // Logic on the backend
  response.send("ADD employee API");
});
// Delete a employee
app.delete("/employee", (request, response) => {
  // Logic on the backend
  response.send("DELETE employee API");
});
// Update an employee
app.put("/employee", (request, response) => {
  // Logic on the backend
  response.send("GET employee API");
});

// WAY 2
app
  .route("/employee")
  .get((request, response) => {
    // Logic on the backend
    response.send("GET employee API");
  })
  .post((request, response) => {
    // Logic on the backend
    response.send("ADD employee API");
  })
  .put((request, response) => {
    // Logic on the backend
    response.send("GET employee API");
  })
  .delete((request, response) => {
    // Logic on the backend
    response.send("DELETE employee API");
  });

// REQUEST
/*app.get("/shoes", (request, response) => {
  // Logic on the backend
  console.log(request);
  response.send("GET Shoes API");
});*/


// :varname in path
app.get("/shoes/:shoeid", (request, response) => {
    // Logic on the backend
    console.log(request.params);
    const shoeId = request.params.shoeid;
    // Query 
    console.log(request.query);
    response.send("GET Shoes API by shoe ID "+shoeId);
  });


// RESPONSE DEMO
app.get("/shoes", (request, response) => {
    // Logic on the backend
    console.log(response);
    // SEND
    response.status(500);
    response.send("GET Shoes API RESPONSE DEMO text/html OUTPUT");
  });

app.get("/shoesJSON", (request, response) => {
    // Logic on the backend
    console.log(response);
    // JSON
    response.json("GET Shoes API RESPONSE DEMO JSON OUTPUT");
  });

app.get("/shoesRedirect", (request, response) => {
    // Logic on the backend
    console.log(response);
    // JSON
    response.redirect('http://www.google.com');

  // Login
     //Success : redirect to home
     // Error : error page
  });



// Step 3 : To create a port and listen on port
app.listen("5000", () => {
  console.log("Server is listening.....");
});
