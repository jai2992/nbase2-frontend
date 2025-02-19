function validate(event) {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");

    const nameErr = document.querySelector('.name-error');
    const emailErr = document.querySelector('.email-error');
    const phoneErr = document.querySelector('.phone-error');

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    phoneErr.innerHTML = "";

    let isValid = true;

    if (name.value === '' || !nameRegex.test(name.value)) {
        nameErr.innerHTML = 'Name is required and should only contain letters and spaces';
        isValid = false;
    }

    if (email.value === '' || !emailRegex.test(email.value)) {
        emailErr.innerHTML = 'Please enter a valid email';
        isValid = false;
    }

    if (phone.value === '' || !phoneRegex.test(phone.value)) {
        phoneErr.innerHTML = 'Phone should be 10 digits';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }

    return isValid;
}
