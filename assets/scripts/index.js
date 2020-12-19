$(document).ready(function(){
  showHome()
  $('.go-home').on('click', () => {
    showHome()
  })
  $('.go-projects').on('click', () => {
    showProjects()
  })
  $('.go-about').on('click', () => {
    showAbout()
  })
})