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

const deleteBook = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + '/books/' + id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    }
  })
}

const updateBook = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/books/' + data.id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: data
  })
}

module.exports = {
  createBook,
  getBooks,
  deleteBook,
  updateBook
}
