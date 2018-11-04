const mongoose = require('mongoose');
const movieSchema = require('./movieSchema');

const userSchema = new mongoose.Schema({
    name: {
    	type: String,
    	required: true
    },
    watchList: [Movie.schema],
    favMovies: [Movie.schema],
    ownedMovies: [Movie.schema]
})

module.exports = mongoose.model('User', userSchema);