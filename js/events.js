//define functions here
function getIt() {
  alert("Hey!")
}

function frameIt() {
  $(this).addClass("tasty");
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

$('img').on('load', frameIt());

$(document).on("key down", pressIt());

$("form").on("submit", submitIt());


});
