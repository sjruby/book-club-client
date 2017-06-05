'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const userEvents = require('./userEvents/userEvents')

$(() => {
  setAPIOrigin(location, config)
})

$(document).on('submit', '#sign-up', userEvents.onSignUp)
$(document).on('submit', '#sign-in', userEvents.onSignIn)
$(document).on('submit', '#change-pw', userEvents.onChangePW)
$(document).on('submit', '#sign-out', userEvents.onSignOut)

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
