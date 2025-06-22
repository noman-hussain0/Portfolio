const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle navigation menu
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

// Close the menu when a link is clicked
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// Scroll to the contact section when "Hire Me Now" is clicked
document.getElementById("hire-btn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// ScrollReveal animations
ScrollReveal().reveal(".header__content h1", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  distance: "50px",
  origin: "bottom",
  delay: 500,
  duration: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  distance: "50px",
  origin: "bottom",
  delay: 1000,
  duration: 1000,
});
