const store = require('../store.js')
const config = require('../config.js')

const createBook = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiOrigins.production + '/books',
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: data
  })
}

const getBooks = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigins.production + '/books',
    headers: {
      Authorization: 'Token token=' + store.store.token
    }
  })
}

module.exports = {
  createBook,
  getBooks
}
