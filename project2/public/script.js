"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const emailEl = document.querySelector('#email');
    const email2El = document.querySelector('#confirm-email'); 

    function isNotEmpty(value) {
        return value.trim() !== "";
    }

    function areEmailsEqual(email, confirm_email) {
        return email === confirm_email;
    }

    function validateForm() {
        document.getElementById('email-error').style.visibility = 'hidden';
        document.getElementById('email-error1').style.visibility = 'hidden';
        document.getElementById('confirm-email-error').style.visibility = 'hidden';
        document.getElementById('confirm-email-error1').style.visibility = 'hidden';
        const emailValue = emailEl.value;
        const email2Value = email2El.value;
        let isValid = true;
        if (!isNotEmpty(emailValue)) {
            emailEl.classList.add('error');
            document.getElementById('email-error').style.visibility = 'visible';
            return false;
        } 

        if(emailValue.indexOf('@') < 0){
            emailEl.classList.add('error');
            document.getElementById('email-error1').style.visibility = 'visible';
            return false;
        } 

        if (!isNotEmpty(email2Value)) {
            email2El.classList.add('error');
            document.getElementById('confirm-email-error').style.visibility = 'visible';
            return false;
        } 
        if(!areEmailsEqual(emailValue, email2Value)){
            email2El.classList.add('error');
            document.getElementById('confirm-email-error1').style.visibility = 'visible';
            return false;
        }
        return isValid;

    
    }

    document.querySelector('.subscribe-button').addEventListener('click', (event) => {
        event.preventDefault();
        if(validateForm()){
            // console.log("true")
            document.getElementById('modal-form').submit(); 
        }
    });


    const modal = document.getElementById('modal');
    const openModalButton = document.querySelector('.open-modal-button');

    

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.getElementById('modal-form').addEventListener('submit', (event) => {
        event.preventDefault();
        closeModal();
    });
});

function openToggle() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    console.log(menu.classList);
    console.log('hi');
}

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}