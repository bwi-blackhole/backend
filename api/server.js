const express = require('express')

const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('../auth/auth-router.js')
const Users = require('../users/users-model.js')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
	res.status(200).json({ message: 'Server is running!' })
})

// GET
server.get('/', (req, res) => {
	Users.getAll()
		.then(users => {
			res.status(200).json(users)
		})
		.catch(() => res.status(500).json({ message: 'Unable to retrieve users' }))
})

module.exports = server
