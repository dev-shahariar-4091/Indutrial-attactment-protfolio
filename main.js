
  // 🧭 Smooth Scroll for Navigation Links
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  // 🌟 Scroll Reveal Animation
  const revealElements = document.querySelectorAll("section");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add("opacity-100", "translate-y-0");
      }
    });
  };
  revealElements.forEach(el => {
    el.classList.add("opacity-0", "translate-y-5", "transition", "duration-700");
  });
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // 📩 Contact Form Submission
  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    if (name && email && message) {
      alert(`Thanks ${name}! Your message has been sent successfully 😊`);
      form.reset();
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });

  // 🔝 Back to Top Button Logic
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.add("hidden");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

