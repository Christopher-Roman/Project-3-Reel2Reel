const mongoose = require('mongoose');
const movieSchema = require('./movieSchema');

const userSchema = new mongoose.Schema({
    name: String,
    watchList: [movieSchema],
    favMovies: [movieSchema],
    ownedMovies: [movieSchema]
})

module.exports = mongoose.model('User', userSchema);