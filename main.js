var textboxvar = document.querySelector("#textbox");
var clickButton = document.querySelector("#name-button");
var textToChange = document.querySelector(".site-about-blank");

clickButton.addEventListener("click", function () {
  var updateTextValue = textboxvar.value;
  textToChange.innerText = `${updateTextValue}`;
  textboxvar.value = "";
});
