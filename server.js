require('es6-promise').polyfill();
require('isomorphic-fetch');
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')

// Models
const Movie = require('./models/movie')
const User = require('./models/user');

// Controllers
const movieController = require('./controllers/movie-controller')
const userController = require('./controllers/user-controller')
const authController = require('./controllers/auth-controller')

// Database
require('./db/db');

// Sessions
app.use(session({
  secret: 'Hope this works',
  resave: false,
  saveUninitialized: false
}))

// Middleware
//app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use(bodyParser.json())

// Cors
const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Routes
app.use('/user', userController)
app.use('/movie', movieController)
app.use('/auth', authController)

app.listen(process.env.PORT || 9000, () => {
	console.log('listening on port 9000');
})