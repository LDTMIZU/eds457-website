/* ==========================================================================
   Personal Website — Shared Scripts
   - Mobile nav toggle
   - Friendly contact form handler (no backend; demo only)
   ========================================================================== */

(function () {
  "use strict";

  /* ----- Mobile navigation toggle --------------------------------------- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu when a link is clicked (nice on phones)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- Contact form (demo handler) ------------------------------------ */
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");

  if (form && note) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = (form.querySelector("#name") || {}).value || "";
      name = name.trim();

      // Simple validation — keep it friendly
      var email = (form.querySelector("#email") || {}).value || "";
      var message = (form.querySelector("#message") || {}).value || "";

      if (!name || !email || !message) {
        note.hidden = false;
        note.textContent = "Oops — please fill in your name, email, and a message.";
        note.style.color = "#C45B3D";
        return;
      }

      // Demo: pretend we sent it
      note.hidden = false;
      note.textContent =
        "Thank you, " + name + "! Your message is on its way. 💌 I'll be in touch soon.";
      note.style.color = "#3a7a3a";
      form.reset();
    });
  }
})();
