const menuButtons = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button i");
const searchButton = document.querySelector("#search-button");
const searchBackButton = document.querySelector(".search-back-button");

// Toggle sidebar visibility when menu buttons are clicked
menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden"); 
  });
});

// above code are both foe side-bar (Keep for eduction purpose)
/*document.addEventListener("click", (event) => {
  if (event.target.closest(".menu-button")) {
    document.body.classList.toggle("sidebar-hidden");
  }
});*/


// Toggle sidebar visibility when screen overlay is clicked
screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden"); 
});

// Initialize dark mode based on localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeButton.classList.replace("bx-moon", "bx-sun");
}else {
  themeButton.classList.replace("uil-sun", "uil-moon");
}

// Toggle dark mode when theme button is clicked
themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  themeButton.classList.toggle("bx-sun", isDarkMode);
  themeButton.classList.toggle("bx-moon", !isDarkMode);
});

// Show sidebar on large screens by default
if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden");
}

/*  window.addEventListener("resize", () => {
 if (window.innerWidth >= 768) {
      document.body.classList.remove("sidebar-hidden");
  }
});*/

// Toggle search bar on click on mobile
const toggleSearchBar = () => {
  document.body.classList.toggle("show-mobile-search");
};

searchButton.addEventListener("click", toggleSearchBar);
searchBackButton.addEventListener("click", () => searchButton.click());
