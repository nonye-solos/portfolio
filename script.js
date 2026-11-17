// Small interactions for the portfolio. No libraries.

// 1. Mobile menu: show/hide the nav when "Menu" is tapped
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.textContent = isOpen ? "Close" : "Menu";
  });

  // Close the menu after a link is chosen
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Menu";
    });
  });
}

// 2. "Copy email" button in the contact section
const copyBtn = document.getElementById("copy-email");
const copyNote = document.getElementById("copy-note");

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyNote.textContent = "Copied: " + email;
    } catch (err) {
      // Some browsers block clipboard access; show the address instead
      copyNote.textContent = email;
    }
  });
}

// 3. Keep the footer year current
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
