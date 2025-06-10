
const express = require('express');
const path = require('path'); // Only declare this once at the top
const app = express();

// routes/gdpr.js
const express = require('express');
const somethingElse = require('some-module');  // <--- might be the problem
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is the GDPR compliance page.');
});

module.exports = router;


// Configure view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ... rest of your routes and middleware ...
app.use('/public', express.static('public'));

app.get('/test', (req, res) => {
  res.render('test', { currentPage: 'test' });
});

app.get('/home', (req, res) => {
  res.render('home'); // Looks for 'home.ejs' in /views
});

// Example route handler
app.get('/introduction', (req, res) => {
  res.render('introduction', { currentPage: 'introduction' });
});
app.get('/guidance', (req, res) => {
  res.render('guidance'); // assumes there's a guidance.ejs in the views folder
});
app.get('/privacy-laws', (req, res) => {
  res.render('privacy-laws'); // This looks for views/privacy-laws.ejs
});
app.get('/gdpr', (req, res) => {
  res.send('This is the GDPR compliance page.');
});

const gdprRouter = require('./routes/gdpr');
app.use('/gdpr', gdprRouter);


app.listen(process.env.port || 3000);
console.log('Running at Port 3000');node