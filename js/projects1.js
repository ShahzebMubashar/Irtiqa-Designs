document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter")
            console.log("Filter clicked:", filter)

            // Remove active class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"))

            // Add active class to clicked button
            button.classList.add("active")

            projectCards.forEach((card) => {
                const category = card.getAttribute("data-category")
                console.log("Card category:", category)

                if (filter === "all" || category === filter) {
                    card.style.display = ""
                    console.log("Showing card:", card)
                } else {
                    card.style.display = "none"
                    console.log("Hiding card:", card)
                }
            })
        })
    })

    // Log initial state
    // console.log("Total filter buttons:", filterButtons.length)
    // console.log("Total project cards:", projectCards.length)
})

