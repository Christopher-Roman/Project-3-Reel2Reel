const mongoose = require('mongoose');
const Movie = require('./movie');

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
    name: {
    	type: String,
    	required: true
    	},
    watchList: [Movie.schema],
    favMovies: [Movie.schema],
    ownedMovies: [Movie.schema]
})

module.exports = mongoose.model('User', userSchema);