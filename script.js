// ================================
// MOBILE NAVIGATION
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  menuBtn.textContent = navLinks.classList.contains("open")
    ? "×"
    : "☰";
});


// Close mobile menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12
  }
);


// Observe elements having the "reveal" class

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});


// ================================
// SCROLL PROGRESS BAR
// ================================

const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage =
    (scrollTop / scrollHeight) * 100;

  progress.style.width = `${scrollPercentage}%`;
});


// ================================
// CURRENT YEAR
// ================================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// ================================
// DISABLE EMPTY PROJECT LINKS
// ================================

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});