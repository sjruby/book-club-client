const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const modifyBookForm = require('../templates/modify-book-club.handlebars')

const getBooks = function () {
  console.log("get books ran!")
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

  api.updateBook(data)
    .done(ui.updateBookSucess)
    .done(getBooks)
}

const onLoadUpdateForm = function (event) {
  event.preventDefault()
  $('.book-update-form').remove()
  const bookID = $(event.target).parents('tr').attr('data-id')
  const modifyHTML = modifyBookForm({id: bookID})
  $("body").append(modifyHTML)
}


module.exports = {
  onCreateBook,
  getBooks,
  onDeleteBook,
  onModifyBook,
  onLoadUpdateForm
}
