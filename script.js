const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Function to handle button click event
document.getElementById("downloadButton").addEventListener("click", function () {
    // URL of the PDF file
    var pdfUrl = "Gaurav Resume.pdf";

    // Create an anchor element to initiate the download
    var anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "Gaurav Resume.pdf"; // Change the file name if needed
    anchor.target = "_blank"; // Open in a new tab
    anchor.style.display = "none";

    // Append the anchor element to the body and trigger the click event
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up: remove the anchor element from the body
    document.body.removeChild(anchor);
});



