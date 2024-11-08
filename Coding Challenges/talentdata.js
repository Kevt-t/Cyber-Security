// main.js

// Import the function from jobFilter.js
import { getJobsByExperience } from 'jobFilter.js';

// Define your jobData array
const jobData = [
    { jobRole: "Cybersecurity Analyst", experienceReq: [1, 2, 3], openRoles: 32000 },
    { jobRole: "Threat Intelligence Analyst", experienceReq: [2, 3, 4], openRoles: 15000 },
    { jobRole: "Cloud Security Engineer", experienceReq: [3, 4, 5], openRoles: 25000 },
    { jobRole: "Incident Response Manager", experienceReq: [4, 5, 6], openRoles: 18000 },
    { jobRole: "Governance & Compliance Specialist", experienceReq: [5], openRoles: 10000 },
    { jobRole: "Security Architect", experienceReq: [7], openRoles: 8000 }
];

// Use the function to find jobs requiring 3 years of experience
const jobsFor3YearsExperience = getJobsByExperience(jobData, 3);
console.log(jobsFor3YearsExperience);









