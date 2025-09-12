const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/law', (req, res) => {
    res.render('law');
});

app.get('/issue', (req, res) => {
    res.render('issue');
});

app.get('/stakeholders', (req, res) => {
    res.render('stakeholders');
});

app.get('/solution', (req, res) => {
    res.render('solution');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});