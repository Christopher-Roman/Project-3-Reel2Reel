const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
    	type: String,
    	required: true
    },
    movieId: {
        type: String,
        required: true
    },
    releaseDate: {
    	type: String,
    	required: true
    },
    img: {
    	type: String,
    	required: true
    },
})

module.exports = mongoose.model('Movie', movieSchema);