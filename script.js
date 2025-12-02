// 1. BUTTON MESSAGE
function showMessage() {
  alert("Hello! This is a JavaScript alert message.");
}

//  2. FORM VALIDATION
function validateForm(event) {
  event.preventDefault(); // Prevent form submission or page reload

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("All fields are required.");
    return false;
  }

  // simple email format check
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

// 3. Theme Toggle Functionality
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("themeIcon");

  // Toggle dark class
  body.classList.toggle("dark-theme");

  // Change icon based on theme
  if (body.classList.contains("dark-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}
