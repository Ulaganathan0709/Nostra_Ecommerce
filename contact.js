// Offer bar close
const offerCloseBtn = document.getElementById("offer__x");
const offerBar = document.querySelector(".offerbar");

offerCloseBtn.addEventListener("click", () => {
  offerBar.style.display = "none";
});

// Side navbar toggle
const sidenavbar = document.querySelector(".sidenavbar");
const sidenavCloseBtn = document.getElementById("sidenav__X");
const menuIcon = document.getElementById("menubar__menu");

menuIcon.addEventListener("click", () => {
  console.log("Menu icon clicked!");
  sidenavbar.style.left = "0px";
});

sidenavCloseBtn.addEventListener("click", () => {
  sidenavbar.style.left = "-70%";
});
