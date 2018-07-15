const express = require("express");
const path = require("path");
// const passport = require("passport");
// const auth = require("./auth");
// const cookieParser = require("cookie-parser");
// const cookieSession = require("cookie-session");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

// auth(passport);
// app.use(passport.initialize());
// app.use(cookieSession({ name: "session", keys: ["123"] }));
// app.use(cookieParser());

// app.get("/", (req, res) => {
//   if (req.session.token) {
//     res.cookie("token", req.session.token);
//   } else {
//     res.cookie("token", "");
//   }
// });

// app.get("/auth/google", passport.authenticate("google", {
//     scope: [
//       "https://www.googleapis.com/auth/plus.me",
//       "https://www.googleapis.com/auth/youtube.readonly"
//     ]
//   })
// );

// app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/" }),
//   (req, res) => {
//     req.session.token = req.user.token;
//     res.redirect("/");
//   }
// );

