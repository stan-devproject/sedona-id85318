var link = document.querySelector(".search-show");
var popup = document.querySelector(".search-block");

var form = popup.querySelector(".form-search");
var date_entranse = popup.querySelector("#jsDateEntranse");
var date_departure = popup.querySelector("#jsDateDeparture");
var count_adult = popup.querySelector("#jsCountAdult");
var count_children = popup.querySelector("#jsCountChildren");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-content-show");
  date_entranse.focus();
});

form.addEventListener("submit", function(event) {
  if (!date_entranse.value || !date_departure.value  || !count_adult.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.classList.add("modal-error");
    setTimeout(function(){ popup.classList.remove("modal-error"); }, 650);
  }
});

// window.addEventListener("keydown", function(event) {
//   if (event.keyCode == 27) {
//     if (popup.classList.contains("modal-content-show")) {
//       popup.classList.remove("modal-content-show");
//       popup.classList.remove("modal-error");
//     }
//   }
// });

// var mapOpen = document.querySelector(".open-map");
// var mapPopup = document.querySelector(".modal-content-map");
// var mapClose = mapPopup.querySelector(".modal-content-close");

// mapOpen.addEventListener("click", function(event) {
//   event.preventDefault();
//   mapPopup.classList.add("modal-content-show");
// });

// mapClose.addEventListener("click", function(event) {
//   event.preventDefault();
//   mapPopup.classList.remove("modal-content-show");
// });

// window.addEventListener("keydown", function(event) {
//   if (event.keyCode == 27) {
//     if (mapPopup.classList.contains("modal-content-show")) {
//       mapPopup.classList.remove("modal-content-show");
//     }
//   }
// });