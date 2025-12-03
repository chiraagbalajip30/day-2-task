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

// 3. Theme Toggle Functionality + Persistent with Local Storage
function toggleTheme() {
  const body= document. body;
  const icon= document.querySelector("#themeIcon");

  // Toggle the class
  body.classList.toggle("dark-theme");

  // Save preference to Local Storage
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
  else {
    localStorage.setItem("theme", "light");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon"); 
  }
}


// Apply saved theme when page loads
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const icon = document.querySelector("#themeIcon");

  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    if (icon) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  } else {
    // Default is light
    body.classList.remove("dark-theme");
    if (icon) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }
};