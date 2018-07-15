const express = require('express');
const path = require('path');
const passport = require('passport'),
const auth = require('./auth');

const app = express();

auth(passport);
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.json({
      status: 'session cookie not set'
  });
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/'}),
    (req, res) => {}
);

// send back React's index.html file for all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);