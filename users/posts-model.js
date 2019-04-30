const db = require('../data/dbConfig.js')

module.exports = {
  getAll,
  insert,
}

async function insert(post) {
  await db('posts').insert(post)
}

async function getAll() {
  return db('posts')
}


