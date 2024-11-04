const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;

app.use(morgan('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // if your CSS is in the "public" folder

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Example of custom middleware
app.use((req, res, next) => {
    console.log("This is middleware");
    next();
});

// Root route
app.get('/', (req, res) => {
    res.send("Hello Harsh");
});

// About route that renders 'index.ejs'
app.get('/about', (req, res) => {
    res.render('index');
});

// Route to handle form data
app.post('/get-form-data', (req, res) => {
   console.log(req.body); // Correctly access req.body
   res.send('Data received'); // Send response to frontend
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
