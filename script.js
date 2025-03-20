// Add interactivity to the contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Please fill out all required fields.');
        event.preventDefault();
    } else {
        alert('Thank you for your message!');
    }
});