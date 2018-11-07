const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.post('/', async (req, res) => {
	try {
		const newUser = {};
		newUser.name = req.body.name;
		newUser.username = req.body.username;
		newUser.password = req.body.password;
		newUser.watchList = [];
		newUser.favMovies = [];
		newUser.ownedMovies = [];
		console.log(newUser);
		const user = User.create(newUser);
		console.log(user);
		user.save();
		req.session.logged = true;
		req.session.username = req.body.username;

		res.json({
			status: 200,
			data: 'Login Successful'
		})
	} catch(err) {
		res.send(err)
	}
})

module.exports = router;