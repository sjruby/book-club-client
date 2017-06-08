const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const $message = $('#message')

const getBooks = function () {
  api.getBooks()
    .done(ui.getBooksSuccess)
    .catch(ui.bookFailure)
}

const onCreateBook = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.createBook(data)
    .done(getBooks)
    .catch(ui.onCreateModifyError)
}

const onDeleteBook = function (event) {
  event.preventDefault()
  const id = $(event.target).parents('div').attr('data-id')

  api.deleteBook(id)
    .done(getBooks)
    .catch(ui.bookFailure)
}

const onModifyBook = function (event) {
  event.preventDefault()
  const id = $(event.target).parents('div').attr('data-id')
  const data = getFormFields(this)

  data.id = id

  if (data.book.title === '') {
    $message.text('come on at least enter a title for the book club! ')
    return
  }

  api.updateBook(data)
    .done(ui.updateBookSucess)
    .done(getBooks)
    .catch(ui.onCreateModifyError)
}

const onLoadUpdateForm = function (event) {
  event.preventDefault()
  console.log('you found the funciton!')

  const bookID = $(event.target).parents('div').attr('data-id')
  api.getBook(bookID)
    .done(ui.onLodadUpdateFormSucess)
    .catch(ui.bookFailure)
}

module.exports = {
  onCreateBook,
  getBooks,
  onDeleteBook,
  onModifyBook,
  onLoadUpdateForm
}
