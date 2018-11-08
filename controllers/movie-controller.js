const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Movie = require('../models/movie')

// search route
router.get('/search', async (req, res) => {
	console.log('Route is being hit');
	// req.query
	console.log("---------------------------------");
	console.log(req.query);
	console.log("---------------------------------");
	try {
		console.log("Hi Daddy-o")
		const searchQuery = req.query.searchTerm
		console.log('http://api-public.guidebox.com/v2/search?api_key=7eec0384545005656d8702d02413111dbd7d6f1b&type=movie&field=title&query=' + searchQuery)
		const movies = await fetch('http://api-public.guidebox.com/v2/search?api_key=7eec0384545005656d8702d02413111dbd7d6f1b&type=movie&field=title&query=' + searchQuery);
        console.log(movies)
        const moviesJson = await movies.json();
        JSON.stringify(moviesJson);
        console.log(moviesJson, '<------------jsonified');
		res.json(moviesJson);

	} catch(err){
		res.json(err)
	}
})

// This is the post route to add a new movie to the user's lists depending
// on which box is checked. I think there will be a way to change this so it won't
// require a checkbox. We can just use a specific link to to add it to the right
// list.

// each route POST or /whateverlist/:id
// does this exist?
// if not create it
// push into whatever

// Watchlist POST Route
router.post('/watchList/:id', async (req, res, next) => {
	// Creating a new movie Object from req.body
	const newMovie = {};
	newMovie.title = req.body.title;
	newMovie.movieId = req.body.movieId;
	newMovie.releaseDate = req.body.releaseDate;
	newMovie.img = req.body.img

	// Finding out if the movie you are trying to add already exists
	const foundMovie = await Movie.findOne({movieId: newMovie.movieId})
	// Finding the user that we are trying to add the movie to
	const foundUser = await User.findOne({username: req.session.username})
	console.log(foundUser);
	// Logic to create the new movie if it doesn't exist or add it form the db
	// to the current user if it does exist
	if(!foundMovie){
		console.log(newMovie);
		const movieToCreate = await Movie.create(newMovie)
		res.json(movieToCreate)
		foundUser.watchList.push(movieToCreate)
		await foundUser.save()
	} else {
		foundUser.watchList.push(foundMovie);

		await foundUser.save();
		res.json(foundMovie)
	}
})

// FavMovies POST Route
router.post('/favMovies/:id', async (req, res, next) => {
	// Creating a new movie Object from req.body
	const newMovie = {};
	newMovie.title = req.body.title;
	newMovie.movieId = req.body.movieId;
	newMovie.releaseDate = req.body.releaseDate;
	newMovie.img = req.body.img

	// Finding out if the movie you are trying to add already exists
	const foundMovie = await Movie.findOne({movieId: newMovie.movieId})
	// Finding the user that we are trying to add the movie to
	const foundUser = await User.findOne({username: req.session.username})
	console.log(foundUser);
	// Logic to create the new movie if it doesn't exist or add it form the db
	// to the current user if it does exist
	if(!foundMovie){
		console.log(newMovie);
		const movieToCreate = await Movie.create(newMovie)
		res.json(movieToCreate)
		foundUser.favMovies.push(movieToCreate)
		await foundUser.save()
	} else {
		foundUser.favMovies.push(foundMovie);
		await foundUser.save();
		res.json(foundMovie)
	}
})

// ownedMovies POST Route
router.post('/ownedMovies/:id', async (req, res, next) => {
	// Creating a new movie Object from req.body
	const newMovie = {};
	newMovie.title = req.body.title;
	newMovie.movieId = req.body.movieId;
	newMovie.releaseDate = req.body.releaseDate;
	newMovie.img = req.body.img

	// Finding out if the movie you are trying to add already exists
	const foundMovie = await Movie.findOne({movieId: newMovie.movieId})
	// Finding the user that we are trying to add the movie to
	const foundUser = await User.findOne({username: req.session.username})
	console.log(foundUser);
	// Logic to create the new movie if it doesn't exist or add it form the db
	// to the current user if it does exist
	if(!foundMovie){
		console.log(newMovie);
		const movieToCreate = await Movie.create(newMovie)
		res.json(movieToCreate)
		foundUser.ownedMovies.push(movieToCreate)
		await foundUser.save()
	} else {
		foundUser.ownedMovies.push(foundMovie);
		await foundUser.save();
		res.json(foundMovie)
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
// router.put('/:id', async (req, res, next) => {
// 	try {
// 		const newMovie = {
// 			title: req.body.title,
// 			genre: req.body.genre,
// 			runtime: req.body.runTime,
// 			director: req.body.director,
// 			img: req.body.img
// 		}
// 		const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, newMovie, {new: true})
// 		res.json({
// 			status: 200,
// 			data: updatedMovie
// 		})
// 	} catch(err) {
// 		res.send(err)
// 	}
// })

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
