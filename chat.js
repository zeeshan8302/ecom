    // const form = document.querySelector('form');
    // const nameInput = document.querySelector('#name');
    // const emailInput = document.querySelector('#email');
    // const messageInput = document.querySelector('#message');

    // form.addEventListener('submit', (event) => {
    // event.preventDefault();
    // validateForm();
    // });

    // function validateForm() {
    // const nameValue = nameInput.value.trim();
    // const emailValue = emailInput.value.trim();
    // const messageValue = messageInput.value.trim();

    // if (nameValue === '') {
    //     showError(nameInput, 'Please enter your name');
    // } else {
    //     showSuccess(nameInput);
    // }

    // if (emailValue === '') {
    //     showError(emailInput, 'Please enter your email');
    // } else if (!isValidEmail(emailValue)) {
    //     showError(emailInput, 'Please enter a valid email address');
    // } else {
    //     showSuccess(emailInput);
    // }

    // if (messageValue === '') {
    //     showError(messageInput, 'Please enter a message');
    // } else {
    //     showSuccess(messageInput);
    //     form.reset();
    //     alert('Thank you for your message!');
    // }
    // }

    // function showError(input, message) {
    // const formControl = input.parentElement;
    // formControl.classList.remove('success');
    // formControl.classList.add('error');
    // const errorMessage = formControl.querySelector('small');
    // errorMessage.textContent = message;
    // }

    // function showSuccess(input) {
    // const formControl = input.parentElement;
    // formControl.classList.remove('error');
    // formControl.classList.add('success');
    // }

    // function isValidEmail(email) {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return emailRegex.test(email);
    // }
// script.js

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  // your validation code here
}

function showError(input, message) {
  // your error message display code here
}

function showSuccess(input) {
  // your success message display code here
}

function isValidEmail(email) {
  // your email validation code here
}
