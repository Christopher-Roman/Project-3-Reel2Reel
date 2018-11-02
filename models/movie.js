const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    runtime: Number,
    director: String,
    img: String
})

module.exports = mongoose.model('Movie', movieSchema);