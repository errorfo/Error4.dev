document.addEventListener("DOMContentLoaded", () => {

  const bars = document.querySelectorAll(".progress");

  function animateBars() {
    bars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        bar.style.width = bar.dataset.width;
      }
    });
  }

  const reveals = document.querySelectorAll(".reveal");

  function revealElements() {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", () => {
    animateBars();
    revealElements();
  });

  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80 },
        color: { value: "#5eead4" },
        size: { value: 3 },
        move: { speed: 2 }
      }
    });
  }

  const cursor = document.querySelector(".cursor");
  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }

  const typingEl = document.getElementById("typing");
  if (typingEl) {
    const text = ["Ovais Thoker", "Error4", "Web Developer", "Cyber Enthusiast"];
    let i = 0, j = 0, isDeleting = false;

    function type() {
      const current = text[i];
      j = isDeleting ? j - 1 : j + 1;

      typingEl.textContent = current.substring(0, j);

      if (!isDeleting && j === current.length) {
        isDeleting = true;
        return setTimeout(type, 1000);
      }

      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
      }

      setTimeout(type, isDeleting ? 50 : 100);
    }

    type();
  }

  animateBars();
  revealElements();

});
