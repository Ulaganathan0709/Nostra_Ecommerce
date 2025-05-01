// offer bar
var offer__x = document.getElementById("offer__x")
var offerbar = document.querySelector(".offerbar")

offer__x.addEventListener("click",function(){
    offerbar.style.display="none"
})

// side nav bar
var sidenavbar = document.querySelector(".sidenavbar")
var siedenav__X = document.getElementById("sidenav__X")
var menubar__menu = document.getElementById("menubar__menu")

menubar__menu.addEventListener("click",function(){
    console.log("Menu icon clicked!");
    sidenavbar.style.left = "0px"
})
siedenav__X.addEventListener("click",function(){
    sidenavbar.style.left = "-70%"
})