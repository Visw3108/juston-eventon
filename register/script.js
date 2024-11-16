// Password show/hide functionality
const passwordFields = document.querySelectorAll('.password');
const toggleIcons = document.querySelectorAll('.hide-show');

toggleIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        // Toggle between showing and hiding the password
        if (passwordFields[index].type === "password") {
            passwordFields[index].type = "text";
            icon.classList.replace('bx-hide', 'bx-show');
        } else {
            passwordFields[index].type = "password";
            icon.classList.replace('bx-show', 'bx-hide');
        }
    });
});
