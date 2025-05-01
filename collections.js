// OFFER BAR CLOSE
const offerCloseBtn = document.getElementById("offer__x");
const offerBar = document.querySelector(".offerbar");

offerCloseBtn.addEventListener("click", () => {
  offerBar.style.display = "none";
});

// SIDE NAVBAR TOGGLE
const sidenavbar = document.querySelector(".sidenavbar");
const sidenavCloseBtn = document.getElementById("sidenav__X");
const menuIcon = document.getElementById("menubar__menu");

menuIcon.addEventListener("click", () => {
  sidenavbar.style.left = "0px";
});
sidenavCloseBtn.addEventListener("click", () => {
  sidenavbar.style.left = "-70%";
});

// CHECKBOX FILTER FUNCTIONALITY
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const products = document.querySelectorAll(".product__image");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", handleFilter);
});

function handleFilter() {
  const selectedOccasions = getCheckedValues("occasion");
  const selectedColors = getCheckedValues("color");
  const selectedArrivals = getCheckedValues("arrival");

  let anyVisible = false;

  products.forEach((product) => {
    const { occasion, color, arrival } = product.dataset;

    const matchOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(occasion);
    const matchColor = selectedColors.length === 0 || selectedColors.includes(color);
    const matchArrival = selectedArrivals.length === 0 || selectedArrivals.includes(arrival);

    if (matchOccasion && matchColor && matchArrival) {
      product.style.display = "block";
      anyVisible = true;
    } else {
      product.style.display = "none";
    }
  });

  toggleEmptyMessage(anyVisible);
}

function getCheckedValues(type) {
  return Array.from(checkboxes)
    .filter((cb) => cb.checked && cb.dataset.type === type)
    .map((cb) => cb.value);
}

// SEARCH FUNCTIONALITY
const searchInput = document.getElementById("search");
const productContainer = document.getElementById("productcontainer");
const productList = productContainer.querySelectorAll(".product__image");

searchInput.addEventListener("keyup", (event) => {
  const enteredValue = event.target.value.toUpperCase();
  let anyVisible = false;

  productList.forEach((product) => {
    const productName = product.querySelector("h1").textContent.toUpperCase();
    if (productName.includes(enteredValue)) {
      product.style.display = "block";
      anyVisible = true;
    } else {
      product.style.display = "none";
    }
  });

  toggleEmptyMessage(anyVisible);
});

// NO PRODUCTS FOUND MESSAGE
function toggleEmptyMessage(showProducts) {
  let msg = document.getElementById("empty-message");

  if (!msg) {
    msg = document.createElement("p");
    msg.id = "empty-message";
    msg.textContent = "No products found.";
    msg.style.textAlign = "center";
    msg.style.fontSize = "1.25rem";
    msg.style.marginTop = "2rem";
    msg.style.color = "#666";
    productContainer.appendChild(msg);
  }

  msg.style.display = showProducts ? "none" : "block";
}
