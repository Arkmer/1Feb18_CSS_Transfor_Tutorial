$(document).ready(listeners);
function listeners(){
  $('translateButton').on('click', fTranslate)
};

function fTranslate(){
  $('#translateAfter').removeClass('translateBefore');
  $('#translateBefore').addClass('translateAfter');
}
