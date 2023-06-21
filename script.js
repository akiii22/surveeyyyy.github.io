// Get references to the buttons
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
let moveButton = true; // Flag to indicate if the button should move

// Function to handle "No" button click
function handleNoButtonClick() {
  // Apply a CSS class to the "No" button to move it to a different side
  noButton.classList.add('move-right');
}

// Function to handle "Yes" button click
function handleYesButtonClick() {
  // Remove the CSS class from the "No" button to stop it from moving
  noButton.classList.remove('move-right');
  moveButton = false; // Stop moving the button

  // Show an alert message
  alert('Thank you, See youuuuuu!😉🤍');
}

// Function to continuously move the "No" button
function moveNoButton() {
  if (moveButton) {
    // Add your desired code to move the button here
    const currentPosition = parseInt(noButton.style.left) || 0;
    noButton.style.left = currentPosition + 1 + 'px';

    // Call the function again after a delay
    requestAnimationFrame(moveNoButton);
  }
}

// Add event listeners to the buttons
noButton.addEventListener('click', handleNoButtonClick);
yesButton.addEventListener('click', handleYesButtonClick);

// Start moving the "No" button when the page loads
moveNoButton();


