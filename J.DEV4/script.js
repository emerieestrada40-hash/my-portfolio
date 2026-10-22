document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a, .footer-column a');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const href = link.getAttribute("href");

            if (href && href.startsWith("#")) {
                const target = document.querySelector(href);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    history.replaceState(null, "", href);
                }
            }
        });
    });

    console.log("Welcome to my student portfolio!");
});


document.addEventListener("DOMContentLoaded", function () {

    // Select technology cards
    const techCards = document.querySelectorAll(".tech-card");

    // Select service boxes
    const serviceCards = document.querySelectorAll(".service-card");

    // Animate technology cards
    techCards.forEach(function (card, index) {
        card.style.animationDelay = (index * 0.15) + "s";
    });

    // Animate service boxes
    serviceCards.forEach(function (card, index) {
        card.style.animationDelay = (index * 0.2) + "s";
    });

    // Technology card click interaction
    techCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const heading = card.querySelector("h3");

            if (heading) {
                console.log("Selected technology: " + heading.textContent);
            }
        });
    });

    console.log("Welcome to my Skills page!");

});

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    if (!("IntersectionObserver" in window)) {
        projectCards.forEach(function (card) {
            card.classList.add("show");
        });
        return;
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.15
    });

    projectCards.forEach(function (card, index) {
        card.style.transitionDelay = (index % 4) * 100 + "ms";
        observer.observe(card);
    });
});