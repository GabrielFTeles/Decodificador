const resultDiv = document.querySelector('.result');
const missingMessageDiv = document.querySelector('.missing-message')

let letters = ['e', 'i', 'a', 'o', 'u'];
let replaceText = ['enter', 'imes', 'ai', 'ober', 'ufat'];

function mainButtonsClick(encryptOrDecrypt) {
    let userText = text.value.toLowerCase();

    if (userText == '') {
        hideMissingMessageDiv();
        return;
    } else {
        showResultDiv();
    }

    let i = 0;
    for (let letter of letters) {
        userText = cryptography(letter, replaceText[i], encryptOrDecrypt, userText);
        i++;
    }

    resultText.innerText = userText;
}

function cryptography(a, b, encryptOrDecrypt, userText) {
    if (encryptOrDecrypt == 'encrypt') {
        return userText.replaceAll(a, b);
    } else {
        return userText.replaceAll(b, a);
    }
    
}

function hideMissingMessageDiv() {
    missingMessageDiv.style.display = 'initial';
    resultDiv.style.display = 'none';
}

function showResultDiv() {
    missingMessageDiv.style.display = 'none';
    resultDiv.style.display = 'flex';
}

function copyText() {
    navigator.clipboard.writeText(resultText.textContent);
    copiedSucessEffect();
}

function copiedSucessEffect() {
    copiedSucess.style.visibility = 'initial';
    copiedSucess.style.opacity = '1';

    setTimeout(() => {
        copiedSucess.style.visibility = 'hidden';
        copiedSucess.style.opacity = '0';
    }, 3000);
}