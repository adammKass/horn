// Navbar Logic

const navbar = document.getElementById("navbar");
const openMenuButton = document.getElementById("open-menu-button");

const media = window.matchMedia("(width) < 768px");

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

media.addEventListener("change", (e) => updateNavbar(e));

function updateNavbar(e) {
  const isMobile = e.matches;
  if (isMobile) {
    navbar.setAttribute("inert", "");
  } else {
    navbar.removeAttribute("inert");
  }
}

function openMenu() {
  navbar.classList.add("show");
  openMenuButton.classList.add("hidden");
  openMenuButton.setAttribute("aria-expanded", "true");
  navbar.removeAttribute("inert");
}

function closeMenu() {
  navbar.classList.remove("show");
  openMenuButton.classList.remove("hidden");
  openMenuButton.setAttribute("aria-expanded", "false");

  if (window.matchMedia("(max-width: 768px)").matches) {
    navbar.setAttribute("inert", "");
  } else {
    navbar.removeAttribute("inert");
  }
}

updateNavbar(media);
