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
const checkoutStatus = document.querySelector("[data-checkout-status]");

if (checkoutStatus) {
  const params = new URLSearchParams(window.location.search);
  const checkoutResult = params.get("checkout");

  if (checkoutResult === "success") {
    checkoutStatus.hidden = false;
    checkoutStatus.classList.add("is-success");
    checkoutStatus.innerHTML = `
      <p class="eyebrow">Subscription started</p>
      <h2>Your Harbor Vault subscription is active</h2>
      <p>Thank you for subscribing. We will contact you at the email used during checkout with next steps for Harbor Vault access and onboarding.</p>
      <div class="checkout-status-actions">
        <a class="button primary" href="mailto:admin@cottonwoodharbor.com?subject=Harbor%20Vault%20Onboarding">Contact Cottonwood Harbor</a>
        <a class="button secondary" href="resources.html">Browse Harbor Library</a>
      </div>
    `;
    checkoutStatus.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (checkoutResult === "cancelled") {
    checkoutStatus.hidden = false;
    checkoutStatus.classList.add("is-cancelled");
    checkoutStatus.innerHTML = `
      <p class="eyebrow">Checkout cancelled</p>
      <h2>No subscription was created</h2>
      <p>You can return to pricing whenever you are ready, or contact us if you have questions before subscribing.</p>
      <div class="checkout-status-actions">
        <a class="button primary" href="#pricing">Return to Pricing</a>
        <a class="button secondary" href="mailto:admin@cottonwoodharbor.com?subject=Harbor%20Vault%20Question">Ask a Question</a>
      </div>
    `;
    checkoutStatus.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

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
