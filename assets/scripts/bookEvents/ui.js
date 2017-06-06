// const $signUpUI = $('#signUpMessage')
// // const $signInUI = $('#signInMessage')
const $message = $('#message')
const booksTable = require('../templates/table-of-books.handlebars')

const limitBooksToCurrentUser = function (data) {
  const userOnlyData = []
  data.forEach((e) => { if (e.editable) { userOnlyData.push(e) } })
  return userOnlyData
}

const onCreateBookSuccess = function (response) {
  $message.text('That worked! You made a book... next up we gotta show it ')
}

const getBooksSuccess = function (response) {
  $('.book-tables').remove()
  $message.text('Check out the books below! ')
  const dataForHandlebars = {}
  dataForHandlebars.books = limitBooksToCurrentUser(response.books)
  const booksHTML = booksTable(dataForHandlebars)
  console.log(response)
  $('.footer').prepend(booksHTML)
}

const deleteGoalSuccess = function (response) {
  $message.text('Nobody likes that book anyway ')
}

const onError = function (response) {
  $message.text('That bombed...as a devolper I have determined it was user error :) ')
}

const updateBookSucess = function (response) {
  $message.text('Update that book club fool!')
    $('.book-update-form').remove()
}

module.exports = {
  onCreateBookSuccess,
  onError,
  getBooksSuccess,
  deleteGoalSuccess,
  updateBookSucess
}
