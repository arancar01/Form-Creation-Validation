// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Select form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add form submission event listener
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Retrieve and trim user inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Call the validateForm function
        const { isValid, messages } = validateForm(username, email, password);

        // Display feedback
        feedbackDiv.style.display = 'block';  // Show the feedback section
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Join error messages with <br> for line breaks
            feedbackDiv.style.color = '#dc3545'; // Red color for errors
        }
    });
});

// Function to validate the form inputs
function validateForm(username, email, password) {
    let isValid = true;
    const messages = [];

    // Username validation
    if (username.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long.');
    }

    // Email validation
    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push('Please enter a valid email address.');
    }

    // Password validation
    if (password.length < 8) {
        isValid = false;
        messages.push('Password must be at least 8 characters long.');
    }

    return { isValid, messages };
}
