const express = require('express');
const path = require('path');
const passport = require('passport');
const auth = require('./auth');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const app = express();

auth(passport);
app.use(passport.initialize());
app.use(cookieSession({
  name: 'session',
  keys: ['123']
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  if (req.session.token) {
      res.cookie('token', req.session.token);
      res.json({
          status: 'session cookie set'
      });
  } else {
      res.cookie('token', '')
      res.json({
          status: 'session cookie not set'
      });
  }
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('/');
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/youtube.readonly','https://www.googleapis.com/auth/plus.login']
}));

app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect:'/'}),
    (req, res) => {
        req.session.token = req.user.token;
        res.redirect('/');
    }
);




// send back React's index.html file for all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port);