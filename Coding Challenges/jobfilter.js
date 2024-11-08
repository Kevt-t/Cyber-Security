// Function to filter jobs by experience requirement
function getJobsByExperience(jobData, experience) {
    return jobData.filter(job => job.experienceReq.includes(experience));
}

// Export the function to use in other files
export { getJobsByExperience };