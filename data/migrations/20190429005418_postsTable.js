exports.up = function(knex, Promise) {
	return knex.schema.createTable('messages', tbl => {
		tbl.increments()
		tbl.string('message').notNullable()

		tbl
			.integer('user_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('users')

		tbl.string('delete_at')

		tbl.timestamps(true, true)
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('posts')
}
