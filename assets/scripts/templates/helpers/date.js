module.exports = function (noFormatDate) {
  if (noFormatDate === null) { return null }
  const date = noFormatDate.split('T')[0]
  return date
}
