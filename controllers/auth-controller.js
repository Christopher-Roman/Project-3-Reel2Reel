const express = require('express');
const router = express.Router();
const User = require('../models/user')

// register
router.post('/register', async (req, res) => {
	try {
		const newUser = {};
		newUser.name = req.body.name;
		newUser.username = req.body.username;
		newUser.password = req.body.password;
		newUser.watchList = [];
		newUser.favMovies = [];
		newUser.ownedMovies = [];

		console.log(newUser);

		// TODO: test to see if a user with that username exists

		const user = await User.create(newUser);
		

		console.log(user);
		
		req.session.username = req.body.username;
		req.session.logged = true;
		

		res.json({
			status: 200,
			data: user
		})
	} catch(err) {
		res.send(err)
	}
})

// login route  POST /login -- 
	// retrieve user with the username in req.body, set session logged in with that user
router.post('/login', async (req, res) => {
	try {
		console.log(req.body, "this is req.body");
		const findUser = await User.find({username: req.body.loginUsername})
		console.log(findUser, "this is the user we found");
		req.session.username = req.body.loginUsername;
		req.session.logged = true;
		console.log(req.session);
		res.json({
			status: 200,
			data: findUser
		})
	} catch(err) {
		res.send(err)
	}
})


module.exports = router;