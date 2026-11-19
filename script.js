// Mobile navigation menu
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menuButton.textContent = isOpen ? "×" : "☰";
  });
}

// Automatically display the current year in the footer
document.querySelectorAll(".year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Demonstration contact form. This validates input but does not send email.
// Connect a form service or backend to receive messages.
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    formStatus.textContent = "Thank you! The form works as a demonstration. Connect a form service to receive this message.";
    contactForm.reset();
  });
}
