// script.js
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered password
    var enteredPassword = document.getElementById("password").value;
  
    // Define the correct password
    var correctPassword = "your_password";
  
    // Compare the entered password with the correct password
    if (enteredPassword === correctPassword) {
      window.location.href = "hunter_data.html"; // Redirect to the secret page
    } else {
      alert("Incorrect password. Please try again.");
    }
  });