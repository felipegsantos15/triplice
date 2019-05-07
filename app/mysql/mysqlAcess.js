const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : process.env.DB_HOST,
        user : 'root',
        password : 'q1w2e3',
        database : 'pontal_admin'
    }
});

mysqlAcess = {
	insertTemplate: async (template) => {
		try {
            return await knex(`interactive_link_template`).insert(template);
		} catch (error) {
            console.log(error)
			throw error;
		}
	}
}

module.exports = mysqlAcess;

