"use strict";

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
// const submit = document.querySelector("#submit");
const namePattern = /^[a-zA-Z- ]+$/;
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phonePattern = /^[0-9 \-\+]{6,16}$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

//**** Adds a "validate" class to each field when the user moves away from it             ****// 
//**** and the field is not empty. This is to delay validation until needed.              ****//
//**** Once the "validate" class has been added, validation will occur on every key press ****//
inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
        if (e.target.value !== "") {
            e.target.classList.add("validate");
            validateFields(e.target);
        }
    });
});

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        if (e.target.classList.contains("validate")) {
            validateFields(e.target);
        }
    });
});


// on submit, this checks validity of each field and prevents submit if any are invalid
form.addEventListener("submit", (e) => {
    inputs.forEach((input) => {
        if (validateFields(input) === false) {
            e.preventDefault();
            // toggles between two identical shake animations which is necessary
            // for the animation to play again
            if (input.classList.contains("shake")) {
                input.classList.remove("shake");
                input.classList.add("shake2");
            } else {
                input.classList.add("shake");
                input.classList.remove("shake2");
            }
        }
        input.classList.add("validate");
    });
});


function validateFields(target) {

    // validate first name
    if (target["id"] === "first-name" && !namePattern.test(firstName.value)) {
        firstName.nextElementSibling.textContent = "Only a-z, A-Z, hyphens and spaces allowed";
        addInvalid(target);
        return false;
    } else if (target["id"] === "first-name" && namePattern.test(firstName.value)) {
        firstName.nextElementSibling.textContent = "";
        addValid(target);
    }

    // validate last name
    if (target["id"] === "last-name" && !namePattern.test(lastName.value)) {
        lastName.nextElementSibling.textContent = "Only a-z, A-Z, hyphens and spaces allowed";
        addInvalid(target);
        return false;
    } else if (target["id"] === "last-name" && namePattern.test(lastName.value)) {
        lastName.nextElementSibling.textContent = "";
        addValid(target);
    }

    // validate email
    if (target["id"] === "email" && !emailPattern.test(email.value)) {
        email.nextElementSibling.textContent = "Please enter a valid email address";
        addInvalid(target);
        return false;
    } else if (target["id"] === "email" && emailPattern.test(email.value)) {
        email.nextElementSibling.textContent = "";
        addValid(target);
    }

    // validate phone number
    if (phone.value === "") {
        phone.classList.remove("validate");
        phone.classList.remove("valid");
        phone.classList.remove("invalid");
        phone.nextElementSibling.textContent = "";
    } else if (target["id"] === "phone-number" && !phonePattern.test(phone.value)) {
        phone.nextElementSibling.textContent = "Please enter a valid phone number";
        addInvalid(target);
        return false;
    } else if (target["id"] === "phone-number" && phonePattern.test(phone.value)) {
        phone.nextElementSibling.textContent = "";
        addValid(target);
    }

    // validate password
    if (target["id"] === "password" && (!passwordPattern.test(password.value) || password.value.length < 8)) {
        password.nextElementSibling.classList.add("error-message");
        addInvalid(target);
        return false;
    } else if (target["id"] === "password" && passwordPattern.test(password.value)) {
        password.nextElementSibling.classList.remove("error-message");
        addValid(target);
        if (confirmPassword.classList.contains("validate") && password.value !== confirmPassword.value) {
            confirmPassword.nextElementSibling.textContent = "Passwords do not match";
            addInvalid(confirmPassword);
            return false;
        }
    }

    // validate confirm password
    if (target["id"] === "confirm-password" && (password.value !== confirmPassword.value || !passwordPattern.test(confirmPassword.value) || confirmPassword.value.length < 8)) {
        confirmPassword.nextElementSibling.textContent = "Passwords do not match";
        addInvalid(target);
        return false;
    } else if (target["id"] === "confirm-password" && password.value === confirmPassword.value) {
        confirmPassword.nextElementSibling.textContent = "";
        addValid(target);
    }
}



// apply valid/invalid css classes
function addInvalid(target) {
    target.classList.remove("valid");
    target.classList.add("invalid");
}

function addValid(target) {
    target.classList.remove("invalid");
    target.classList.add("valid");
}