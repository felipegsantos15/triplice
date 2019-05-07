const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'q1w2e3',
    database : 'pontal_admin'
  }
});

mysqlAcess = {
	insertTemplate: (template) => {
		return new Promise ((resolve, reject) => {
			connection.query(`INSERT INTO ${process.env.TABLE_NAME} SET ?`, template, function (error, results, fields) {
			  if (error) {
				  connection.end();
				  return reject(error);
			  }
			  return resolve(true);
			});
		})
	}
}

module.exports = mysqlAcess;

