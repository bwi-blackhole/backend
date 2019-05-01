const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')

module.exports = {
	generateToken,
	authenticate
}

function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username
		//name: user.name,
		//roles: ['admin', 'regularUser'] //should come from database
		// ...otherData
	}

	const options = {
		expiresIn: '45m'
	}
	return jwt.sign(payload, secrets.jwtSecret, options)
}

function authenticate(req, res, next) {
	const token = req.get('Authorization')

	if (token) {
		jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
			if (err) return res.status(401).json(err)

			req.decoded = decoded

			next()
		})
	} else {
		return res.status(401).json({
			error: 'No token provided, must be set on the Authorization Header'
		})
	}
}
