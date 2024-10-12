// JavaScript for interactive portfolio features

// Scroll smoothly when clicking on navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Change "Hire Me" button color on hover
  const hireMeButton = document.querySelector('.hire-me-btn');
  hireMeButton.addEventListener('mouseover', () => {
    hireMeButton.style.backgroundColor = '#FFD700'; // Change to gold color
  });
  hireMeButton.addEventListener('mouseout', () => {
    hireMeButton.style.backgroundColor = 'darkgreen'; // Revert to original color
  });
  
  // Highlight current section in navigation
  window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav ul li a');
  
    sections.forEach((section) => {
      let sectionTop = section.offsetTop - 50;
      let sectionHeight = section.clientHeight;
      let scrollPos = window.pageYOffset;
  
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  });
  
// Initialize EmailJS with your user ID
emailjs.init('YOUR_EMAILJS_USER_I');

// Contact Form Submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Validate the form
  if (name && email && message) {
    // Sending email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      name: name,
      email: email,
      message: message,
    })
    .then(function(response) {
      alert('Thank you ' + name + '! Your message has been sent.');
      document.querySelector('form').reset(); // Clear the form
    }, function(error) {
      alert('Failed to send message. Please try again later.');
      console.error('Error:', error);
    });
  } else {
    alert('Please fill out all fields before submitting.');
  }
});

  
  // Download CV button hover effect
  const downloadBtn = document.querySelector('.btn');
  downloadBtn.addEventListener('mouseover', () => {
    downloadBtn.style.backgroundColor = '#FFD700'; // Change to gold on hover
  });
  downloadBtn.addEventListener('mouseout', () => {
    downloadBtn.style.backgroundColor = 'darkgreen'; // Revert on mouse out
  });
  

 