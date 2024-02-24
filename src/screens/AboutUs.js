import React, { useEffect } from 'react';

// Welcome message for Zenith AI Aggregator
const welcomeMessage = `Welcome to Hire Hunt, where cutting-edge artificial intelligence meets job profile analytics. Log in to access advanced features. Explore the Power of AI in Aggregating and Analyzing Job Profiles.`;

// Object containing company information
const companyInfo = {
    name: "Zenith AI Aggregator",
    slogan: "Power of AI in Aggregating and Analyzing Job Profiles",
    mission: "Our mission is to revolutionize the way job profiles are analyzed and aggregated using advanced artificial intelligence techniques.",
    vision: "We envision a future where AI-driven insights streamline hiring processes and empower organizations to make data-driven decisions.",
    values: ["Innovation", "Excellence", "Integrity", "Collaboration"]
};

// Function to display company information
function displayCompanyInfo() {
    console.log(`Welcome to ${companyInfo.name}!`);
    console.log(`Slogan: ${companyInfo.slogan}`);
    console.log(`Mission: ${companyInfo.mission}`);
    console.log(`Vision: ${companyInfo.vision}`);
    console.log(`Values: ${companyInfo.values.join(', ')}`);
}

function AboutUs() {
    // Call displayCompanyInfo function to log company information in the console
    useEffect(() => {
        displayCompanyInfo();
    }, []);

    return (
        <div>
            <h1>About Us</h1>
            <p>{welcomeMessage}</p>
            <h2>Company Information:</h2>
            <p><strong>Name:</strong> {companyInfo.name}</p>
            <p><strong>Slogan:</strong> {companyInfo.slogan}</p>
            <p><strong>Mission:</strong> {companyInfo.mission}</p>
            <p><strong>Vision:</strong> {companyInfo.vision}</p>
            <p><strong>Values:</strong> {companyInfo.values.join(', ')}</p>
        </div>
    );
}

export default AboutUs;