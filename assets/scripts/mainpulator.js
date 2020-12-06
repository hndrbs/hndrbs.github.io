function showContent(){
    $('#home').hide()
    $('#header').show()
}
function showAbout(){
    //console.log('masuk')
    showContent()
}

function showHome(){
    $('#home').show()
    $('#header').hide()
    $('#projects').hide()
    $('#experience').hide()
    $('#about').hide()
}

function showProjects(){
    showContent()
    $('#projects').show()
}