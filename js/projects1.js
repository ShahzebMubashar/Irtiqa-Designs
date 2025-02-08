// Update the filtering logic to handle multiple categories
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn")
    const projects = document.querySelectorAll(".project-card")

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter")

            filterButtons.forEach((btn) => btn.classList.remove("active"))
            button.classList.add("active")

            projects.forEach((project) => {
                const categories = project.getAttribute("data-category").split(" ")
                if (filterValue === "all" || categories.includes(filterValue.toLowerCase())) {
                    project.style.display = "block"
                } else {
                    project.style.display = "none"
                }
            })
        })
    })
})

