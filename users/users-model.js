const db = require('../data/dbConfig.js')

module.exports = {
	insert,
	getAll
}

// async function add(user) {
// 	const [id] = await db('users').insert(user)
// 	return findById(id)
// }

// function findById(id) {
// 	return db('users')
// 		.where({ id })
// 		.first()
// }

async function getAll() {
	return db('users')
}
function insert(user) {
	return db('users').insert(user)
}
