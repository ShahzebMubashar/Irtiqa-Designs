console.log("Loader script loaded!"); // Debugging check

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded"); // Check if DOM is ready

    setTimeout(() => {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");

        if (loader && content) {
            loader.style.display = "none";
            content.style.display = "block";
            console.log("Loader hidden, content displayed!"); // Debugging check
        } else {
            console.log("Loader or content not found!");
        }
    }, 1500);
});
