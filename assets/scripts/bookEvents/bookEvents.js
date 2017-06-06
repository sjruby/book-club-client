const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const $message = $('#message')

const getBooks = function () {
  api.getBooks()
    .done(ui.getBooksSuccess)
    .catch(ui.onError)
}

const onCreateBook = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.createBook(data)
    .done(ui.onCreateBookSuccess)
    .done(getBooks)
    .catch(ui.onError)
}

const onDeleteBook = function (event) {
  event.preventDefault()
  const id = $(event.target).parents('tr').attr('data-id')

  api.deleteBook(id)
    .done(ui.deleteGoalSuccess)
    .done(getBooks)
    .catch(ui.failure)
}

const onModifyBook = function (event) {
  event.preventDefault()
  const id = $(event.target).parents('div').attr('data-id')
  const data = getFormFields(this)

  data.id = id
  if(data.book.title === "") {
    $message.text('come on at least enter a title for the book club! ')
    return
  }

  api.updateBook(data)
    .done(ui.updateBookSucess)
    .done(getBooks)
}

const onLoadUpdateForm = function (event) {
  event.preventDefault()
  $('.book-update-form').remove()
  const bookID = $(event.target).parents('tr').attr('data-id')
  api.getBook(bookID)
    .done(ui.onLodadUpdateFormSucess)
}

module.exports = {
  onCreateBook,
  getBooks,
  onDeleteBook,
  onModifyBook,
  onLoadUpdateForm
}
