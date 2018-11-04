const express = require('express');
const router = express.Router();
const User = require('../model/user')


// This is the show route for the user's profile. It will display all of the movies
// that the user has in all of their lists of movies.
router.get('/', async (req, res) => {
	try {
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

// This is the post route to add a new movie to the user's lists depending
// on which box is checked. I think there will be a way to change this so it won't
// require a checkbox. We can just use a specific link to to add it to the right
// list.
router.post('/', async (req, res) => {
	try {
		const newMovie = {
			title: req.body.title,
			genre: req.body.genre,
			runtime: req.body.runTime,
			director: req.body.director,
			img: req.body.img
		}
		if(req.body.watchList === 'on') {
			const addWatchList = await User.watchList.create(newMovie);
			res.json({
				status: 200,
				data: addWatchList
			})
		} else if(req.body.favMovie === 'on') {
			const addFavMovie = await User.favMovies.create(newMovie);
			res.json({
				status: 200,
				data: addFavMovie
			})
		} else if(req.body.ownedMovies === 'on') {
			const addOwnedMovie = await User.ownedMovies.create(newMovie);
			res.json({
				status: 200,
				data: addOwnedMovie
			})
		}
	} catch(err) {
		console.log(err);
	}
})

// This is the get route for the user's movies. It will got to a specific movie show page 
// to view it and there you will be able to make changes to it.
router.get('/:id', async (req, res) => {
	try {
		const foundMovie = await User.
	} catch(err) {

	}
})