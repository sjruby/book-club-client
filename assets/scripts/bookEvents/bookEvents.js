const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

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


module.exports = {
  onCreateBook,
  getBooks
}
