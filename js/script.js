document.addEventListener("DOMContentLoaded", function() {
  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    wrapAround: true,
    freeScroll: true
  });

  const subbtn = document.getElementById("subscribe-form");
  console.log(subbtn);
  subbtn.addEventListener("submit", myFunction);
  function myFunction(event) {
    event.preventDefault();
    //alert("howdy");
    const email = document.getElementById("email").value;
    console.log(email);
  }
});
