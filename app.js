// app.js
const express = require('express');
const app = express();
const path = require('path');

// ------------------------------
// Set up view engine
// ------------------------------
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ------------------------------
// Serve static files from 'public' folder
// ------------------------------
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------
// Routes
// ------------------------------

// Home page
app.get('/', (req, res) => {
    res.render('home');
});

// About page
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/privacy-law', (req, res) => {
    res.render('privacy-law'); // make sure the file name matches views/privacy-law.ejs
});



app.get('/issues', (req, res) => {
    res.render('issues');  // this must match your EJS filename
});



// Stakeholders page
app.get('/stakeholders', (req, res) => {
    res.render('stakeholders');
});

// Solution page
app.get('/solution', (req, res) => {
    res.render('solution');
});

// ------------------------------
// Handle 404 errors
// ------------------------------
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// ------------------------------
// Start the server
// ------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
