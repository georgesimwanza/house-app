let button= document.getElementsByClassName("explore-btn")[0];

function explore(){
    window.location.href="home.html";
}
button.addEventListener("click",explore);

let loginButton= document.getElementsByClassName("login-btn")[0];

function login(){
    window.location.href="login.html";
}
loginButton.addEventListener("click",login);