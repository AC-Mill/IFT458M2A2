// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Instance of express
const app = express();

// Use 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({extended: false}));

// Set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

//Empty student array
let students = [];

// GET route from form
app.get('/', (req, res) => {
    // Render the form and pass in current student data
    res.render('index');
});

// POST route for forms
app.post('/calculate', (req, res) => {
    const {num1, num2} = req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1) - Number(num2);
    const product = Number(num1) * Number(num2);
    const quotient = Number(num1) / Number(num2);
    res.render('result', {sum, difference, product, quotient});
});

var port = 4000;

// Start Server on 3000 port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});