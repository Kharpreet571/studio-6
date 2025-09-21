
const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


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

app.get('/solution', (req, res) => {
    res.render('solution');
});


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
