
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // In a real application, we would send this data to a server for authentication
    // For this demo, we'll simulate a successful login
    
    // Simple validation
    if (!email || !password) {
      showToast("Please fill in all fields", "error");
      return;
    }
    
    // Simulate login process
    showToast("Logging in...", "info");
    
    // Simulate a delay for "processing"
    setTimeout(function() {
      // Simulate successful login
      showToast("Login successful!", "success");
      
      // Redirect to home page after successful login
      setTimeout(function() {
        window.location.href = "index.html";
      }, 1000);
    }, 1500);
  });
});
