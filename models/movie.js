const movieSchema = new mongoose.Schema({
    title: {
    	type: String,
    	required: true,
    },
    genre: {
    	type: String,
    	required: true,
    },
    runtime: {
    	type: Number,
    	required: true,
    },
    director: {
    	type: String,
    	required: true,
    },
    img: {
    	type: String,
    	required: true,
    },
})

module.exports = mongoose.model('Movie', movieSchema);