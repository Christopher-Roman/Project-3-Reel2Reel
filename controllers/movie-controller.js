const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')
const User = require('../models/user')

// This is the post route to add a new movie to the user's lists depending
// on which box is checked. I think there will be a way to change this so it won't
// require a checkbox. We can just use a specific link to to add it to the right
// list.
router.post('/', async (req, res, next) => {
	try {
		console.log(req.body, ' This is req.body');
		const newMovie = {
			title: req.body.title,
			genre: req.body.genre,
			runtime: req.body.runTime,
			director: req.body.director,
			img: req.body.img
		}
		if(req.body.watchList === 'on') {
			const addWatchList = await Movie.create(newMovie);
			user.watchList.push(addWatchList)
			res.json({
				status: 200,
				data: addWatchList
			})
		} else if(req.body.favMovie === 'on') {
			const addFavMovie = await Movie.create(newMovie);
			user.favMovies.push(addFavMovie)
			res.json({
				status: 200,
				data: addFavMovie
			})
		} else if(req.body.ownedMovies === 'on') {
			const addOwnedMovie = await Movie.create(newMovie);
			user.ownedMovies.push(addOwnedMovie)
			res.json({
				status: 200,
				data: addOwnedMovie
			})
		}
	} catch(err) {
		console.log(err);
	}
})


module.exports = router;