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

// Update the filtering logic
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn")
    const projects = document.querySelectorAll(".project-card")
    let delay = 0

    function filterProjects(category) {
        delay = 0
        projects.forEach((project) => {
            const categories = project.getAttribute("data-category").split(" ")
            project.style.animation = "none"
            project.offsetHeight // Trigger reflow

            if (category === "all" || categories.includes(category)) {
                project.style.display = "block"
                project.style.animation = `fadeInUp 0.6s ease-out ${delay}s forwards`
                delay += 0.1
            } else {
                project.style.display = "none"
            }
        })
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter")
            filterButtons.forEach((btn) => btn.classList.remove("active"))
            button.classList.add("active")
            filterProjects(filterValue)
        })
    })

    // Initial animation
    filterProjects("all")
})

