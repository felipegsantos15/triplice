var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'q1w2e3',
  database : 'triplice'
});
connection.connect();

mysqlAcess = {
	insertTemplate: (template) => {
		return new Promise ((resolve, reject) => {
			connection.query('INSERT INTO templates SET ?', template, function (error, results, fields) {
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

