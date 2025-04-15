window.addEventListener("scroll", () => {
    const div = document.getElementById("about");
    const scrollPosition = window.scrollY;
    const triggerPosition = 150; // Adjust this to the scroll position where you want the effect
  
    if (scrollPosition > triggerPosition) {
      div.style.opacity = "1"; // Make it visible
      div.style.transform = "translateX(0)"; // Bring it into its default position
    } else {
      div.style.opacity = "0.5"; // Keep it hidden
      div.style.transform = "translateX(-100px)"; // Keep it off-screen (adjust as needed)
    }
  });

  window.addEventListener("scroll", () => {
    const div = document.getElementById("chapters");
    const scrollPosition = window.scrollY;
    const triggerPosition = 530; // Adjust this to the scroll position where you want the effect
  
    if (scrollPosition > triggerPosition) {
      div.style.opacity = "1"; // Make it visible
      div.style.transform = "translateX(0)"; // Bring it into its default position
    } else {
      div.style.opacity = "0.5"; // Keep it hidden
      div.style.transform = "translateX(100px)"; // Keep it off-screen (adjust as needed)
    }
  });

  window.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("events");
    div.classList.add("opacity-100");
  });

  window.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("body");
    div.classList.add("opacity-100");
  });

  document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth',
    });
  });

  document.querySelector('a[href="#chapters"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#chapters').scrollIntoView({
      behavior: 'smooth',
    });
  });

  document.querySelector('a[href="#sponsors"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#sponsors').scrollIntoView({
      behavior: 'smooth',
    });
  });
  
  document.querySelector('a[href="#contacts"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contacts').scrollIntoView({
      behavior: 'smooth',
    });
  });
  
  