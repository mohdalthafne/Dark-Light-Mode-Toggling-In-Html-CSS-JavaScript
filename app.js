// Theme Switching JS Snippets
const themeBtn = document.querySelector("#themeBtn");

// Initializing Dark Mode Based On localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    themeBtn.classList.replace("fa-moon", "fa-sun");
} else {
    themeBtn.classList.replace("fa-sun", "fa-moon");
}

// Toggle Dark Mode When The Theme Button Clicked
themeBtn.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    themeBtn.classList.toggle("fa-sun", isDarkMode);
    themeBtn.classList.toggle("fa-moon", !isDarkMode);
})