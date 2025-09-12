const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public')); // or wherever your CSS files are located

// Routes
app.get('/', (req, res) => {
  res.render('home'); // renders views/home.ejs
});

app.get('/about', (req, res) => {
  res.render('about'); // renders views/about.ejs
});

app.get('/laws', (req, res) => {
  res.render('laws');
});

app.get('/issues', (req, res) => {
  res.render('issues');
});

app.get('/stakeholders', (req, res) => {
  res.render('stakeholders');
});

app.get('/solutions', (req, res) => {
  res.render('solutions');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
