exports.up = function(knex, Promise) {
	return knex.schema.createTable('posts', tbl => {
		tbl.increments()
		tbl.string('message').notNullable()

		tbl
			.integer('user_id')
			.notNullable()
			.unsigned()
			.references('id')

		tbl.string('delete_at')
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('posts')
}
