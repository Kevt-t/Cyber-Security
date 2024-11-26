// Function to find the job role with the highest number of openings
function getHighestJobOpening(jobData) {
    if (!jobData || jobData.length === 0) return null; // Handle empty data case

    return jobData.reduce((highestJob, job) => {
        return job.openRoles > highestJob.openRoles ? job : highestJob;
    }, jobData[0]);
}

// Example job data
const jobData = [
    { role: 'Cybersecurity Analyst', openRoles: 200 },
    { role: 'Penetration Tester', openRoles: 120 },
    { role: 'Security Consultant', openRoles: 180 },
];

// Display the job with the highest openings
const highestJob = getHighestJobOpening(jobData);
const highestJobRoleElement = document.getElementById("highest-job-role");
if (highestJob) {
    highestJobRoleElement.textContent = `The role with the highest demand is ${highestJob.role} with ${highestJob.openRoles} openings.`;
} else {
    highestJobRoleElement.textContent = "No job data available.";
}

// Example connections data
const connections = [
    "Alice Johnson - Cybersecurity Analyst at TechSecure",
    "Bob Smith - Penetration Tester at SecurityPro",
    "Catherine Lee - Security Consultant at SafeNet",
];

// Populate connections list
const connectionsList = document.getElementById("connections-list");
connections.forEach(connection => {
    const listItem = document.createElement("li");
    listItem.textContent = connection;
    connectionsList.appendChild(listItem);
});

// Export the function for use in other files
export { getHighestJobOpening };
