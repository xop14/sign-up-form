"use strict";

const inputs = document.querySelectorAll("input");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submit = document.querySelector("#submit");
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
    input.addEventListener("keyup", (e) => {
        if (e.target.classList.contains("validate")) {
            validateFields(e.target);
        }
    });
});


function validateFields(target) {

    // validate first name
    if (target["id"] === "first-name" && !namePattern.test(firstName.value)) {
        firstName.nextElementSibling.textContent = "Only a-z, A-Z, hyphens and spaces allowed";
        addInvalid(target);
    } else if (target["id"] === "first-name" && namePattern.test(firstName.value)) {
        firstName.nextElementSibling.textContent = "";
        addValid(target);
    }

    // validate last name
    if (target["id"] === "last-name" && !namePattern.test(lastName.value)) {
        lastName.nextElementSibling.textContent = "Only a-z, A-Z, hyphens and spaces allowed";
        addInvalid(target);
    } else if (target["id"] === "last-name" && namePattern.test(lastName.value)) {
        lastName.nextElementSibling.textContent = "";
        addValid(target);
    }

    // validate email
    if (target["id"] === "email" && !emailPattern.test(email.value)) {
        email.nextElementSibling.textContent = "Please enter a valid email address";
        addInvalid(target);
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
        phone.nextElementSibling.textContent = "Must contain 6-16 numbers";
        addInvalid(target);
    } else if (target["id"] === "phone-number" && phonePattern.test(phone.value)) {
        phone.nextElementSibling.textContent = "";
        addValid(target);
    }

    // validate password
    if (target["id"] === "password" && (!passwordPattern.test(password.value) || password.value.length < 8)) {
        password.nextElementSibling.classList.add("error-message");
        addInvalid(target);
    } else if (target["id"] === "password" && passwordPattern.test(password.value)) {
        password.nextElementSibling.classList.remove("error-message");
        addValid(target);
    }

    // validate confirm password
    if (target["id"] === "confirm-password" && password.value !== confirmPassword.value) {
        confirmPassword.nextElementSibling.textContent = "Passwords do not match";
        addInvalid(target);
    } else if (target["id"] === "confirm-password" && password.value === confirmPassword.value) {
        confirmPassword.nextElementSibling.textContent = "";
        addValid(target);
    }
}

// apply valid/invalid css classes
function addInvalid(target) {
    console.log("INVALID");
    target.classList.remove("valid");
    target.classList.add("invalid");
}

function addValid(target) {
    console.log("VALID")
    target.classList.remove("invalid");
    target.classList.add("valid");
}


//backup

// inputs.forEach((input) => {
//     input.addEventListener("blur", (e) => {
//         if (e.target.value !== "") {
//             e.target.classList.add("validate");

//             // validate first name
//             if (e.target["id"] === "first-name" && !namePattern.test(firstName.value)) {
//                 console.log("firstName not OK");
//                 firstName.nextElementSibling.textContent = "Only a-z, A-Z, hyphens and spaces allowed";
//             } else if (namePattern.test(firstName.value)) {
//                 firstName.nextElementSibling.textContent = "";
//             }

//             // validate last name
//             if (e.target["id"] === "last-name" && !namePattern.test(lastName.value)) {
//                 console.log("lastName not OK");
//                 lastName.nextElementSibling.textContent = "Only a-z, A-Z, hyphens and spaces allowed";
//             } else if (namePattern.test(lastName.value)) {
//                 lastName.nextElementSibling.textContent = "";
//             }

//             // validate email
//             if (e.target["id"] === "email" && !emailPattern.test(email.value)) {
//                 console.log("email not OK");
//                 email.nextElementSibling.textContent = "Please enter a valid email address";
//             } else if (emailPattern.test(email.value)) {
//                 email.nextElementSibling.textContent = "";
//             }

//             // validate phone number
//             if (e.target["id"] === "phone-number" && !phonePattern.test(phone.value)) {
//                 console.log("Phone not OK");
//                 phone.nextElementSibling.textContent = "Must contain 6-16 numbers";
//             } else if (phonePattern.test(phone.value)) {
//                 phone.nextElementSibling.textContent = "";
//             }

//             // validate password
//             if (e.target["id"] === "password" && (!passwordPattern.test(password.value) || password.value.length < 8)) {
//                 console.log("password not OK");
//                 password.nextElementSibling.classList.add("error-message");
//             } else if (passwordPattern.test(password.value)) {
//                 password.nextElementSibling.classList.remove("error-message");
//             }

//             // validate confirm password
//             if (e.target["id"] === "confirm-password" && password.value !== confirmPassword.value) {
//                 console.log(confirmPassword.value);
//                 confirmPassword.nextElementSibling.textContent = "Passwords do not match";
//             } else if (password.value === confirmPassword.value) {
//                 confirmPassword.nextElementSibling.textContent = "";
//                 console.log(confirmPassword.value);
//             }
        
//         }
//     });
// });


