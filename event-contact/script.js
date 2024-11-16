document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Contact number validation
    const contact = document.getElementById('contact');
    const contactError = document.getElementById('contactError');
    const contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(contact.value.trim())) {
        contactError.textContent = "Please enter a valid 10-digit contact number.";
        contactError.style.display = "block";
        isValid = false;
    } else {
        contactError.style.display = "none";
    }

    // Address validation
    const address = document.getElementById('address');
    const addressError = document.getElementById('addressError');
    if (address.value.trim() === '') {
        addressError.textContent = "Address is required.";
        addressError.style.display = "block";
        isValid = false;
    } else {
        addressError.style.display = "none";
    }

    // Requirement validation
    const requirement = document.getElementById('requirement');
    const requirementError = document.getElementById('requirementError');
    if (requirement.value.trim() === '') {
        requirementError.textContent = "Please enter your requirement.";
        requirementError.style.display = "block";
        isValid = false;
    } else {
        requirementError.style.display = "none";
    }

    if (isValid) {
        alert("Thank you for contacting us! We will get back to you shortly.");
        document.getElementById('contactForm').reset();
    }
});
