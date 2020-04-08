const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : process.env.DB_HOST,
        user : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DATABASE
    }
});

mysqlAcess = {
	insertTemplate: async (template) => {
		try {
            return await knex(process.env.TABLE_NAME).insert(template);
		} catch (error) {
            console.log(error)
			throw error;
		}
	}
}

module.exports = mysqlAcess;

