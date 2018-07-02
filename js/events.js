//define functions here
function getIt() {
  alert("Hey!")
}

function frameIt() {
  $(this).addClass("tasty")
}

function pressIt() {
  if(key.which === 71) {
    alertt("G was pressed")
  }
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}

$(document).ready(function(){

// call functions here
$("p").bind("click", getIt());

$('img').bind("load", frameIt());

$(document).on("keydown", pressIt());

$("form").on("submit", submitIt());


});
