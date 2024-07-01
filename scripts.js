document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Simple validation
    if (name && email) {
        document.getElementById('message').innerText = Thank you, ${name}! You've successfully registered with the email ${email}.;
    } else {
        document.getElementById('message').innerText = 'Please fill in both fields.';
    }
});
