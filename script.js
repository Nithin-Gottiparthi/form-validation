var errormessage = "";
        var missingfields = "";
        function isEmail(email) {
            var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
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

            if (isEmail($("#Email").val()) == false) {
                errormessage += "<p>Please enter a valid email address.</p>";
            }
            if ($.isNumeric($("#Phoneno").val()) == false) {
                errormessage += "<p>Please enter a valid phone number.</p>";
            }
            if ($("#Password").val() != $("#confirmpassword").val()) {
                errormessage += "<p>Password and confirm password do not match.</p>";
            }

            if (errormessage == "" && missingfields == "") {
                alert("Form submitted successfully!");
            }
            else {
                $("#error").html(errormessage + missingfields);

            }
        });
