document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".content");
    const navbar = document.getElementById("navbar");
    let isScrolling = false;
    let currentIndex = 0;

    function scrollToSection(index) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: "smooth" });
        setTimeout(() => { isScrolling = false; }, 1000);
    }

    window.addEventListener("wheel", (event) => {
        if (isScrolling) return;

        if (event.deltaY > 0 && currentIndex < sections.length - 1) {
            // Scroll down
            currentIndex++;
        } else if (event.deltaY < 0 && currentIndex > 0) {
            // Scroll up
            currentIndex--;
        }

        scrollToSection(currentIndex);
    });

    // Navbar scroll effect (merge with intersection observer for better performance)
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
  