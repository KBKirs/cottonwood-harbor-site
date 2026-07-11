const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      mobileMenu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

const checkoutButtons = document.querySelectorAll("[data-checkout-plan]");

checkoutButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const plan = button.getAttribute("data-checkout-plan");
    const originalText = button.textContent;

    button.setAttribute("aria-busy", "true");
    button.textContent = "Opening checkout";

    try {
      const response = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Checkout is unavailable");
      }

      window.location.href = data.url;
    } catch (error) {
      button.textContent = "Try again";
      button.removeAttribute("aria-busy");
      alert(`Checkout is not available yet: ${error.message}`);
    }

    if (document.visibilityState === "visible") {
      window.setTimeout(() => {
        button.textContent = originalText;
        button.removeAttribute("aria-busy");
      }, 2500);
    }
  });
});
