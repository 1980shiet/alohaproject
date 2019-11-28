document.addEventListener("DOMContentLoaded", function() {
  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    wrapAround: true,
    freeScroll: true
  });

  const subbtn = document.getElementById("subscribe-form");
  subbtn.addEventListener("submit", validateEmail);
});

function validateEmail(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  if (email !== "") {
    alert("Thanks for subscribing");
  } else {
    alert("Please submit a valid email");
  }
}
