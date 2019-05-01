const express = require('express')
const knex = require('knex')

const dbConfig = require('../knexfile')
const db = knex(dbConfig.development)

const Users = require('../users/users-model.js')
const tokenService = require('./token-service')

module.exports = server => {
	server.post('/postmessage', message) // post message
	server.get('/getmessages', messages) // get messages
	server.get('/getmessage/:id', messagesId) // get message by id
	server.put('/updatemessage/:id', updateMessage) // update message by id
	server.delete('/delmessage/:id', deleteMessage) // delete message by id
	server.get('/messages/users/:id', getUserMessages) // get messages for specific user
}

// Post message
function message(req, res) {
	const messages = req.body
	db.insert(messages)
		.into('messages')
		.then(ids => {
			res.status(201).json([messages.message, ids[0], messages.delete_at])
		})
		.catch(err => res.status(500).json(err))
}

// Get message
function messages(req, res) {
	db('messages')
		.then(messages => {
			console.log(messages)
			res.status(200).json(messages)
		})
		.catch(err => res.status(500).json(err))
}

// Get users by Id
function usersId(req, res) {
	const userId = req.params.id
	db('users')
		.where({ id: userId })
		.first()
		.then(message => {
			res.status(200).json(message)
		})
		.catch(error => {
			res.status(500).json(error)
		})
}

// Update message by Id
function updateMessage(req, res) {
	const updateChanges = req.body
	const { id } = req.params

	db('messages')
		.where({ id: id })
		.update(updateChanges)
		.then(count => {
			db('messages')
				.where({ id })
				.first()
		})
		.then(message => {
			res.status(200).json({ message: 'message updated' })
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

// Delete message by id
function deleteMessage(req, res) {
	const { id } = req.params

	db('messages')
		.where({ id })
		.del()
		.then(message => {
			res.status(200).json({ message: 'message deleted' })
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

// get user message
function getUserMessages(req, res) {
	const id = req.params.id
	db('messages')
		.where({ user_id: id })
		.then(messages => {
			console.log(messages)
			if (messages) {
				res.status(200).json(messages)
			} else {
				res.status(404).json({ message: 'ID not found!' })
			}
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

// get message by id
function messagesId(req, res) {
	const messagesId = req.params.id
	db('messages')
		.where({ id: messagesId })
		.first()
		.then(message => {
			res.status(200).json(message)
		})
		.catch(error => {
			res.status(500).json(error)
		})
}

// Restricted
function restricted(req, res, next) {
	const { username, password } = req.headers

	if (username && password) {
		Users.findBy({ username })
			.first()
			.then(user => {
				if (user && bcrypt.compareSync(password, user.password)) {
					next()
				} else {
					res.status(401).json({ message: 'Invalid Credentials' })
				}
			})
			.catch(error => {
				res.status(500).json(error)
			})
	} else {
		res.status(401).json({ message: 'Please provide creds.' })
	}
}
