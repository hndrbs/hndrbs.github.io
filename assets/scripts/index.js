$(document).ready(function(){
    showHome()
    $('.go-about').on('click', function(){
        showAbout()
    })
    $('.go-home').on('click', function(){
        showHome()
    })
    $('.go-projects').on('click', function(){
        showProjects()
    })
})