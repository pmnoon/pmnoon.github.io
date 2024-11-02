// Function to show only the selected section
function showSection(sectionId) {
    console.log("Showing section:", sectionId); // Debugging log
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    } else {
        console.warn("Section with ID", sectionId, "not found."); // Warning if section is missing
    }
}
