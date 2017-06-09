// const $signUpUI = $('#signUpMessage')
// // const $signInUI = $('#signInMessage')
const store = require('../store')
const signUpSuccessMessage = require('../templates/signUpSucess.handlebars')
const signedInNav = require('../templates/navSignedIn.handlebars')
const notSignedInNav = require('../templates/navNotSignedIn.handlebars')
const welcomePage = require('../templates/welcomePage.handlebars')
const changePWSucessMessage = require('../templates/changePWSucess.handlebars')
const failMessage = require('../templates/failureMessage.handlebars')

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
  $('#failure-message').remove()
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
  $('#failure-message').remove()
  $('.sucess-message').remove()
  const failureHTML = failMessage()
  $('.root-column').prepend(failureHTML)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePWSuccess,
  signOutSuccess,
  onError
}
