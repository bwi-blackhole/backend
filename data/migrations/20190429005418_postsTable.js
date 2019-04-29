exports.up = function(knex, Promise) {
	return knex.schema.createTable('posts', tbl => {
		tbl.increments()
		tbl.string('title').notNullable()
		tbl.text('body').notNullable()
		tbl.integer('likes')
		tbl.timestamps(true, true)
		tbl.integer('creator_id').notNullable()
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableExists('posts')
}
