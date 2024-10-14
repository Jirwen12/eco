document.getElementById("shrink-button").addEventListener("click", function() {
    document.getElementById("background-image").classList.add("shrink");
    document.getElementById("main-title").classList.add("shrink-title");
    document.getElementById("form-container").style.display = "flex"; // Show form
    document.getElementById("shrink-button").style.display = "none"; // Hide the button
});

document.getElementById("return-button").addEventListener("click", function() {
    document.getElementById("background-image").classList.remove("shrink");
    document.getElementById("main-title").classList.remove("shrink-title");
    document.getElementById("form-container").style.display = "none"; // Hide form
    document.getElementById("shrink-button").style.display = "flex"; // Show the button again
});

document.getElementById("menu-icon").addEventListener("click", function() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none"; // Hide menu
    } else {
        navMenu.style.display = "flex"; // Show menu
    }
});

