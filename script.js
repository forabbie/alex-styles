// Get portfolio modal elements
const portfolioModal = document.getElementById("portfolioModal");
const portfolioCloseBtn = portfolioModal.querySelector(".close");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

// Get all portfolio items
const portfolioItems = document.querySelectorAll(".portfolio-item");

// Add click event to each portfolio item
portfolioItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Get data attributes
    const imageSrc = item.getAttribute("data-image");
    const title = item.getAttribute("data-title");
    const description = item.getAttribute("data-description");

    // Set modal content
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Display the modal
    portfolioModal.style.display = "flex";
  });
});

// Close portfolio modal when the close button is clicked
portfolioCloseBtn.addEventListener("click", () => {
  portfolioModal.style.display = "none";
});

// Close portfolio modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === portfolioModal) {
    portfolioModal.style.display = "none";
  }
});

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
