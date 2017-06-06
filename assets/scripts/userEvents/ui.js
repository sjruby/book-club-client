// const $signUpUI = $('#signUpMessage')
// // const $signInUI = $('#signInMessage')
const $message = $('#message')
const store = require('../store')
const showSignInUp = require('../templates/create-sign-sign-up.handlebars')
const pwSignOutForms = require('../templates/add-footer.handlebars')
const newBookForm = require('../templates/add-book-template.handlebars')


const resetUserForms = function () {
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
}

const onSignUpSuccess = function (data) {
    $message.text('You have signed up, now login in below to get started!')
    resetUserForms()
}

const onSignInSuccess = function (data) {
  store.store = data.user
  resetUserForms()
  $('.welcome-div').remove()
  $message.text('You have signed in YAY!')
  const changePWHTML = pwSignOutForms()
  const newBookHTML = newBookForm()
  $('body').append(newBookHTML)
  $('body').append(changePWHTML)
}

const onChangePWSuccess = () => {
  $message.text('You succesfully changed your PW...now play!')
    $('#changePW').modal('hide')
    $('#change-pw')[0].reset()
    $('#changePWMessage').text('')
}

const signOutSuccess = () => {
  $message.text('You left meeeeeee WHYYYYY')
  const signInHTML = showSignInUp()
  resetUserForms()
  $('body').append(signInHTML)
  $('.footer').remove()
  $('.add-a-book').remove()
}

const onError = function (response) {
  $message.text('That bombed...as a devolper I have determined it was user error :) ')
}

const onPWError = function() {
  $('#changePWMessage').text('That bombed...as a devolper I have determined it was user error :) ')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePWSuccess,
  signOutSuccess,
  onError,
  onPWError
}
