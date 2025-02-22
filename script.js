// Get the form and modal elements
const form = document.querySelector("form");
const modal = document.getElementById("successModal");
const closeBtn = document.querySelector(".close");

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Display the modal
  modal.style.display = "flex";

  // Clear the form fields
  form.reset();
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
