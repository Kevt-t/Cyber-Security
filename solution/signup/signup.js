// Listen for changes in the "Position" dropdown
document.getElementById("position").addEventListener("change", function () {
    const position = this.value; // Get the selected position value
    const extraFieldContainer = document.getElementById("extra-field-container"); // Container for the extra field
    const extraLabel = document.getElementById("extra-label"); // Label for the extra field
    const extraField = document.getElementById("extra-field"); // Input field for the extra information

    // Determine the extra field label and placeholder based on the selected position
    if (position === "student") {
        extraLabel.textContent = "School Name:"; // Set label text for students
        extraField.placeholder = "Enter your school name"; // Set placeholder for students
        extraFieldContainer.style.display = "block"; // Show the extra field container
    } else if (position === "employed" || position === "employer") {
        extraLabel.textContent = "Company:"; // Set label text for employed/employers
        extraField.placeholder = "Enter your company name"; // Set placeholder for employed/employers
        extraFieldContainer.style.display = "block"; // Show the extra field container
    } else {
        extraFieldContainer.style.display = "none"; // Hide the extra field container if no position is selected
    }
});

// Listen for the form submission event
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Collect all the form values
    const fullName = document.getElementById("full-name").value; // Full Name field value
    const email = document.getElementById("email").value; // Email field value
    const password = document.getElementById("password").value; // Password field value
    const position = document.getElementById("position").value; // Position dropdown value
    const extraField = document.getElementById("extra-field").value; // Extra field value (School/Company)

    // Create an object to store user data
    const userData = {
        fullName: fullName, // Store Full Name
        email: email, // Store Email
        password: password, // Store Password
        position: position, // Store Position
    };

    // Add extra data based on the selected position
    if (position === "student") {
        userData.school = extraField; // Store School Name for students
    } else if (position === "employed" || position === "employer") {
        userData.company = extraField; // Store Company Name for employed/employers
    }

    // Save the user data to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect the user to the dashboard page
    window.location.href = "../dashboard/dashboard.html";
});
    