//Importing the required modules
const express = require('express')
const cors = require('cors')
const session = require('express-session')

//Starting the http server
const app = express()
app.use(cors({ credentials: true, origin: true }))

// View engine
app.set('view engine', 'ejs')

const passport = require('passport');
require('./middleware/config_passport')

app.use(session({
    secret: "shh",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

// Routes
const Routes = require('./routes')
app.use('/', Routes)


//Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));