const express = require('express')
const server = express()

// server.get('/api', (req, res) => {
// 	res.status(200).json({ message: 'Server is running!' })
// })

// GET
server.get('/api', (req, res) => {
	users
		.getAll()
		.then(users => {
			res.status(200).json(users)
		})
		.catch(res.status(500).json({ error: 'could not retrieve users!' }))
})

// POST
server.post('/', (req, res) => {
	const newUser = req.body
	if (newUser.username && newUser.password) {
		users
			.insert(newuser)
			.then(ids => {
				res.status(201).json({ ids })
			})
			.catch(error => {
				res.status(500).json({ error: 'unable to create new user' })
			})
	} else {
		res
			.status(422)
			.json({ error: 'please provide username, password and email' })
	}
})

module.exports = server
