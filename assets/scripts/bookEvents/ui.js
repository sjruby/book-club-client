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
  $message.text('Check out the books below! ')
  const dataForHandlebars = {}
  dataForHandlebars.books = limitBooksToCurrentUser(response.books)
  const booksHTML = booksTable(dataForHandlebars)
  console.log(response)
  $('.footer').prepend(booksHTML)
}

const onError = function (response) {
  $message.text('That bombed...as a devolper I have determined it was user error :) ')
}


module.exports = {
  onCreateBookSuccess,
  onError,
  getBooksSuccess
}
