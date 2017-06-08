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

const onEveryoneElsesClubsClick = function () {
  $('.root-column').children().remove()
  bookEvents.getEveryoneElsesBooks()
}

const onAboutClick = function () {
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
  $('.root-column').children().remove()
  const newBookHTML = newBookForm()
  $('.root-column').append(newBookHTML)
}

const onChangePWClick = function () {
  $('.root-column').children().remove()
  const changePWHTML = changePWForm()
  $('.root-column').append(changePWHTML)
}

const onSignUp = function (event) {
  event.preventDefault()
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
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .done(ui.signOutSuccess)
    .catch(ui.onError)
}


module.exports = {
  onSignUp,
  onSignIn,
  onChangePW,
  onSignOut,
  onGetStartedClick,
  onHomeLinkClick,
  onAllClubsClick,
  onYourClubsClick,
  onChangePWClick,
  onAboutClick,
  onMakeClubClick,
  onEveryoneElsesClubsClick
}
