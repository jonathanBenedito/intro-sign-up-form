function validateForm(event) {
    event.preventDefault();
    const inputs = event.target.querySelectorAll('.sign-input');
    
    for(let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const field = input.closest('.field');

        if (!input.value) {
            field.classList.add('invalid');
        } else if (input.type === 'email') {
            validateEmail(input);
        } else {
            field.classList.remove('invalid');
        }
    }
}

function validateEmail(input) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const field = input.closest('.field');

    if (input.value.match(validRegex)) {
        field.classList.remove('invalid');
    } else { 
        field.querySelector('.input-feedback').innerHTML = "Looks like this is not an email";
    }
}