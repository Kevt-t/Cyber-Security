// Load user data from local storage
document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("userName");

    if (!userName) {
        // If no user is logged in, redirect to the registration page
        window.location.href = "registration.html";
    } else {
        document.getElementById("userName").textContent = userName;
    }
});

// Logout function
document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    window.location.href = "registration.html";
});
