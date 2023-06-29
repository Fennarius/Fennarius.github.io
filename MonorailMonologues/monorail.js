// script.js
document.getElementById("passwordForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the entered password
  var enteredPassword = document.getElementById("password").value;
  
  // Define the correct passwords and their corresponding pages
  var passwordPageMap = {
  "Fireworks": "MonorailWelcome.html",
  // Add more password-page mappings as needed
  };
  
  // Check if the entered password is in the password-page map
  if (enteredPassword in passwordPageMap) {
  var page = passwordPageMap[enteredPassword];
  window.location.href = page; // Redirect to the corresponding page
  } else {
  alert("Incorrect password. Please try again.");
  }
  });