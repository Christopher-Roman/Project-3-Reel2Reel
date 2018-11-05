const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')
const fetch = require('isomorphic-fetch');
// const User = require('/models/user')


// This is the show route for the user's profile. It will display all of the movies
// that the user has in all of their lists of movies.
router.get('/', async (req, res) => {
	try {
		const movies = await fetch('http://api-public.guidebox.com/v2/shows/6959?api_key=7eec0384545005656d8702d02413111dbd7d6f1b');
        const moviesJson = await movies.json();
        JSON.stringify(moviesJson);
        console.log(moviesJson, '<------------jsonified');
		res.send(moviesJson);
        // return moviesJson;
		
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


