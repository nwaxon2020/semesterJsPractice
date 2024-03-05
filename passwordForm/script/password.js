
// Password Toggle on and off /////////////////////////////////
const toglePw = document.querySelector("#hidepw");
const pwVisible = document.querySelector("#visible");

toglePw.addEventListener("click", () => {

    if (pwVisible.type === "password") {
        pwVisible.type = "text";
        toglePw.setAttribute("class", "fa fa-eye-slash");
    } else {
        pwVisible.type = "password";
        toglePw.setAttribute("class", "fa fa-eye");
    }
})

// Sign form Up part ////////////////////////////////////////////
const signU = document.querySelector(".signup");
const signUp = document.querySelector("#signup");
const userLogIn = document.querySelector("#pw");
const userLogIn1 = document.querySelector(".pw");
const regForm = document.querySelector("#rg");

const registration = document.querySelector("#reg");

const feedback = document.querySelector(".feedbk");

signUp.addEventListener("click", () => {
    regForm.style.display = "block";
    userLogIn.style.display = "none";
})

signU.addEventListener("click", () => {
    regForm.style.display = "block";
    userLogIn.style.display = "none";
})

// If required is still red register button will not work
// this problrm i need a solution to it
registration.addEventListener("click", () => {

    if (regForm.style.color === "red") {
        registration.disabled = true;
    }
    else {
        registration.disabled = false;
        feedback.style.display = "block";
        // Hide feedback after 40 seconds
        setTimeout(() => {
            feedback.style.display = "none";
        }, 3000);

    }
})

// Check if password is the same //////////////////////////
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const notMatch = document.querySelector(".notmatch");

password2.addEventListener("input", () => {
    if (password1.value === password2.value) {

        registration.disabled = false;
        notMatch.style.display = "none";
    }
    else {
        registration.disabled = true;
        notMatch.style.display = "block";

    }

})
