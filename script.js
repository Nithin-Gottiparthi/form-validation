var errormessage = "";
        var missingfields = "";

        function isEmail(email) {
            var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
        }

        // Restrict Phone Number input to digits only
        $("#Phoneno").on("input", function () {
            this.value = this.value.replace(/\D/g, '');
        });

        // Toggle password visibility
        function togglePasswordVisibility(id, toggleBtnId) {
            const input = document.getElementById(id);
            const btn = document.getElementById(toggleBtnId);
            if (input.type === "password") {
                input.type = "text";
                btn.textContent = "Hide";
            } else {
                input.type = "password";
                btn.textContent = "Show";
            }
        }

        $("#submitbutton").click(function () {
            errormessage = "";
            missingfields = "";

            if ($("#Email").val() == "") {
                missingfields += "<p>Email is required.</p>";
            }
            if ($("#Phoneno").val() == "") {
                missingfields += "<p>Phone number is required.</p>";
            }
            if ($("#Password").val() == "") {
                missingfields += "<p>Password is required.</p>";
            }
            if ($("#confirmpassword").val() == "") {
                missingfields += "<p>Confirm password is required.</p>";
            }

            if (!isEmail($("#Email").val())) {
                errormessage += "<p>Please enter a valid email address.</p>";
            }
            if (!$.isNumeric($("#Phoneno").val())) {
                errormessage += "<p>Please enter a valid phone number.</p>";
            }
            if ($("#Password").val() != $("#confirmpassword").val()) {
                errormessage += "<p>Password and confirm password do not match.</p>";
            }

            if (errormessage == "" && missingfields == "") {
                alert("Form submitted successfully!");
                $("#error").html(""); // clear error messages
            } else {
                $("#error").html(errormessage + missingfields);
            }
        });
