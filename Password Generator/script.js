let lengthBar = document.getElementById("char-limit");
let length_Status = document.getElementById('char-limit-value');

let upperCase=document.getElementById('include-uppercase');
let lowerCase=document.getElementById('include-lowercase');
let number=document.getElementById('include-numbers');
let symbol_box=document.getElementById('include-symbols');

let zero = document.getElementsByClassName('zero');
let weak = document.getElementsByClassName('weak');
let normal = document.getElementsByClassName('normal');
let strong = document.getElementsByClassName('strong');

let copy_button = document.querySelector('#copy-button');
const passwordField = document.getElementById('password-field');

let password = "Password";
let password_length = 10;
let checkCount = 1;
const Symbols = '~!@#$%^&*()_+}{:"?></.,;][]';

HandleSlider();
function HandleSlider() {

    lengthBar.value = password_length
    length_Status.textContent = password_length;
}

let hasUpperCase = false;
let hasLowerCase = false;
let hasNumbers=false;
let hasSymbols=false;
if(upperCase.checked) hasUpperCase=true;
if(lowerCase.checked) hasLowerCase=true;
if(number.checked) hasNumbers=true;
if(symbol_box.checked) hasSymbols=true;

// handleStrength();
function handleStrength() {
    if(hasUpperCase && hasLowerCase &&(hasNumbers||hasSymbols)&& password_length>=8){

    }
    
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


function CopyContent() {
    const password = passwordField.value;

  // Use the Clipboard API to write text to the clipboard
  navigator.clipboard.writeText(password)
    .then(() => {
      console.log('Text copied to clipboard:', password);
    })
    .catch(err => {
      console.error('Error copying text:', err);
    });
}
copy_button.addEventListener('click', CopyContent())


