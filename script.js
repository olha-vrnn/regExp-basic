const formRegistration = document.forms[0];
const firstName = formRegistration.elements['firstName'];
const lastName = formRegistration.elements['lastName'];
const userEmail = formRegistration.elements['email'];
const userPassword = formRegistration.elements['password'];
const checkbox = formRegistration.elements['agree-checkbox'];
const signUpButton = formRegistration.elements['signup-btn'];

const finishCreated = document.querySelector('.container-2');

const startButton = document.querySelector('.start-btn');

// RegEx

let NameRegEx = /^[a-zA-Z]{1,20}$/;
let userEmailRegEx = /^[a-zA-Z0-9-.]+@[a-zA-Z]+\.[a-zA-Z]+$/;
let userPasswordRegEx = /^\w{8,15}$/;

// Validation 'First Name'

firstName.addEventListener('input', () => {

    firstName.style.border = '2px solid lightblue'

    let testFirstName = NameRegEx.test(firstName.value);
    let check = document.getElementById('first-name-box')

    if (testFirstName) {
        check.classList.add('fa-check');
        check.classList.remove('fa-xmark');
        document.getElementById('first-name-alert').style.display = 'none';
    } else {
        check.classList.add('fa-xmark');
        check.classList.remove('fa-check');
        document.getElementById('first-name-alert').innerHTML = 'Please provide a valid First name.'
        document.getElementById('first-name-alert').style.display = 'inline';
    }

    document.getElementById('firstName-label').style.top='-10px';
    document.getElementById('firstName-label').style.fontSize='12px';
});

firstName.addEventListener('change', () => {
    let testFirstName = NameRegEx.test(firstName.value);

    if (testFirstName) {
        firstName.style.border = '2px solid rgb(21, 193, 136)';
    } else {
        firstName.style.border = '2px solid red';
    }

});

// Validation 'Last Name'

lastName.addEventListener('input', () => {

    lastName.style.border = '2px solid lightblue';

    let testLastName = NameRegEx.test(lastName.value);
    let check = document.getElementById('last-name-box');

    if (testLastName) {
        check.classList.add('fa-check');
        check.classList.remove('fa-xmark');
        document.getElementById('last-name-alert').style.display = 'none';
    } else {
        check.classList.add('fa-xmark');
        check.classList.remove('fa-check');
        document.getElementById('last-name-alert').innerHTML = 'Please provide a valid Last name.';
        document.getElementById('last-name-alert').style.display = 'inline';
    }

    document.getElementById('lastName-label').style.top='-10px';
    document.getElementById('lastName-label').style.fontSize='12px';
});

lastName.addEventListener('change', () => {
    let testLastName = NameRegEx.test(lastName.value);

    if (testLastName) {
        lastName.style.border = '2px solid rgb(21, 193, 136)'
    } else {
        lastName.style.border = '2px solid red'
    }
});

// Validation 'Email'

userEmail.addEventListener('input', () => {


    userEmail.style.border = '2px solid lightblue'

    let testEmail = userEmailRegEx.test(userEmail.value);
    let check = document.getElementById('email-box');

    if (testEmail) {
        check.classList.add('fa-check');
        check.classList.remove('fa-xmark');
        document.getElementById('email-alert').style.display = 'none';
    } else {
        check.classList.add('fa-xmark');
        check.classList.remove('fa-check');
        document.getElementById('email-alert').innerHTML = 'Please provide a valid Email address.'
        document.getElementById('email-alert').style.display = 'inline';
    }

    document.getElementById('email-label').style.top='-10px';
    document.getElementById('email-label').style.fontSize='12px';
});

userEmail.addEventListener('change', () => {
    let testEmail = userEmailRegEx.test(userEmail.value);

    if (testEmail) {
        userEmail.style.border = '2px solid rgb(21, 193, 136)'
    } else {
        userEmail.style.border = '2px solid red'
    }
});

// Validation 'Password'

userPassword.addEventListener('input', () => {

    userPassword.style.border = '2px solid lightblue'

    let testPassword = userPasswordRegEx.test(userPassword.value);
    let check = document.getElementById('password-box');

    if (testPassword) {
        check.classList.add('fa-check');
        check.classList.remove('fa-xmark');
        document.getElementById('password-alert').style.display = 'none';
    } else {
        check.classList.add('fa-xmark');
        check.classList.remove('fa-check');
        document.getElementById('password-alert').innerHTML = 'Please provide a valid Password.'
        document.getElementById('password-alert').style.display = 'inline';
    }

    document.getElementById('password-label').style.top='-10px';
    document.getElementById('password-label').style.fontSize='12px';
});

userPassword.addEventListener('change', () => {
    let testPassword = userPasswordRegEx.test(userPassword.value);

    if (testPassword) {
        userPassword.style.border = '2px solid rgb(21, 193, 136)'
    } else {
        userPassword.style.border = '2px solid red'
    }
});


checkbox.addEventListener('click', () => {

    let testFirstName = NameRegEx.test(firstName.value);
    let testLastName = NameRegEx.test(lastName.value);
    let testEmail = userEmailRegEx.test(userEmail.value);
    let testPassword = userPasswordRegEx.test(userPassword.value);

    if (testFirstName && testLastName && testEmail && testPassword) {
        signUpButton.disabled = false;
        signUpButton.style.cursor = 'pointer';
        signUpButton.classList.add('signup');
    }

    if (checkbox.checked === false) {
        signUpButton.disabled = true;
        signUpButton.style.cursor = 'auto';
        signUpButton.classList.remove('signup');
    }
});

signUpButton.addEventListener('click', () => finishCreated.style.display = 'flex');

startButton.addEventListener('click', () => {
    finishCreated.style.display = 'none';
    formRegistration.reset();
    signUpButton.classList.remove('signup');
    signUpButton.disabled = true;
    firstName.style.border = '1px solid rgb(181, 181, 181)';
    lastName.style.border = '1px solid rgb(181, 181, 181)';
    userEmail.style.border = '1px solid rgb(181, 181, 181)';
    userPassword.style.border = '1px solid rgb(181, 181, 181)';
    document.querySelectorAll('.fa-solid').forEach(element => {
        element.classList.remove('fa-check');
    });
    document.querySelectorAll('.input-label').forEach(element => {
        element.style.top='0px';
        element.style.fontSize = '16px';
    });
});




