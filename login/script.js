
const links = document.querySelectorAll(".link");
const forms = document.querySelector(".forms");
const showHide = document.querySelectorAll(".hide-show");

showHide.forEach(showicon=>{
    showicon.addEventListener("click", ()=>{
        let field_password = showicon.parentElement.parentElement.querySelectorAll(".password");

        field_password.forEach(password=>{
            if(password.type === 'password'){
                password.type = 'text';
                showHide.classList.replace("bx-hide", "bx-show");
            }
            password.type = "password";
            showHide.classList.replace("bx-show", "bx-hide");
        })
    })
})


links.forEach(link =>{
    link.addEventListener("click", e=>{
        e.preventDefault();
        forms.classList.toggle("Show-Signup");
    })
})

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const loginForm = document.querySelector('.form.login form');
    const signupForm = document.querySelector('.form.signup form');
    const popup = document.createElement('div');

    // Show/Hide password
    const hideShowIcons = document.querySelectorAll('.hide-show');
    hideShowIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const passwordInput = icon.previousElementSibling;
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                icon.classList.replace('bx-hide', 'bx-show');
            } else {
                passwordInput.type = "password";
                icon.classList.replace('bx-show', 'bx-hide');
            }
        });
    });

    // Validation Function
    function validateForm(fields) {
        let isValid = true;
        fields.forEach(field => {
            if (field.value.trim() === '') {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });
        return isValid;
    }

    // Create Popup
    function showPopup(message) {
        popup.innerHTML = `
            <div class="popup-content">
                <span class="popup-message">${message}</span>
                <button class="popup-close">Close</button>
            </div>
        `;
        popup.classList.add('popup');
        document.body.appendChild(popup);
        
        // Close popup
        document.querySelector('.popup-close').addEventListener('click', () => {
            popup.classList.remove('active');
            setTimeout(() => {
                popup.remove();
            }, 300);
        });

        // Show popup
        popup.classList.add('active');
    }

    // Handle Login Submit
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = loginForm.querySelector('input[type="email"]');
        const password = loginForm.querySelector('input[type="password"]');

        const isValid = validateForm([email, password]);
        if (isValid) {
            showPopup('Login successful!');
            loginForm.reset();
        }
    });

    // Handle Signup Submit
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = signupForm.querySelector('input[type="email"]');
        const password = signupForm.querySelector('input[type="password"]');
        const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1];

        const isValid = validateForm([email, password, confirmPassword]);

        if (isValid) {
            if (password.value === confirmPassword.value) {
                showPopup('Signup successful!');
                signupForm.reset();
            } else {
                confirmPassword.classList.add('error');
                showPopup('Passwords do not match!');
            }
        }
    });
});

