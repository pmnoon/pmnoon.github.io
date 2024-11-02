// Function to show only the selected section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    } else {
        console.warn("Section with ID", sectionId, "not found."); // Warn if the section ID is invalid
    }
}
