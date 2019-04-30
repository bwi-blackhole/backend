exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', tbl => {
		tbl.increments()

		tbl
			.string('username', 256)
			.notNullable()
			.unique()
		tbl.string('email', 256)

		tbl.string('password', 256).notNullable()
		tbl.string('firstName', 256)
		tbl.string('lastName', 256)
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableifExists('users')
}
