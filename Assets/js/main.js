document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.getElementById("typing");
  const roles = [
    "Software Engineer ",
    "Full Stack Developer ",
    "Web Developer ",
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 100;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      speed = 100;
      setTimeout(typeEffect, 1000); // pause before deleting
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();
});
