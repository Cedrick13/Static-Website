// Carousel functionality
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    if (!track) return; // stop if no carousel exists

    const images = Array.from(track.children);
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    // Optional auto-slide every 4 seconds
    setInterval(() => {
        index = (index + 1) % images.length;
        updateCarousel();
    }, 4000);
});

// Disable right click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable certain key combinations
document.addEventListener("keydown", function (e) {
    // F12
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    // Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
        return false;
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        return false;
    }
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
        return false;
    }
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight active section in sidebar on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar-icons a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ===== Responsive Sidebar Toggle =====
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");

    if (hamburger && sidebar) {
        hamburger.addEventListener("click", () => {
            sidebar.classList.toggle("active");
        });
    }
});


