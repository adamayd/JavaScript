// define constants of the classes and ids used
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

// Make site toggle if javascript is not enabled
CTA.classList.remove("hide");
ALERT.classList.add("hide");

// function to toggle .hide on and off
function reveal(e) {
  e.preventDefault();  // Stop click from following target
  CTA.classList.toggle("hide");
  ALERT.classList.toggle("hide");
}

// // use click to run function
// CTA.onclick = reveal; // by leaving out () script doesn't run on load
// CTA.onclick = console.log("The button was clicked");

// use Event Listener instead of onclick for multiple calls
CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function(){ console.log("The button was clicked");}, false);
