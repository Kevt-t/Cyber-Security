// Function to find the job role with the highest number of openings
function getHighestJobOpening(jobData) {
    if (!jobData || jobData.length === 0) return null; // Handle empty data case

    return jobData.reduce((highestJob, job) => {
        return job.openRoles > highestJob.openRoles ? job : highestJob;
    }, jobData[0]);
}

// Export the function for use in other files
export { getHighestJobOpening };
