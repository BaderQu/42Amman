const themeBtn = document.getElementById("themeBtn");
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
const avatar = document.getElementById("avatar");
const photoBtn = document.getElementById("photoBtn");

// Theme switcher
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light mode";
  } else {
    themeBtn.textContent = "Dark mode";
  }
});

// Contact form
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formMsg.textContent = "Thanks! Your message was received.";
  contactForm.reset();
});

// Profile photo switcher
const photos = [
  { src: "assets/photo.jpg", alt: "Photo of Bader Al-Qutub" },
  { src: "assets/photo2.jpg", alt: "Second photo of Bader Al-Qutub" }
];
let currentPhoto = 0;

photoBtn.addEventListener("click", function () {
  avatar.classList.add("fade");

  setTimeout(function () {
    currentPhoto = (currentPhoto + 1) % photos.length;
    avatar.src = photos[currentPhoto].src;
    avatar.alt = photos[currentPhoto].alt;
    avatar.classList.remove("fade");
  }, 300);
});
