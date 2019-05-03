const jwt = require('jsonwebtoken')
const jwtKey = require('../config/secrets.js')
const db = require('../data/dbConfig.js')

module.exports = {
	add,
	authenticate,
	find,
	findBy,
	getAll,
	insert
}

async function add(user) {
	const [id] = await db('users').insert(user)
	return findById(id)
}

function find() {
	return db('users').select('id', 'username', 'password')
}

function findBy(filter) {
	return db('users').where(filter)
}

function findById(id) {
	return db('users')
		.where({ id })
		.first()
}

async function getAll() {
	return db('users')
}

async function insert(user) {
	return db('users')
		.insert(user)
		.return(user)
}

function authenticate(req, res, next) {
	const token = req.get('Authorization')

	if (token) {
		jwt.verify(token, jwtKey, (err, decoded) => {
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
