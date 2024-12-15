function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_n2876ky", "template_cut3c18", parms)
    .then(function(response) {
        alert("Email sent!");
        console.log("SUCCESS!", response.status, response.text);
    })
    .catch(function(error) {
        alert("Failed to send email. Please try again.");
        console.error("FAILED...", error);
    });
}