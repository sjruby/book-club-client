// const $signUpUI = $('#signUpMessage')
// // const $signInUI = $('#signInMessage')
const $message = $('#message')
const store = require('../store')
const showSignInUp = require('../templates/create-sign-sign-up.handlebars')
const pwSignOutForms = require('../templates/add-footer.handlebars')

const onSignUpSuccess = function (data) {
    $message.text('You have signed up, now login in below to get started!')
}

const onSignInSuccess = function (data) {
  store.store = data.user
  $('.welcome-div').remove()
  $message.text('You have signed in YAY!')
  const changePWHTML = pwSignOutForms()
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
  $('body').append(signInHTML)
  $('.footer').remove()
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
