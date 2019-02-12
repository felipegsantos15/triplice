var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
});
connection.connect();

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

