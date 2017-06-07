'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const userEvents = require('./userEvents/userEvents')
const bookEvents = require('./bookEvents/bookEvents')


$(() => {
  setAPIOrigin(location, config)
})

//  Nav bar Click handlers
$(document).on('click', '.getStartedNav', userEvents.onGetStartedClick)
$(document).on('click', '.home-link-nav', userEvents.onHomeLinkClick)
$(document).on('click', '.allClubsNav', userEvents.onAllClubsClick)
$(document).on('click', '.signOut', userEvents.onSignOut)
$(document).on('click', '.yourBookClubs', userEvents.onYourClubsClick)
$(document).on('click', '.changePW', userEvents.onChangePWClick)
$(document).on('click', '.aboutNav', userEvents.onAboutClick)

// User form click Handlers
$(document).on('submit', '#sign-up', userEvents.onSignUp)
$(document).on('submit', '#sign-in', userEvents.onSignIn)
$(document).on('submit', '#change-pw', userEvents.onChangePW)

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const closeBookUpdate = function() {
  $('.book-update-form').remove()
}
// Book form Click handlers
$(document).on('submit', '#create-new-book', bookEvents.onCreateBook)
$(document).on('submit', '#modify-book-club', bookEvents.onModifyBook)
$(document).on('click', '.delete-button', bookEvents.onDeleteBook)
$(document).on('click', '.modify-button', bookEvents.onLoadUpdateForm)
$(document).on('click', '.cancel-update', closeBookUpdate )

// use require without a reference to ensure a file is bundled
require('./example')
