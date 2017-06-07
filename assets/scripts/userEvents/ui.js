// const $signUpUI = $('#signUpMessage')
// // const $signInUI = $('#signInMessage')
const $message = $('#message')
const store = require('../store')
const showSignInUp = require('../templates/create-sign-sign-up.handlebars')
const pwSignOutForms = require('../templates/add-footer.handlebars')
const newBookForm = require('../templates/add-book-template.handlebars')
const signUpSuccessMessage = require('../templates/signUpSucess.handlebars')
const signedInNav = require('../templates/navSignedIn.handlebars')
const notSignedInNav = require('../templates/navNotSignedIn.handlebars')
const welcomePage = require('../templates/welcomePage.handlebars')
const changePWSucessMessage = require('../templates/changePWSucess.handlebars')


const resetUserForms = function () {
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
}

const onSignUpSuccess = function (data) {
  const successHTML = signUpSuccessMessage()
  $('#get-started').prepend(successHTML)
  resetUserForms()
}

const onSignInSuccess = function (data) {
  store.store = data.user
  resetUserForms()
  $('#not-signed-in-nav').remove()
  const signedInNavHTML = signedInNav()
  $('body').append(signedInNavHTML)
}

const onChangePWSuccess = () => {
  $('#change-pw-sucess').remove()
  const successHTML = changePWSucessMessage()
  $('#change-pw-form').prepend(successHTML)
  resetUserForms()
}

const signOutSuccess = () => {
  $('#signed-in-nav').remove()
  const notSignedInNavHTML = notSignedInNav()
  $('body').append(notSignedInNavHTML)
  $('.root-column').children().remove()
  const welcomePageHTML = welcomePage()
  $('.root-column').append(welcomePageHTML)
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
