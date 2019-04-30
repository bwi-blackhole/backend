// Update with your config settings.

/* need this or get "no pg_hba.conf entry for host" error */
const pg = require('pg');
pg.defaults.ssl = true;
// npx knex migrate:latest --env production

module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './data/blackhole.db3'
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done)
			}
		},
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	},
	production: {
		client: 'pg',
		 /* process.env.DATABASE_URL || */ 
		connection: 'postgres://cgukeenlsiokhh:4847c39244669435beb3e9c4dadcecf01db57b10fddd1d950d33a72d0212f1e9@ec2-174-129-208-118.compute-1.amazonaws.com:5432/d1vlkm64fr653c',
		ssl: true,
		pool: {
		  min: 2,
		  max: 50,
		},
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},
	},
	testing: {
		// testing object can be any name you choose
		client: 'sqlite3',
		connection: {
			filename: './data/test.db3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	}
}
