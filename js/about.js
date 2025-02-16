document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const sections = document.querySelectorAll("section");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = button.getAttribute("data-filter");

            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            sections.forEach(section => {
                if (filter === "all") {
                    section.style.display = "block";
                } else {
                    if (section.classList.contains(filter)) {
                        section.style.display = "block";
                    } else {
                        section.style.display = "none";
                    }
                }
            });
        });
    });
});
