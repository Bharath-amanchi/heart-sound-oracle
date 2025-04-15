
// Common functions and utilities

// Toggle mobile navigation (if needed)
document.addEventListener('DOMContentLoaded', function() {
  // This function could be expanded for mobile navigation toggle
  console.log('HeartSound AI application loaded');
});

// Function to show a notification/toast message
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  // Display the toast
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  // Remove the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// Add toast styles to the existing styles
const style = document.createElement('style');
style.textContent = `
  .toast {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    background-color: #333;
    color: white;
    border-radius: 4px;
    z-index: 1000;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s;
  }
  
  .toast.show {
    opacity: 1;
    transform: translateY(0);
  }
  
  .toast-info {
    background-color: #0EA5E9;
  }
  
  .toast-success {
    background-color: #22c55e;
  }
  
  .toast-error {
    background-color: #ef4444;
  }
  
  .toast-warning {
    background-color: #f59e0b;
  }
`;

document.head.appendChild(style);
