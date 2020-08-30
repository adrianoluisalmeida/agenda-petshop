const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'docker',
  database: 'graphql',
  connectionLimit: 10,
  multipleStatements: true
})

module.exports = conexao
