const express = require('express');
const router = express.Router();
const User = require('../models/user')


// This is the show route for the user's profile. It will display all of the movies
// that the user has in all of their lists of movies.
router.get('/', async (req, res, next) => {
	console.log(req.body, ' this is req.body for get all');
	try {
		const user = await User.find()
		res.json({
			status: 200,
			data: displayWatchList
			})
			data1: displayWatchList, 
			data2: displayFavMovies, 
			data3: displayOwnedMovies
		})

	} catch(err) {
		console.log(err);
	}
})

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


