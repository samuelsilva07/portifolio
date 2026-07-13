/* Ampliar itens do menu */

let botaoNav = document.getElementById("nav-toggle");
let nav = document.getElementById("nav")

botaoNav.addEventListener("click", () => {
    if (nav.style.display === "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
});