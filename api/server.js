const express = require('express')
const server = express()
const helmet = require('helmet')
const Users = require('../users/users-model.js')

server.use(express.json())
server.use(helmet())

server.get('/api', (req, res) => {
	res.status(200).json({ message: 'Server is running!' })
})

// GET
// server.get('/', (req, res) => {
// 	db.getAll()
// 		.then(users => {
// 			res.status(200).json(users)
// 		})
// 		.catch(res.status(500).json({ error: 'could not retrieve users!' }))
// })

// POST
server.post('/register', (req, res) => {
	const newUser = req.body
	if (newUser.username && newUser.password) {
		Users.insert(newUser)
			.then(ids => {
				res.status(201).json({ ids })
			})
			.catch(err => {
				res.status(500).json({ error: 'unable to create new user' })
			})
	} else {
		res
			.status(422)
			.json({ error: 'please provide username, password and email' })
	}
})

module.exports = server
