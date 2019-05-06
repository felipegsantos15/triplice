var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'q1w2e3',
  database : 'pontal_admin'
});
connection.connect();

mysqlAcess = {
	insertTemplate: (template) => {
		return new Promise ((resolve, reject) => {
			connection.query(`INSERT INTO interactive_link_template SET ?`, template, function (error, results, fields) {
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

