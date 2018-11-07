const express = require('express');
const router = express.Router();
const User = require('../models/user')
// const request = require('request')
// const apiKey = require('../apiKey')


// This will be our search request get call
// router.get('/', async (req, res, next) => {
// 	const searchPhrase = req.body.search
// 	const searchResult = await fetch('http://api-public.guidebox.com/v2/search?api_key=' + apiKey + '&type=movie&field=title&query=' + searchPhrase)
// })

// This is the post route to add a new movie to the user's lists depending
// on which box is checked. I think there will be a way to change this so it won't
// require a checkbox. We can just use a specific link to to add it to the right
// list.
router.post('/', async (req, res, next) => {
	res.send('hey')
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
			User.watchList.push(addWatchList)
			User.save()
			res.json({
				status: 200,
				data: addWatchList
			})
		} else if(req.body.favMovie === 'on') {
			const addFavMovie = await Movie.create(newMovie);
			user.favMovies.push(addFavMovie)
		 User.save()
			res.json({
				status: 200,
				data: addFavMovie
			})
		} else if(req.body.ownedMovies === 'on') {
			const addOwnedMovie = await Movie.create(newMovie);
			user.ownedMovies.push(addOwnedMovie)
		 User.save()
			res.json({
				status: 200,
				data: addOwnedMovie
			})
		}
	} catch(err) {
		console.log(err);
	}
})
// search route
router.get('/search', async (req, res) => {
	// req.query
	console.log("---------------------------------");
	console.log(req.query);
	console.log("---------------------------------");



	try {
		const searchQuery = req.query.searchTerm
		const movies = await fetch('http://api-public.guidebox.com/v2/search?api_key=7eec0384545005656d8702d02413111dbd7d6f1b&type=movie&field=title&query=' + searchQuery);
        const moviesJson = await movies.json();
        JSON.stringify(moviesJson);
        console.log(moviesJson, '<------------jsonified');
		res.json(moviesJson);

	} catch(err){
		res.json(err)
	}
})
// This will be the movie show route. Once we show it we can choose to edit it.
router.get('/:id', async (req, res, next) => {
	try {
		const foundMovie = await Movie.findById(req.params.id);
		res.json({
			status: 200,
			data: foundMovie
		})
	} catch(err) {
		res.send(err)
	}
})

// This will be the put route to edit movies
router.put('/:id', async (req, res, next) => {
	try {
		const newMovie = {
			title: req.body.title,
			genre: req.body.genre,
			runtime: req.body.runTime,
			director: req.body.director,
			img: req.body.img
		}
		const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, newMovie, {new: true})
		res.json({
			status: 200,
			data: updatedMovie
		})
	} catch(err) {
		res.send(err)
	}
})

// This will be our Delete Route
router.delete('/:id', async (req, res) => {
	try {
		const deletedMovie = await Movie.findByIdAndRemove(req.params.id)
		res.json({
			status: 200,
			data: deletedMovie
		})
	} catch(err) {
		res.send(err)
	}
})


module.exports = router;
