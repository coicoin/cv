const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup__content");
const popupButton = document.getElementById("popup__button");

document.addEventListener("DOMContentLoaded", function () {
  popup.classList.add("show");
  setTimeout(function () {
    hidePopup();
  }, 10000)
});

function hidePopup() {
  popup.classList.remove("show");
}

document.addEventListener("click", function (event) {
  if (popupButton.contains(event.target) || !popupContent.contains(event.target)) {
    hidePopup();
  }
});