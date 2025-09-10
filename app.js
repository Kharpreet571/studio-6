const express = require('express');
const path = require('path');
const app = express();

// Configure view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from 'public' directory
app.use('/public', express.static('public'));

// Define your routes
app.get('/', (req, res) => {
  res.render('home'); // Render home.ejs when accessing root URL
});

app.get('/test', (req, res) => {
  res.render('test', { currentPage: 'test' });
});

app.get('/home', (req, res) => {
  res.render('home'); // Alternative route to home
});

app.get('/introduction', (req, res) => {
  res.render('introduction', { currentPage: 'introduction' });
});

app.get('/guidance', (req, res) => {
  res.render('guidance');
});

app.get('/privacy-laws', (req, res) => {
  res.render('privacy-laws');
});

app.get('/gdpr', (req, res) => {
  res.render('gdpr', { currentPage: 'gdpr' }); // Removed duplicate page
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});