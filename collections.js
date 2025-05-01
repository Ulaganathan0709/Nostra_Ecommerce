// offer bar
var offer__x = document.getElementById("offer__x")
var offerbar = document.querySelector(".offerbar")

offer__x.addEventListener("click", function () {
    offerbar.style.display = "none"
})

// side nav bar
var sidenavbar = document.querySelector(".sidenavbar")
var siedenav__X = document.getElementById("sidenav__X")
var menubar__menu = document.getElementById("menubar__menu")

menubar__menu.addEventListener("click", function () {
    console.log("Menu icon clicked!");
    sidenavbar.style.left = "0px"
})
siedenav__X.addEventListener("click", function () {
    sidenavbar.style.left = "-70%"
})
// Check Box Functionality

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const products = document.querySelectorAll('.product__image');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectedOccasions = getCheckedValues("occasion");
        const selectedColors = getCheckedValues("color");
        const selectedArrivals = getCheckedValues("arrival");

        products.forEach(product => {
            const occasion = product.dataset.occasion;
            const color = product.dataset.color;
            const arrival = product.dataset.arrival;

            const matchOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(occasion);
            const matchColor = selectedColors.length === 0 || selectedColors.includes(color);
            const matchArrival = selectedArrivals.length === 0 || selectedArrivals.includes(arrival);

            if (matchOccasion && matchColor && matchArrival) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});

function getCheckedValues(type) {
    return Array.from(checkboxes)
        .filter(cb => cb.checked && cb.dataset.type === type)
        .map(cb => cb.value);
}

// Search Bar Functionality

var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"

        }
        else {
            productlist[count].style.display = "block"
        }
    }
})

