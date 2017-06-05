const store = require('../store.js')
const config = require('../config.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigins.production + '/change-password/' + store.store.id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigins.production + '/sign-out/' + store.store.id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
