// Theme toggle on home page using plain JS document.addEventListener("DOMContentLoaded", function () { const btn = document.getElementById("themeToggleBtn");
document.addEventListener("DOMContentLoaded", function () { 
const btn = document.getElementById("themeToggleBtn");
if (btn) {
btn.addEventListener("click", function () { document.body.classList.toggle("dark-theme");
});
}
});

// Smooth scroll to top using jQuery
$(document).ready(function () {
$(".back-top-btn").click(function () {
$("html, body").animate({ scrollTop: 0 }, "slow");
})
})
