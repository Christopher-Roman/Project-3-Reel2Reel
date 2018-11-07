const express = require('express');
const router = express.Router();
const User = require('../models/user')


// This is the show route for the user's profile. It will display all of the movies
// that the user has in all of their lists of movies.


// This is the get route for the user's movies. It will got to a specific movie show page 
// to view it and there you will be able to make changes to it.
// router.get('/:id', async (req, res, next) => {
// 	try {
// 		const foundMovie = await User.
// 	} catch(err) {
// 		console.log(err);
// 	}
// })

module.exports = router;


