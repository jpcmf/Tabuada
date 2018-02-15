//tabuada.js

// create getElement to prevent repeat of querySelector
function getElement(selector) {
  return document.querySelector(selector);
}

// create formula Tabuada
function formulaTabuada(number, tabuada) {
  return number * tabuada;
}

// create var for all elements
var number  = getElement('.number');
var tabuada = getElement('.tabuada');
var btn     = getElement('.btn');
var result  = getElement('.result');

// add event to button to calcute Tabuada
// using anonymous function
btn.addEventListener('click', function() {
  // prevent submit button from submitting a form
  event.preventDefault();

  // calculate Tabuada
  result.textContent = formulaTabuada(number.value, tabuada.value);
  number.value  = ''; // clear input
  tabuada.value = ''; //clear input
});
