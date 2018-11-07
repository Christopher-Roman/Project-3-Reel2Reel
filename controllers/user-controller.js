const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/', async (req, res) => {
	console.log("hit user get route");
	try {
		console.log(req.session, " this is req.session");
		const foundUser = await User.findOne({username: req.session.username })
		console.log(foundUser, "this is the user from user get route");
		res.json(foundUser)
	}catch(err) {
		console.log(err);
	}
})

module.exports = router;


