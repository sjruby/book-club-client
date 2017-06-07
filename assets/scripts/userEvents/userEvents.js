const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const bookEvents = require('../bookEvents/bookEvents')
const welcomePage = require('../templates/welcomePage.handlebars')
const allClubsPage = require('../templates/allClubs.handlebars')
const getStartedPage = require('../templates/getStarted.handlebars')
const newBookForm = require('../templates/createNewClub.handlebars')
const changePWForm = require('../templates/changePWForm.handlebars')
const about = require('../templates/about.handlebars')

const onGetStartedClick = function () {
  $('.root-column').children().remove()
  const getStartedHTML = getStartedPage()
  $('.root-column').append(getStartedHTML)
}

const onAboutClick = function () {
  console.log('What do you need to know about')
  $('.root-column').children().remove()
  const aboutHTML = about()
  $('.root-column').append(aboutHTML)
}
const onHomeLinkClick = function () {
  $('.root-column').children().remove()
  const welcomeHTML = welcomePage()
  $('.root-column').append(welcomeHTML)
}

const onAllClubsClick = function () {
  $('.root-column').children().remove()
  const allClubsHTML = allClubsPage()
  $('.root-column').append(allClubsHTML)
}

const onYourClubsClick = function () {
  $('.root-column').children().remove()
  bookEvents.getBooks()
}

const onMakeClubClick = function () {
  console.log('What do you need to make clubs for anyway!')
    $('.root-column').children().remove()
  const newBookHTML = newBookForm()
  $('.root-column').append(newBookHTML)
}

const onChangePWClick = function() {
  console.log("test PW CHange")
  $('.root-column').children().remove()
  const changePWHTML = changePWForm()
  $('.root-column').append(changePWHTML)
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
  // console.log('change PW runs....')
  api.changePassword(data)
    .then(ui.onChangePWSuccess)
    .catch(ui.onError)
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
  onYourClubsClick,
  onChangePWClick,
  onAboutClick,
  onMakeClubClick
}
