exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('messages')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('messages').insert([
				{
					id: 1,
					user_id: 2,
					message: 'snowing day....sucks',
					delete_at: '2019-05-03 12:00:00'
				},
				{
					id: 4,
					user_id: 3,
					message: 'testing 2',
					delete_at: '2019-05-03 12:00:00'
				},
				{
					id: 3,
					user_id: 7,
					message: 'testing 3',
					delete_at: '2019-05-03 12:00:00'
				}
			])
		})
}
