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

// Enhanced filtering with animations
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn")
    const projects = document.querySelectorAll(".project-card, .structural-card")

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter")

            // Update active button
            filterButtons.forEach((btn) => btn.classList.remove("active"))
            button.classList.add("active")

            // Filter projects with animation
            projects.forEach((project) => {
                const categories = project.getAttribute("data-category").split(" ")

                project.style.animation = "none"
                project.offsetHeight // Trigger reflow

                if (filterValue === "all" || categories.includes(filterValue)) {
                    project.style.display = "block"
                    project.style.animation = "fadeInUp 0.6s ease-out forwards"
                } else {
                    project.style.display = "none"
                }
            })
        })
    })

    // Initial animation
    projects.forEach((project, index) => {
        project.style.animationDelay = `${index * 0.1}s`
    })
})