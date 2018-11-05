const express = require('express');

const router = express.Router();


const Movie = require('../models/movie-controller');

	router.get('/', async (req, res)=>{
		console.log(req.body, '<--------------req.body');
	})