const conexao = require('../conexao')

const executaQuery = (query) => {
  return new Promise((resolve, reject) => {
    conexao.query(query, (erro, resultados, campos) => {
      console.log('executou query')
      
      if (erro) {
        reject(error)
      } else {
        resolve(resultados)
      }
    })
  })
}

module.exports = executaQuery
