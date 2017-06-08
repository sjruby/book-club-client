// const $signUpUI = $('#signUpMessage')
// // const $signInUI = $('#signInMessage')
const $message = $('#message')
const booksTable = require('../templates/table-of-books.handlebars')
const modifyBookForm = require('../templates/modifyBookClub.handlebars')
const youBookClubs = require('../templates/yourClubs.handlebars')

const resetBookForms = function() {
  $(".book-update-form").trigger('reset')
  $("#create-new-book").trigger('reset')
}
const limitBooksToCurrentUser = function (data) {
  const userOnlyData = []
  data.forEach((e) => { if (e.editable) { userOnlyData.push(e) } })
  return userOnlyData
}

const onCreateBookSuccess = function (response) {
  resetBookForms()
  $message.text('That worked! You made a book to club out on... next up we gotta show it ')
}

const compareUpdateDates = function (book1, book2) {
  return new Date(book2.updatedAt) - new Date(book1.updatedAt)
}

const getBooksSuccess = function (response) {
  $('.root-column').children().remove()
  const dataForHandlebars = {}
  dataForHandlebars.books = limitBooksToCurrentUser(response.books)
  console.log(dataForHandlebars.books)

  console.log(dataForHandlebars.books.sort(compareUpdateDates))

  const booksHTML = youBookClubs(dataForHandlebars)
  $('.root-column').append(booksHTML)
}

const deleteGoalSuccess = function (response) {
  $message.text('Nobody likes that book anyway ')
}

const onError = function (response) {
  $message.text('That bombed...as a devolper I have determined it was user error :) ')
}

const updateBookSucess = function (response) {
  $message.text('Updated that book club fool!')
    $('.book-update-form').remove()
    resetBookForms()
}

const onLodadUpdateFormSucess = function (result) {
  $('.root-column').children().remove()
  const modifyHTML = modifyBookForm({book: result.book})
  $('.root-column').append(modifyHTML)
  console.log(result)
  console.log(result.book.id)
}

module.exports = {
  onCreateBookSuccess,
  onError,
  getBooksSuccess,
  deleteGoalSuccess,
  updateBookSucess,
  onLodadUpdateFormSucess
}
