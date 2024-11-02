// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

// Show only the selected section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');

    // Close the sidebar
    toggleSidebar();
}
