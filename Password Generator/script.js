let lengthBar = document.getElementById("char-limit");
let length_Status = document.getElementById('char-limit-value');

let upperCase = document.getElementById('include-uppercase');
let lowerCase = document.getElementById('include-lowercase');
let number = document.getElementById('include-numbers');
let symbol_box = document.getElementById('include-symbols');


let weak = document.getElementsByClassName('weak');
let normal = document.getElementsByClassName('normal');
let strong = document.getElementsByClassName('strong');



let copy_button = document.querySelector('#copy-button');
const passwordField = document.getElementById('password-field');
const generateButton = document.getElementById('generate-button');
console.log(generateButton);

let password = "Password";
let password_length = 10;
let checkCount = 1;
const Symbols = '~!@#$%^&*()_+}{:"?></.,;][]';

lengthBar.addEventListener('input', HandleSlider);
function HandleSlider() {

    password_length = lengthBar.value;
    length_Status.textContent = lengthBar.value;

}

let hasUpperCase = false;
let hasLowerCase = false;
let hasNumbers = false;
let hasSymbols = false;

function tick_checker() {
    hasUpperCase = false;
    hasLowerCase = false;
    hasNumbers = false;
    hasSymbols = false;
    if (upperCase.checked) hasUpperCase = true;
    if (lowerCase.checked) hasLowerCase = true;
    if (number.checked) hasNumbers = true;
    if (symbol_box.checked) hasSymbols = true;
}



function handleStrength() {


    if (hasUpperCase && hasLowerCase && (hasNumbers || hasSymbols) && password_length >= 8) {
        strength_disabler()
        strong[0].style.display = 'flex';
    }
    else if (hasUpperCase && hasLowerCase && password_length >= 8) {
        strength_disabler()
        normal[0].style.display = "flex";
    }
    else if (hasUpperCase && hasLowerCase && password_length <= 8) {
        strength_disabler()
        weak[0].style.display = "flex";
    }
}

function strength_disabler() {
    weak[0].style.display = "none";
    normal[0].style.display = "none";
    strong[0].style.display = 'none';
}

function getRandomInteger(min, max) {
    // Calculate the range of possible values (inclusive)
    const range = max - min + 1;

    // Generate a random number within the range and add 'min' to it
    const randomInteger = Math.floor(Math.random() * range) + min;

    return randomInteger;
}


function generateRandomNumber() {
    return getRandomInteger(0, 9);
}

function generateLowerCase() {
    return String.fromCharCode(getRandomInteger(97, 123));
}

function generateUpperCase() {
    return String.fromCharCode(getRandomInteger(97, 123));
}

function generateSymbol() {
    const sybl_lngth = Symbols.length;

    return Symbols[getRandomInteger(0, sybl_lngth - 1)];

}



copy_button.addEventListener('click', function () {
    try {

        navigator.clipboard.writeText(passwordField.value)
        copy_button.innerHTML = 'Copied';
        setTimeout(function () {
            copy_button.innerHTML = `<i class="fas fa-copy active"></i>`;
            console.log(copy_button.innerHTML);
        }, 3000)
    }
    catch (e) {
        copy_button.innerHTML = 'Failed to copy';
        setTimeout(function () {
            copy_button.innerHTML = `<i class="fas fa-copy active"></i>`;
            console.log(copy_button.innerHTML);
        }, 3000)
    }
});


generateButton.addEventListener('click', generate_Password());
function generate_Password() {


    //Used the Concept of Closure______
    return function () {
        let pass = '';
        let i = 0;
        tick_checker();
        while (i < password_length) {
            if (hasNumbers) {
                pass += generateRandomNumber().toString();
                i++;
            }

            if (hasUpperCase) {
                pass += generateUpperCase().toString().toUpperCase();
                i++;
            }
            if (hasLowerCase) {
                pass += generateLowerCase().toString();
                i++;
            }
            if (hasSymbols) {
                pass += generateSymbol().toString();
                i++;
            }
        }

        handleStrength();
        passwordField.value = pass;

    }


}