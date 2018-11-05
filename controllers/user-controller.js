const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')


// This is the show route for the user's profile. It will display all of the movies
// that the user has in all of their lists of movies.
router.get('/', async (req, res, next) => {
	try {
		res.send('Did this work?')
		const displayWatchList = await User.watchList.find();
		const displayFavMovies = await User.favMovies.find();
		const displayOwnedMovies = await User.ownedMovies.find();

		res.json({
			status: 200,
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