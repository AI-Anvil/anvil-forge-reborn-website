// JavaScript for Rolling Gallery
// Adjust the speed of the gallery by modifying the animation duration in CSS

// Optionally, you can implement a more advanced carousel using JavaScript

// Placeholder for future JavaScript code

// Function to toggle service details
function toggleDetails(element) {
    const details = element.nextElementSibling;
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Function to toggle service detail
function toggleServiceDetail(element) {
    element.classList.toggle('open');
}
