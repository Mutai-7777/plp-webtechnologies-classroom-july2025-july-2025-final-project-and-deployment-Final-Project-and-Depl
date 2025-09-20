// Image Slider
let slideIndex = 0;
function showSlides() {
  let slides = document.querySelectorAll(".slider img");
  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3s
}
showSlides();

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name && email && message) {
    formMessage.textContent = "✅ Thank you for contacting us!";
    formMessage.style.color = "green";
    this.reset();
  } else {
    formMessage.textContent = "❌ Please fill all fields.";
    formMessage.style.color = "red";
  }
});
