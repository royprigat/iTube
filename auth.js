const fs = require("fs");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const keys = JSON.parse(fs.readFileSync("client_secret.json"));
const clientID = keys.web.client_id;
const clientSecret = keys.web.client_secret;
const redirectURI = keys.web.redirect_uris[0];

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: clientID,
            clientSecret: clientSecret,
            callbackURL: redirectURI
        }, (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};
