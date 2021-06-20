//dropdown even for responsive menu

const nav2 = document.getElementById("nav2");
const menubar = document.querySelector(".dot");

menubar.addEventListener("click", function() {
    nav2.classList.toggle("navToggle")
})

//scroll event of navbar

const nav = document.getElementById("nav1");

window.addEventListener("scroll", function() {
    let yAhis = window.scrollY;

    if (yAhis >= 100) {
        nav.classList.add("scrollNavStart");
        nav.classList.remove("scrollNavEnd");
    } else {
        nav.classList.add("scrollNavEnd");
        nav.classList.remove("scrollNavStart")
    }
})

//Preloader logic
const Preloader = document.querySelector(".beforeLoad");
window.addEventListener("load", function() {
    console.log("Loaded");
    Preloader.classList.remove("beforeLoad");
})

// One page nav effect

const li1 = document.querySelectorAll(".onePage li")[0];
const li2 = document.querySelectorAll(".onePage li")[1];
const li3 = document.querySelectorAll(".onePage li")[2];
const li4 = document.querySelectorAll(".onePage li")[3];
const li5 = document.querySelectorAll(".onePage li")[4];
const li6 = document.querySelectorAll(".onePage li")[5];


window.addEventListener("scroll", function() {
    const section1 = document.querySelector("#hero").getBoundingClientRect().top;
    const section1Height = document.querySelector("#hero").getBoundingClientRect().height;
    const section2 = document.querySelector("#services").getBoundingClientRect().top;
    const section2Height = document.querySelector("#services").getBoundingClientRect().height;
    const section3 = document.querySelector("#feature1").getBoundingClientRect().top;
    const section3Height = document.querySelector("#feature1").getBoundingClientRect().height;
    const section4 = document.querySelector("#testi").getBoundingClientRect().top;
    const section4Height = document.querySelector("#testi").getBoundingClientRect().height;
    const section5 = document.querySelector("#pricing").getBoundingClientRect().top;
    const section5Height = document.querySelector("#pricing").getBoundingClientRect().height;
    const section6 = document.querySelector("#contact").getBoundingClientRect().top;
    const section6Height = document.querySelector("#contact").getBoundingClientRect().height;

    if (section1 <= 0 && section1 > -section1Height) {
        li1.classList.add("current");
        li2.classList.remove("current");
        li3.classList.remove("current");
        li4.classList.remove("current");
        li5.classList.remove("current");
        li6.classList.remove("current");
    } else if (section2 <= 0 && section2 > -section2Height) {
        li2.classList.add("current");
        li1.classList.remove("current");
        li3.classList.remove("current");
        li4.classList.remove("current");
        li5.classList.remove("current");
        li6.classList.remove("current");
    } else if (section3 <= 0 && section3 > -section3Height) {
        li3.classList.add("current");
        li1.classList.remove("current");
        li2.classList.remove("current");
        li4.classList.remove("current");
        li5.classList.remove("current");
        li6.classList.remove("current");
    } else if (section4 <= 0 && section4 > -section4Height) {
        li4.classList.add("current");
        li1.classList.remove("current");
        li2.classList.remove("current");
        li3.classList.remove("current");
        li5.classList.remove("current");
        li6.classList.remove("current");
    } else if (section5 <= 0 && section5 > -section5Height) {
        li5.classList.add("current");
        li2.classList.remove("current");
        li1.classList.remove("current");
        li3.classList.remove("current");
        li4.classList.remove("current");
        li6.classList.remove("current");
    } else if (section6 <= 0 && section6 > -section6Height) {
        li6.classList.add("current");
        li2.classList.remove("current");
        li1.classList.remove("current");
        li3.classList.remove("current");
        li4.classList.remove("current");
        li5.classList.remove("current");
    }
})

// Responsive menu one page nav effect 

const rli1 = document.querySelectorAll("#nav2 li")[0];
const rli2 = document.querySelectorAll("#nav2 li")[1];
const rli3 = document.querySelectorAll("#nav2 li")[2];
const rli4 = document.querySelectorAll("#nav2 li")[3];
const rli5 = document.querySelectorAll("#nav2 li")[4];
const rli6 = document.querySelectorAll("#nav2 li")[5];

window.addEventListener("scroll", function() {
    const rsection1 = document.querySelector("#hero").getBoundingClientRect().top;
    const rsection1Height = document.querySelector("#hero").getBoundingClientRect().height;
    const rsection2 = document.querySelector("#services").getBoundingClientRect().top;
    const rsection2Height = document.querySelector("#services").getBoundingClientRect().height;
    const rsection3 = document.querySelector("#feature1").getBoundingClientRect().top;
    const rsection3Height = document.querySelector("#feature1").getBoundingClientRect().height;
    const rsection4 = document.querySelector("#testi").getBoundingClientRect().top;
    const rsection4Height = document.querySelector("#testi").getBoundingClientRect().height;
    const rsection5 = document.querySelector("#pricing").getBoundingClientRect().top;
    const rsection5Height = document.querySelector("#pricing").getBoundingClientRect().height;
    const rsection6 = document.querySelector("#contact").getBoundingClientRect().top;
    const rsection6Height = document.querySelector("#contact").getBoundingClientRect().height;

    if (rsection1 <= 0 && rsection1 > -rsection1Height) {
        rli1.classList.add("current");
        rli2.classList.remove("current");
        rli3.classList.remove("current");
        rli4.classList.remove("current");
        rli5.classList.remove("current");
        rli6.classList.remove("current");
    } else if (rsection2 <= 0 && rsection2 > -rsection2Height) {
        rli2.classList.add("current");
        rli1.classList.remove("current");
        rli3.classList.remove("current");
        rli4.classList.remove("current");
        rli5.classList.remove("current");
        rli6.classList.remove("current");
    } else if (rsection3 <= 0 && rsection3 > -rsection3Height) {
        rli3.classList.add("current");
        rli1.classList.remove("current");
        rli2.classList.remove("current");
        rli4.classList.remove("current");
        rli5.classList.remove("current");
        rli6.classList.remove("current");
    } else if (rsection4 <= 0 && rsection4 > -rsection4Height) {
        rli4.classList.add("current");
        rli1.classList.remove("current");
        rli2.classList.remove("current");
        rli3.classList.remove("current");
        rli5.classList.remove("current");
        rli6.classList.remove("current");
    } else if (rsection5 <= 0 && rsection5 > -rsection5Height) {
        rli5.classList.add("current");
        rli2.classList.remove("current");
        rli1.classList.remove("current");
        rli3.classList.remove("current");
        rli4.classList.remove("current");
        rli6.classList.remove("current");
    } else if (rsection6 <= 0 && rsection6 > -rsection6Height) {
        rli6.classList.add("current");
        rli2.classList.remove("current");
        rli1.classList.remove("current");
        rli3.classList.remove("current");
        rli4.classList.remove("current");
        rli5.classList.remove("current");
    }
})