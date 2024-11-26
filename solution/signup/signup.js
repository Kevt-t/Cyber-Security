// Form Submission Event Listener
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    // Clear previous messages
    message.textContent = "";

    // Basic validation
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        message.textContent = "All fields are required!";
        return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        message.textContent = "Please enter a valid email address!";
        return;
    }

    // Password length validation
    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters long!";
        return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
    }

    // Save user data to local storage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    // Success message and redirection
    message.textContent = "Registration successful!";
    message.style.color = "green";

    setTimeout(() => {
        window.location.href = "dashboard.html"; // Redirect to dashboard
    }, 1000);
});
