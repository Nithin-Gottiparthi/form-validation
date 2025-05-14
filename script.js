$(document).ready(function () {
    // Toggle password visibility
    $('#togglePassword').click(function () {
        const passwordField = $('#password');
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        $(this).text(type === 'password' ? 'Show' : 'Hide');
    });

    // Validate form on submit
    $('#userForm').submit(function (e) {
        e.preventDefault();
        $('#messageBox').hide().removeClass('error success');

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const password = $('#password').val();

        let errors = [];

        // Name validation
        if (!name) errors.push("Name is required.");

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) errors.push("Invalid email format.");

        // Phone number validation
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) errors.push("Phone number must be exactly 10 digits.");

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            errors.push("Password must be at least 8 characters, include uppercase, lowercase, and a number.");
        }

        // Display errors or success
        if (errors.length > 0) {
            $('#messageBox').addClass('error').html(errors.join("<br>")).fadeIn();
        } else {
            $('#messageBox').addClass('success').text("Form submitted successfully!").fadeIn();
            this.reset(); // optional: reset form
        }
    });
});
