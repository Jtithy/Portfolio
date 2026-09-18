/* Mobile Navigation */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

/* Close Mobile Menu
   When a navigation link is clicked */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

/* Close Menu When Clicking Outside */

document.addEventListener("click", (event) => {

    const clickedInsideNavbar =
        navLinks.contains(event.target) ||
        menuToggle.contains(event.target);

    if (!clickedInsideNavbar) {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }

});

/* Scroll Reveal Animation */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".skill-card, " +
    ".project-card, " +
    ".education-card, " +
    ".contact-content"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.1
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});

