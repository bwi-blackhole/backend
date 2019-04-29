const router = require('express').Router()
const bcrypt = require('bcryptjs')
const tokenService = require('./token-service')

const Users = require('../users/users-model.js')

// for endpoints beginning with /api/auth

router.post('/register', (req, res) => {
	let user = req.body
	const hash = bcrypt.hashSync(user.password, 10) // 2 ^ n
	user.password = hash

	Users.add(user)
		.then(saved => {
			res.status(201).json(saved)
		})
		.catch(error => {
			res.status(500).json(error)
		})
})

router.post('/login', (req, res) => {
	let { username, password, email } = req.body

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				// create the token
				const token = tokenService.generateToken(user)
				res
					.status(200)
					.json({ message: `Welcome back ${user.username}!`, token })
			} else {
				res.status(401).json({ message: 'Invalid credentials' })
			}
		})
		.catch(error => {
			res.status(500).json(error)
		})
})
module.exports = router