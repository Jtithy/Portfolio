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

/* Project Filtering */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedFilter = button.dataset.filter;

        /* Remove active state from all buttons */
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        /* Activate clicked button */
        button.classList.add("active");

        /* Show / hide projects */
        projectCards.forEach((card) => {

            const category = card.dataset.category;

            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

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

