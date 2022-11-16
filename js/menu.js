let menu = document.querySelector("manu-bar");
let navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toogle");
});

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("nav-toggle");
    

}