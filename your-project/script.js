// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Add active class to current page nav item
const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Lazy loading for images
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => imageObserver.observe(img));
});

// Search functionality
const searchInput = document.querySelector(".search-input");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const contentItems = document.querySelectorAll(".searchable");

    contentItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(searchTerm) ? "block" : "none";
    });
  });
}
