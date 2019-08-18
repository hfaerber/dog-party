var textBoxVar = document.querySelector('.js-text-box');
var clickButton = document.querySelector('.js-name-button');
var textToChange = document.querySelector('.js-site-about-blank');

clickButton.addEventListener('click', function() {
  var updateTextValue = textBoxVar.value;
  textToChange.innerText = `${updateTextValue}`;
  textBoxVar.value = '';
});
