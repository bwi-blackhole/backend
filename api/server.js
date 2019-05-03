const express = require('express')

const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('../auth/auth-router.js')
const Users = require('../users/users-model.js')
const allOtherRoutes = require('../auth/routes.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
//server.use('/post', post)
allOtherRoutes(server)
//module.exports = server

// server.get('/', (req, res) => {
// 	res.status(200).json({ message: 'Server is running!' })
// })

// GET
<<<<<<< HEAD
// server.get('/api/users', (req, res) => {
// 	Users.getAll()
// 		.then(users => {
// 			res.status(200).json(users)
// 		})
// 		.catch(() => res.status(500).json({ message: 'Unable to retrieve users' }))
// })
=======
server.get('/users', (req, res) => {
	Users.getAll()
		.then(users => {
			res.status(200).json(users)
		})
		.catch(() => res.status(500).json({ message: 'Unable to retrieve users' }))
})
>>>>>>> 273f2f9bc2353d66eb709b5230363e589d206b14

module.exports = server
