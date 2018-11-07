const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
	console.log(req.body, ' This is session');
	try {
		req.session.logged = true;
		req.session.username = req.body.username;

		res.json({
			status: 200,
			data: 'Login Successful'
		})
	} catch(err) {
		res.send(err)
	}
})

module.exports = router;