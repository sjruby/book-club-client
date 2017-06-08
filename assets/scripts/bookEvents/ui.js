// const $signUpUI = $('#signUpMessage')
// // const $signInUI = $('#signInMessage')
const $message = $('#message')
const modifyBookForm = require('../templates/modifyBookClub.handlebars')
const youBookClubs = require('../templates/yourClubs.handlebars')
const bookFailureTemplate = require('../templates/bookFailure.handlebars')
const createModifyTemplate = require('../templates/createModifyError.handlebars')

const resetBookForms = function () {
  $('.book-update-form').trigger('reset')
  $('#create-new-book').trigger('reset')
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

const bookFailure = function (response) {
  $('#book-message').remove()
  $('.sucess-message').remove()
  const failureHTML = bookFailureTemplate()
  $('.root-column').prepend(failureHTML)
}

const onCreateModifyError = function (response) {
  $('#book-message').remove()
  $('.sucess-message').remove()
  const failureHTML = createModifyTemplate()
  $('.root-column').prepend(failureHTML)
}

const updateBookSucess = function (response) {
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
  bookFailure,
  getBooksSuccess,
  updateBookSucess,
  onLodadUpdateFormSucess,
  onCreateModifyError
}
