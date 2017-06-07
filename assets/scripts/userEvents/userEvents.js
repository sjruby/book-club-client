const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const bookEvents = require('../bookEvents/bookEvents')
const welcomePage = require('../templates/welcomePage.handlebars')
const allClubsPage = require('../templates/allClubs.handlebars')
const getStartedPage = require('../templates/getStarted.handlebars')
const newBookForm = require('../templates/add-book-template.handlebars')

const onGetStartedClick = function () {
  console.log('found it')
  $('.root-column').children().remove()
  const getStartedHTML = getStartedPage()
  $('.root-column').append(getStartedHTML)
}

const onHomeLinkClick = function () {
  console.log('found HOME')
  $('.root-column').children().remove()
  const welcomeHTML = welcomePage()
  $('.root-column').append(welcomeHTML)
}

const onAllClubsClick = function () {
  console.log('Why do you want to see all CLUBS')
  $('.root-column').children().remove()
  const allClubsHTML = allClubsPage()
  $('.root-column').append(allClubsHTML)
}

const onYourClubsClick = function () {
  console.log('trying to find your clubs')
  $('.root-column').children().remove()
  const newBookHTML = newBookForm()
  $('.root-column').append(newBookHTML)
  bookEvents.getBooks()
}

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('its connected!')
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .done(ui.onSignInSuccess)
    .done(bookEvents.getBooks)
    .catch(ui.onError)
}

const onChangePW = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.onChangePWSuccess)
    .catch(ui.onPWError)
}

const onSignOut = function (event) {
  event.preventDefault()

  console.log("You tried to sign out")
  api.signOut()
    .done(ui.signOutSuccess)
    .catch(ui.onError)
}

const onCloseModal = function () {
  $('#myForm')[0].reset()
  $('#change-pw')[0].reset()
  $('#newGameMessage').text('')
  $('#changePWMessage').text('')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePW,
  onSignOut,
  onCloseModal,
  onGetStartedClick,
  onHomeLinkClick,
  onAllClubsClick,
  onYourClubsClick
}
