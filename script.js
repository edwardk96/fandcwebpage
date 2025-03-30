document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".content");
    const navbar = document.getElementById("navbar");
    let isScrolling = false;
    let currentIndex = 0;

    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return; // Prevent out-of-bounds scrolling

        isScrolling = true;
        sections[index].scrollIntoView({ behavior: "smooth" });

        // Prevent multiple scroll events from firing too fast
        setTimeout(() => { isScrolling = false; }, 500);
    }

    window.addEventListener("wheel", (event) => {
        if (isScrolling) return; // Block if already scrolling

        if (event.deltaY > 5 && currentIndex < sections.length - 1) {
            // Scroll down only if the delta is strong enough
            currentIndex++;
        } else if (event.deltaY < -5 && currentIndex > 0) {
            // Scroll up only if the delta is strong enough
            currentIndex--;
        } else {
            return; // Ignore small scrolls
        }

        scrollToSection(currentIndex);
    });

    // Navbar becomes opaque as you scroll down the page
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("solid");
            navbar.classList.remove("transparent");
        } else {
            navbar.classList.add("transparent");
            navbar.classList.remove("solid");
        }
    });

});
  