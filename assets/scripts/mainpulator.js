function showHome () {
  $('#home').show()
  $('#about').hide()
  $('#projects').hide()
  $('#header').hide()
}

function showProjects () {
  $('#home').hide()
  $('#about').hide()
  $('#projects').show()
  $('#header').show()
}

function showAbout () {
  $('#home').hide()
  $('#about').show()
  $('#projects').hide()
  $('#header').show()
}