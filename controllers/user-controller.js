const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/', async (req, res) => {
	try {
		const foundUser = await User.findOne({username: req.session.username })
		res.json(foundUser)
	}catch(err) {
		console.log(err);
	}
})

module.exports = router;
