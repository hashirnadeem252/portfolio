// Add interactivity if needed
// Example: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  //send message
  const form = document.querySelector('.contact form');
const messageDiv = document.querySelector('.contact .message');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
    },
  });

  if (response.ok) {
    messageDiv.textContent = 'Message sent successfully!';
    messageDiv.classList.add('success');
    messageDiv.classList.remove('error');
    form.reset(); // Clear the form
  } else {
    messageDiv.textContent = 'Oops! Something went wrong. Please try again.';
    messageDiv.classList.add('error');
    messageDiv.classList.remove('success');
  }

  // Hide message after 5 seconds
  setTimeout(() => {
    messageDiv.textContent = '';
    messageDiv.classList.remove('success', 'error');
  }, 5000);
});




//responsive
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});