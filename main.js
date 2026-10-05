// Mobile navigation
function toggleMenu() {
    const nav = document.getElementById("navLinks");

    nav.classList.toggle("show");
}
    

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navLinks")
            .classList.remove("show");

    });

});


// Vote button
function voteMessage() {

    alert(
        "BALLOT NO. 003\n\n" +
        "OGUTU ROLLINES MELVIN\n\n" +
        "22ND CONGRESSPERSON\n" +
        "SCHOOL OF PUBLIC HEALTH\n\n" +
        "LEAD — LISTEN • ENGAGE • ACT • DELIVER"
    );

}


// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Scroll reveal animation
const sections = document.querySelectorAll(
    ".about-box > div, .card, .vote-box"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function(section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.7s ease";

    observer.observe(section);

});