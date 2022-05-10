const resultDiv = document.querySelector('.result');
const missingMessageDiv = document.querySelector('.missing-message')

const cryptography = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];

function mainButtonsClick(encryptOrDecrypt) {
    let userText = text.value.toLowerCase();

    if (userText == '') {
        showMissingMessageDiv();
        return;
    } else {
        showResultDiv();
    }

    for (let i = 0; i < cryptography.length; i++) {
        userText = cryptographyText(cryptography[i][0], cryptography[i][1], encryptOrDecrypt, userText);
    }

    resultText.innerText = userText;
}

function cryptographyText(letter, textReplace, encryptOrDecrypt, userText) {
    if (encryptOrDecrypt == 'encrypt') {
        return userText.replaceAll(letter, textReplace);
    } else {
        return userText.replaceAll(textReplace, letter);
    }
    
}

function showMissingMessageDiv() {
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