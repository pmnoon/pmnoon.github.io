// Function to toggle the sidebar open and closed
function toggleSidebar() {
    console.log("Toggling sidebar"); // Debugging log
    const sidebar = document.getElementById("sidebar");

    // Toggle the sidebar width between 250px and 0
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

// Function to show only the selected section and hide others
function showSection(sectionId) {
    console.log("Showing section:", sectionId); // Debugging log
    
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    // Remove the hidden class from the selected section to show it
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    } else {
        console.warn("Section with ID", sectionId, "not found."); // Warn if the section ID is invalid
    }

    // Close the sidebar after selecting a section
    toggleSidebar();
}

// Add event listeners for debugging (optional)
// This will help confirm that functions are wired correctly
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    // Log each section link click
    document.querySelectorAll("#sidebar a").forEach(link => {
        link.addEventListener("click", (event) => {
            console.log("Clicked link:", event.target.innerText);
        });
    });
});
