const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');
const passwordOutput = document.getElementById('password');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');

function generatePassword() {
    const length = parseInt(lengthInput.value);
    const includeUppercase = uppercaseInput.checked;
    const includeLowercase = lowercaseInput.checked;
    const includeNumbers = numbersInput.checked;
    const includeSymbols = symbolsInput.checked;

    let charSet = '';
    if (includeUppercase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charSet += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charSet += '0123456789';
    if (includeSymbols) charSet += '!@#$%^&*()_+=-`~[]\{}|;\':",./<>?';

    let password = '';
    if (charSet.length === 0) {
        passwordOutput.value = 'Виберіть хоча б один набір символів.';
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    passwordOutput.value = password;
}

function copyPassword() {
    const password = passwordOutput.value;
    if (password) {
        navigator.clipboard.writeText(password)
            .then(() => alert('Пароль скопійовано!'))
            .catch(err => console.error('Не вдалося скопіювати пароль: ', err));
    } else {
        alert('Спочатку згенеруйте пароль.');
    }
}

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);
