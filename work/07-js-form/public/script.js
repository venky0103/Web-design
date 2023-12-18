"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const nameEl = document.querySelector('.name');
    const emailEl = document.querySelector('.email');
    const email2El = document.querySelector('.email2');
    const tierEl = document.getElementById('tier'); 
    const formEl = document.getElementById('form');

    function isNotEmpty(value) {
        return value.trim() !== "";
    }

    function areEmailsEqual(email, email2) {
        return email === email2;
    }

    function validateForm() {
        const nameValue = nameEl.value;
        const emailValue = emailEl.value;
        const email2Value = email2El.value;
        const tierValue = tierEl.value;

        let isValid = true;

        // Check if name is empty
        if (!isNotEmpty(nameValue)) {
            isValid = false;
            nameEl.classList.add('error');
            document.getElementById('name-error').style.visibility = 'visible';
        } else {
            document.getElementById('name-error').style.visibility = 'hidden';
        }

        // Check if email1 is empty
        if (!isNotEmpty(emailValue)) {
            isValid = false;
            emailEl.classList.add('error');
            document.getElementById('email-error').style.visibility = 'visible';
        } else {
            document.getElementById('email-error').style.visibility = 'hidden';
        }

        // Check if email2 is empty or not equal to email1
        if (!isNotEmpty(email2Value) || !areEmailsEqual(emailValue, email2Value)) {
            isValid = false;
            email2El.classList.add('error');
            document.getElementById('confirm-email-error2').style.visibility = 'visible';
        } else {
            document.getElementById('confirm-email-error2').style.visibility = 'hidden';
        }

        // Check if tier is selected
        if (tierValue === "") {
            isValid = false;
            tierEl.classList.add('error'); 
            document.getElementById('tier-error').style.visibility = 'visible'; 
        } else {
            document.getElementById('tier-error').style.visibility = 'hidden';
        }

        return isValid;
    }

    formEl.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();
        }
    });

    function removeErrorClass(inputElement) {
        inputElement.classList.remove('error');
    }

    function handleInputValidation(inputElement) {
        const value = inputElement.value;
        if (isNotEmpty(value)) {
            removeErrorClass(inputElement);
            document.getElementById(inputElement.id + '-error').style.visibility = 'hidden';
        } else {
            inputElement.classList.add('error');
            document.getElementById(inputElement.id + '-error').style.visibility = 'visible';
        }
    }

    nameEl.addEventListener('input', (e) => {
        handleInputValidation(e.target);
    });

    emailEl.addEventListener('input', (e) => {
        handleInputValidation(e.target);
    });

    email2El.addEventListener('input', (e) => {
        handleInputValidation(e.target);
    });

    tierEl.addEventListener('change', (e) => { 
        handleInputValidation(e.target);
    });

    [nameEl, emailEl, email2El, tierEl].forEach((input) => {
        input.addEventListener('blur', (e) => {
            handleInputValidation(e.target);
        });
    });
})