function login(url) {
    window.location.href = url;
}
function listing() {
    window.location.href = "listing.html";
}
let button = document.getElementById("button");

function hover() {
    button.style.backgroundColor = "white";
    button.style.color = "black";
}
function leave() {
    button.style.backgroundColor = "black";
    button.style.color = "white";
}
//card horver
let cards = document.getElementsByClassName("property-card");
for (let card of cards) {
    card.onmouseover = function () {
        card.style.transform = "scale(1.03)";
        card.style.transition = "0.3s";
        card.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    }
    card.onmouseleave = function () {
        card.style.transform = "scale(1)";
        card.style.transition = "0.3s";
        card.style.boxShadow = "none";
    }
}
let propertyCards = document.getElementsByClassName("property-card");
for (let propertyCard of propertyCards) {
    propertyCard.onclick = function () {
        window.location.href = "view.html";
    }
}
//navigation bar
function toggle_darkmode() {
    document.body.classList.toggle("dark-mode");
}
let darkModeButton = document.getElementsByClassName("dark_mode");
for (let button of darkModeButton) {
    button.onclick = toggle_darkmode;
}
//search bar
let searchButton = document.getElementsByClassName("search-btn");
let searchInput = document.getElementsByClassName("field-value");
let searchBar = document.getElementsByClassName("search-container");
