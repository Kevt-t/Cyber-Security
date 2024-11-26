// Fetch user data from localStorage
const userData = JSON.parse(localStorage.getItem("userData"));

if (userData) {
    // Display user information
    document.getElementById("user-name").textContent = userData.fullName;
    document.getElementById("user-email").textContent = userData.email;
    document.getElementById("user-position").textContent = userData.position;

    // Add extra information (school or company)
    const extraInfo = document.getElementById("extra-info");
    if (userData.position === "student") {
        extraInfo.innerHTML = `<strong>School:</strong> ${userData.school}`;
    } else if (userData.position === "employed" || userData.position === "employer") {
        extraInfo.innerHTML = `<strong>Company:</strong> ${userData.company}`;
    }
} else {
    // Redirect back to signup if no user data is found
    window.location.href = "../signup/signup.html";
}

// Function to handle redirection to feature pages
function redirectTo(page) {
    window.location.href = page;
}

// Logout button functionality
document.getElementById("logout-button").addEventListener("click", function () {
    // Clear localStorage data
    localStorage.removeItem("userData");
    
    // Redirect to the Index page
    window.location.href = '../index.html';
});
