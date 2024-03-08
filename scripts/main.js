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

//////////////////// Last Visited //////////////////////
const lastVisit = document.querySelector("#lastvisit");
let numTimes = 0;

let dateVisit = new Date();

document.addEventListener("DOMContentLoaded", () => {


    numTimes = localStorage.getItem("numTimes");

    numTimes++;
    if (numTimes <= 1) {
        lastVisit.innerHTML = ` Welcome, Visit-Time: ${numTimes}<br>${dateVisit}`;
        localStorage.setItem("numTimes", numTimes);
    } else if (dateVisit.getHours() < 24) {
        lastVisit.innerHTML = `Back So soon!! ${numTimes}<br>${dateVisit}`;
        localStorage.setItem("numTimes", numTimes);
    } else {
        lastVisit.innerHTML = `Visit-Times: ${numTimes}<br>${dateVisit}`;
        localStorage.setItem("numTimes", numTimes);
    }

});

////////////////// Slide Show /////////////
const leftbtn = document.getElementById("leftbtn");
const rightbtn = document.getElementById("rightbtn");
const carImages = document.querySelectorAll(".carz");
const displayImage = document.getElementById("display-image");


