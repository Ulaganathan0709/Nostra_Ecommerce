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
//main bar
var mainbarleft__click = document.getElementById("mainbarleft__click")
var mainbarright__click = document.getElementById("mainbarright__click")
var mainbar__images = document.getElementById("mainbar__images")
var totalimages = document.querySelectorAll(".mainbar-image").length
let index = 0

mainbarright__click.addEventListener("click", function () {
    console.log("menu is clicked")
    index = (index + 1) % totalimages
    updateslide()

})
mainbarleft__click.addEventListener("click", function () {
    console.log("menu is clicked")
    index = (index - 1) % totalimages
    updateslide()

})

function updateslide() {
    mainbar__images.style.transform = `translateX(-${index * 100}vw)`;
}

//Heart Like 
var likebutton = document.querySelectorAll(".plainheart");
likebutton.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        console.log("Heart icon clicked! Current image src:", e.target.src);

        // Check if the src contains "blacheart.png"
        if (e.target.src.includes("blacheart.png")) {
            console.log("Switching to redheart");
            e.target.src = "./images/products/redheart.png";  // Update to red heart
        } else {
            console.log("Switching to blackheart");
            e.target.src = "./images/products/blacheart.png";  // Update to black heart
        }
    });
});



