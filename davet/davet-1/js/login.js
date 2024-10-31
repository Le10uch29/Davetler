document.addEventListener('DOMContentLoaded', function () {
    const admins = [
        { username: 'Elnur', password: '123', lastname: 'Mamedov', quantity: 'Ailəliy'  }
    ];

    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameDisplay = document.getElementById('fullName');
    const quantityDisplay = document.getElementById('quantity');
    const modal = document.getElementById('modal');

    // Show modal on page load by adding the 'open' class
    modal.classList.add('open');

    // Handle login form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        // Check credentials against the admins list
        const admin = admins.find(admin => admin.username === enteredUsername && admin.password === enteredPassword);

        if (admin) {
            // Display username and lastname on successful login
            usernameDisplay.textContent = `${admin.username} ${admin.lastname}`;
            quantityDisplay.textContent = `${admin.quantity}`;

            // Hide the modal after successful login
            modal.classList.remove('open');
        } else {
            alert('Invalid username or password.');
        }
    });
})