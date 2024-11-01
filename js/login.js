document.addEventListener('DOMContentLoaded', function () {
    const admins = [
        { username: 'Elnur', password: '123', lastname: 'Mamedov', quantity: 'Ailəli'  },
        { username: 'Zoya', password: '123', lastname: 'Mamedova', quantity: 'Ailəli'  },
        { username: 'Zakia', password: '123', lastname: 'Mamedova', quantity: 'Ailəli'  },
        { username: 'Mamedhasan', password: '123', lastname: 'Mamedov', quantity: 'xaniminla'  },
        { username: 'Ramin', password: '123', lastname: 'Haciyev', quantity: 'Ailəli'  },
        { username: 'Reshid', password: '123', lastname: 'Mamedova', quantity: ''  },
        { username: 'Fidan', password: '123', lastname: 'Mamedov', quantity: ''  },
        { username: 'Fidan', password: '123', lastname: 'Mamedov', quantity: 'Yoldashniznan'  },
    ];

    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameDisplay = document.getElementById('fullName');
    const quantityDisplay = document.getElementById('quantity');
    const logoutButton = document.getElementById('logoutBtn');
    const modal = document.getElementById('modal');

    // Check if the user is already logged in
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const storedUsername = localStorage.getItem('username');

    if (loggedIn && storedUsername) {
        // If the user is logged in, show their information and hide the modal
        const admin = admins.find(admin => admin.username === storedUsername);
        if (admin) {
            usernameDisplay.textContent = `${admin.username} ${admin.lastname}`;
            quantityDisplay.textContent = `${admin.quantity}`;
            modal.classList.remove('open');
        }
    } else {
        // If not logged in, show the modal
        modal.classList.add('open');
    }

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
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('username', enteredUsername);

            // Hide the modal after successful login
            modal.classList.remove('open');
        } else {
            alert('Invalid username or password.');
        }
    });

    document.getElementById('openLogin').addEventListener("click", function () {
        document.getElementById('modal').classList.add('open') 
     })

    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('loggedIn');
        //localStorage.removeItem('username');
    });
});