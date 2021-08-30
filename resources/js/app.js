let pass = document.getElementById('pass');
let btn = document.getElementById('btn');
let tenCount = document.getElementById('ten');
let thirtyCount = document.getElementById('thirty');
let sixtyCount = document.getElementById('sixty');

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
function tenCountFunction() {
    if (tenCount.checked) {
        return 12;
    } else {
        return 0;
    }
}
function thirtyCountFunction() {
    if (thirtyCount.checked) {
        return 32;
    } else {
        return 0;
    }
}
function sixtyCountFunction() {
    if (sixtyCount.checked) {
        return 64;
    } else {
        return 0;
    }
}

function passLength() {
    let count = 0;
    
    count += tenCountFunction() + thirtyCountFunction() + sixtyCountFunction();
    return count;
}

function generatePass() {
    const len = passLength();

    let password = "";


    for(let i=0; i<len; i++) {
        password += [getUppercase(), getLowercase(), getSymbols(), getNumbers()][Math.floor(Math.random() * 4)];
    }

    pass.innerText = password;
    console.log('new password generated (Do not share your passwords!)')
}

btn.addEventListener('click', generatePass);