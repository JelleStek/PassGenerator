let pass = document.getElementById('pass');
let btn = document.getElementById('btn');
let passLength = document.getElementById('amount');
let passLengthValue = document.getElementById('amount').value;
let passText = document.getElementById('amountText');

function showPassLength() {
    passText.innerText = passLengthValue;
}

passLength.addEventListener('change', showPassLength)

const upperLetter = "ABCDEFGHIJKLMNOPQRSTVZYX";
const lowerLetter = "abcdefghijklmnopqrstvzyx";
const numbers = "0123456789";
const symbols = "!@#$%^&*():;<>?";

function getUppercase() {
    return upperLetter[Math.floor(Math.random() * upperLetter.length)];
}
function getLowercase() {
    return lowerLetter[Math.floor(Math.random() * lowerLetter.length)];
}
function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePass() {
    const len = 64;

    let password = "";


    for(let i=0; i<len; i++) {
        password += [getUppercase(), getLowercase(), getSymbols(), getNumbers()][Math.floor(Math.random() * 4)];
    }

    pass.innerText = password;

}
btn.addEventListener('click', generatePass);
// console.log(generatePass())