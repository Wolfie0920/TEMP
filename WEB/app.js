// JavaScript for handling modal functionality and form submission

const videoSources = [
    "VIDEOS/vid2.mov",
    "VIDEOS/vid19.mov",
    "VIDEOS/vid16.mov",
    "VIDEOS/vid18.mov"
];

let currentVideoIndex = 0;
const heroVideo = document.getElementById('hero-video');

// Function to load the next video
function loadNextVideo() {
    heroVideo.src = videoSources[currentVideoIndex];
    heroVideo.load();
    heroVideo.play();
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length; // Loop back to the first video
}

// Event listener to load the next video when the current one ends
heroVideo.addEventListener('ended', loadNextVideo);

// Load the first video
loadNextVideo();

// Modal functionality
const contactBtn = document.getElementById('contactBtn');
const donateBtn = document.getElementById('donateBtn');
const contactModal = document.getElementById('contactModal');
const donateModal = document.getElementById('donateModal');
const closeContact = document.getElementById('closeContact');
const closeDonate = document.getElementById('closeDonate');

// Open Contact Us modal
contactBtn.onclick = function() {
    contactModal.style.display = "block";
}

// Open Donate modal
donateBtn.onclick = function() {
    donateModal.style.display = "block";
}

// Close Contact Us modal
closeContact.onclick = function() {
    contactModal.style.display = "none";
}

// Close Donate modal
closeDonate.onclick = function() {
    donateModal.style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
    if (event.target == donateModal) {
        donateModal.style.display = "none";
    }
}

// Handle form submission for Contact Us
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Here you can implement the email sending logic
    // For example, using an email service API or a backend server

    alert(`Thank you, ${name}! Your message has been sent.`);
    contactModal.style.display = "none"; // Close the modal
    this.reset(); // Reset the form
};

// Handle form submission for Donate
document.getElementById('donateForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('donateName').value;
    const email = document.getElementById('donateEmail').value;
    const message = document.getElementById('donateMessage').value;

    // Here you can implement the email sending logic
    // For example, using an email service API or a backend server

    alert(`Thank you, ${name}! Your donation inquiry has been sent.`);
    donateModal.style.display = "none"; // Close the modal
    this.reset(); // Reset the form
};
