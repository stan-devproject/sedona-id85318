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

  popup.classList.add("modal-content-animation");
  setTimeout(function(){ popup.classList.remove("modal-content-animation"); }, 600);

  date_entranse.focus();
});

form.addEventListener("submit", function(event) {
  if (!date_entranse.value || !date_departure.value  || !count_adult.value) {
    event.preventDefault();
    popup.classList.toggle("modal-error");
    setTimeout(function(){ popup.classList.remove("modal-error"); }, 600);
  }
});