document.getElementById("hamburger").addEventListener("click", function() {
    let navbar = document.querySelector(".navbar");
    let navLinks = document.getElementById("nav-links");

    navbar.classList.toggle("expanded");
    navLinks.classList.toggle("show");
});
