const home = document.getElementById("homeicon");
const nav = document.querySelector("nav");

let homeDisplay = true;

home.addEventListener("click", () => {
    nav.classList.toggle("show");

    if (home.className === "fa fa-bars") {
        home.className = "fa fa-close";
    } else {
        home.className = "fa fa-bars";
    }

})
