// Initialize EmailJS with your public key
emailjs.init("-Oe4UTz9H-mXh9tFv");  // Replace with your actual EmailJS public user ID

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Define the template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "SANDESH S SANSHI",
        message: message,
    };

    // Get the submit button and change its state
    const submitButton = event.target.querySelector("input[type='submit']");
    submitButton.disabled = true;
    submitButton.value = "Sending...";

    // Send the email
    emailjs
        .send("service_hhygwb6", "template_4cdb7dk", templateParams)
        .then(
            (response) => {
                console.log("Success:", response);
                alert("Email sent successfully!");
                resetForm();
            },
            (error) => {
                console.error("Error:", error);
                alert("Failed to send email. Please try again later.");
            }
        )
        .finally(() => {
            // Re-enable the submit button
            submitButton.disabled = false;
            submitButton.value = "SUBMIT";
        });
}

// Reset form fields
function resetForm() {
    document.getElementById("contact-form").reset();
    console.log("Form reset successfully.");
}
