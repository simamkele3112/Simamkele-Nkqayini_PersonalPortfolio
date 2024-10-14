// 1. CV Download - Ensure CV is downloadable for everyone
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default behavior

    // Link to a publicly accessible CV (host on a server or cloud storage)
    window.open('https://drive.google.com/file/d/1zukJisDGoy4nZCvL7Lk9GJ2G294AgyhF/view?usp=drivesdk', '_blank');
});

// 2. Form Submission - Using EmailJS to send form data via email
(function() {
    emailjs.init("lGxu8sBQRwS20IN8f"); // Replace with your EmailJS user ID
})();



// emailjs.init('YOUR_EMAILJS_USER_ID');

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // EmailJS sending
    emailjs.send("service_8zv6pum", "template_j14fers", {
      name: name,
      email: email,
      message: message,
    })
    .then(function(response) {
      document.getElementById("success-message").style.display = "block";
      document.getElementById("contact-form").reset();
    }, function(error) {
      document.getElementById("error-message").style.display = "block";
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


