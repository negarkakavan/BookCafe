const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
const firstNameInput = document.getElementById("name");
firstNameInput.addEventListener("input", validateFirstName);
const lastNameInput = document.getElementById("lname");
lastNameInput.addEventListener("input", validateLastName);
const emailInput = document.getElementById("email");
emailInput.addEventListener("input", validateemailInput);
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", validatepasswordInput);
const codemliInput = document.getElementById("codemli");
codemliInput.addEventListener("input", validatecodemliInput);
const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", validatephoneInput);
const eduInput = document.getElementById("edu");
eduInput.addEventListener("input", validateeduInput);
const genInput = document.getElementById("gen");
genInput.addEventListener("input", validategenInput);

const errorfname = document.getElementById('error-fname');
const errorlname = document.getElementById('error-lname');
const erroremail = document.getElementById('error-email');
const errorpassword = document.getElementById('error-password');
const errorcode = document.getElementById('error-code');
const errorphone = document.getElementById('error-phone');


function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var codemli = document.getElementById("codemli").value;
    var phone = document.getElementById("phone").value;
    var edu = document.getElementById("edu").value;
    var gen = document.getElementById("gen").value;

    if (name === "" || lname === "" || email === "" || password === "" || codemli === "" || phone === "" || name === "مدرک تحصیلی" || gen === "") {
        document.getElementById("name").classList.add("error");
        document.getElementById("lname").classList.add("error");
        document.getElementById("email").classList.add("error");
        document.getElementById("password").classList.add("error");
        document.getElementById("codemli").classList.add("error");
        document.getElementById("phone").classList.add("error");
        document.getElementById("edu").classList.add("error");
        document.getElementById("gen").classList.add("error");
    } else {
        window.location.href = "MainPage.html";
    }
}

function validateFirstName() {
    const firstName = firstNameInput.value.trim();
    const namePattern = /^[\u0600-\u06FF\sA-Za-z]{3,}$/;

    if (firstName === "" || firstName.length < 3) {
        firstNameInput.style.borderColor = "red";
        errorfname.textContent = 'لطفا  نام را به صورت صحیح وارد کنید';
    } else if (namePattern.test(firstName)) {
        firstNameInput.style.borderColor = "green";
        errorfname.textContent = "";
    } else {
        firstNameInput.style.borderColor = "red";
        errorfname.textContent = 'لطفا  نام را به صورت صحیح وارد کنید';
    }
}

function validateLastName() {
    const lastName = lastNameInput.value.trim();
    const namePattern = /^[\u0600-\u06FF\sA-Za-z]{3,}$/;

    if (lastName === "" || lastName.length < 3) {
        lastNameInput.style.borderColor = "red";
        errorlname.textContent = 'لطفا  نام خانوادگی را به صورت صحیح وارد کنید';
    } else if (namePattern.test(lastName)) {
        lastNameInput.style.borderColor = "green";
        errorlname.textContent = "";
    } else {
        lastNameInput.style.borderColor = "red";
        errorlname.textContent = 'لطفا  نام خانوادگی را به صورت صحیح وارد کنید';
    }
}

function validateemailInput() {
    const email = emailInput.value.trim();
    const namePattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "") {
        emailInput.style.borderColor = "red";
        erroremail.textContent = 'لطفا ایمیل را به صورت صحیح وارد کنید';
    } else if (namePattern.test(email)) {
        emailInput.style.borderColor = "green";
        erroremail.textContent = "";
    } else {
        emailInput.style.borderColor = "red";
        erroremail.textContent = 'لطفا ایمیل را به صورت صحیح وارد کنید';
    }
}

function validatepasswordInput() {
    const password = passwordInput.value.trim();
    const namePattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (password === "" || password.length < 8) {
        passwordInput.style.borderColor = "red";
        errorpassword.textContent = 'لطفا کلمه عبور را به صورت صحیح وارد کنید';
    } else if (namePattern.test(password)) {
        passwordInput.style.borderColor = "green";
        errorpassword.textContent = "";
    } else {
        passwordInput.style.borderColor = "red";
        errorpassword.textContent = 'لطفا کلمه عبور را به صورت صحیح وارد کنید';
    }
}

function NationalCodeValidation(codemli) {
    if (/^[0-9]{10}$/.test(codemli)) {
        let sumCodemelliNumber = 0;
        for (let i = 0; i < 9; i++) {
            sumCodemelliNumber += parseInt(codemli[i]) * (10 - i);
        }
        let rem = sumCodemelliNumber % 11;
        let lastNationalCodeDigit = parseInt(codemli[9]);
        if ((rem > 1 && (11 - rem === lastNationalCodeDigit)) || (rem <= 1 && rem === lastNationalCodeDigit)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function validatecodemliInput() {
    const codemliValue = codemliInput.value.trim();

    if (codemliValue === "") {
        codemliInput.style.borderColor = "red";
        errorcode.textContent = 'لطفا کدملی را به صورت صحیح وارد کنید';
    } else if (!NationalCodeValidation(codemliValue)) {
        codemliInput.style.borderColor = "red";
        errorcode.textContent = 'لطفا کدملی را به صورت صحیح وارد کنید';
    } else {
        codemliInput.style.borderColor = "green";
        errorcode.textContent = "";
    }
}

function validatephoneInput() {
    const phone = phoneInput.value.trim();
    const namePattern = /^(09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4})$/;

    if (phone === "") {
        phoneInput.style.borderColor = "red";
        errorphone.textContent = 'لطفا شماره تلفن را به صورت صحیح وارد کنید';
    } else if (namePattern.test(phone)) {
        phoneInput.style.borderColor = "green";
        errorphone.textContent = "";
    } else {
        phoneInput.style.borderColor = "red";
        errorphone.textContent = 'لطفا شماره تلفن را به صورت صحیح وارد کنید';
    }
}

function validateeduInput() {
    const edu = eduInput.value.trim();

    if (edu === "مدرک تحصیلی") {
        eduInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا مدرک تحصیلی را به صورت صحیح وارد کنید';
    } else if (edu !== "مدرک تحصیلی") {
        eduInput.style.borderColor = "green";
        errorMessage.textContent = "";
    } else {
        eduInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا مدرک تحصیلی را به صورت صحیح وارد کنید';
    }
}

function validategenInput() {
    var genderOptions = document.querySelectorAll('#register input[name="gender"]');
    var isGenderSelected = Array.from(genderOptions).some(option => option.checked);

    if (isGenderSelected) {
        genInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا جنسیت را به صورت صحیح وارد کنید';
    } else if (!isGenderSelected) {
        genInput.style.borderColor = "green";
        errorMessage.textContent = "";
    } else {
        genInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا جنسیت را به صورت صحیح وارد کنید';
    }
}