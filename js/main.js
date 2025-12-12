// ================================
// Bootstrap Tooltips
// ================================
document.querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach(el => {
    new bootstrap.Tooltip(el);
  });

// ================================
// Toast (Contact feedback)
// ================================
const toastElement = document.getElementById('contactToast');
const toast = toastElement ? new bootstrap.Toast(toastElement) : null;

// Example usage if you later add a form submit
const contactForm = document.querySelector('#contact form');
if (contactForm && toast) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    toast.show();
  });
}

// ================================
// Dark Mode Toggle (Bootstrap 5.3)
// ================================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const icon = themeToggle.querySelector("i");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
    icon.className = savedTheme === "dark"
      ? "bi bi-sun-fill"
      : "bi bi-moon-fill";
  }

  // Toggle theme on click
  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-bs-theme") || "light";

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    icon.className = newTheme === "dark"
      ? "bi bi-sun-fill"
      : "bi bi-moon-fill";
  });
}


