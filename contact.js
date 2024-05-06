function validateForm(event) {
    event.preventDefault(); //prevent the form from auto submit

    //set variable

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");

    //reset previous 

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    //validate name
if (name.trim() ==="") {
    nameError.innerHTML = "Enter name";
    return;
}

//validate email
if (email.trim() ==="") {
    emailError.innerHTML = "Enter Email";
    return;
}

else if (!isValidEmail(email)) {
    emailError.innerHTML = "Invalid Email Address";
    return;
}

//validate message
if (message.trim() ==="") {
    messageError.innerHTML = "Message is required";
    return;
}

//if everything is valid

alert("YOUVE submitted the form")

//validate the email Address
function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}
}

