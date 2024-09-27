// 1. CV Download - Ensure CV is downloadable for everyone
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default behavior

    // Link to a publicly accessible CV (host on a server or cloud storage)
    window.open('https://drive.google.com/file/d/1zukJisDGoy4nZCvL7Lk9GJ2G294AgyhF/view?usp=drivesdk', '_blank');
});

// 2. Form Submission - Using EmailJS to send form data via email
(function() {
    emailjs.init("your_public_key_here"); // Replace with your EmailJS user ID
})();

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("your_service_id", "your_template_id", {
        from_name: name,
        from_email: email,
        message_html: message
    }).then(function(response) {
        alert("Message sent successfully!"); // Success alert
    }, function(error) {
        alert("Failed to send message. Please try again later."); // Error alert
    });
});

// 3. Add New Project Dynamically
document.addEventListener('DOMContentLoaded', function() {
    const projectsSection = document.querySelector('#projects ul');

    // Add new project function
    function addProject(title, description) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${title}</strong> — ${description}`;
        projectsSection.appendChild(li);
    }

    // Example of adding a project dynamically (you can call this function when needed)
    addProject('New AI-Powered Web Application', 'A dynamic AI-based web app for personalized user experiences.');

    // You can call addProject() function to add more projects as you complete them.
});
