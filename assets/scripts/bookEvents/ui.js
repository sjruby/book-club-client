// const $signUpUI = $('#signUpMessage')
// // const $signInUI = $('#signInMessage')
const $message = $('#message')
const store = require('../store')

const onCreateBookSuccess = function (response) {
  $message.text('That worked! You made a book... next up we gotta show it ')
}

const getBooksSuccess = function (response) {
  $message.text('Check out the books below! ')
  console.log(response)
}

const onError = function (response) {
  $message.text('That bombed...as a devolper I have determined it was user error :) ')
}


module.exports = {
  onCreateBookSuccess,
  onError,
  getBooksSuccess
}
