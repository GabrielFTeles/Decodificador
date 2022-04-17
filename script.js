const encryptButton           = document.getElementById('encryptBtn');
const decryptButton           = document.getElementById('decryptBtn');
const missingMessageContent   = document.getElementById('missingMessageContent');
const encryptedMessageContent = document.getElementById('encryptedMessageContent');
const result                  = document.getElementById('resultMsg');
const copy                    = document.getElementById('copy');
const copyText                = document.getElementById('copyText');

let textEncrypted;
let letters = ['e', 'i', 'a', 'o', 'u'];
let replaceText = ['enter', 'imes', 'ai', 'ober', 'ufat'];


encryptButton.addEventListener('click', () => {
    mainFunction('encrypt');
});

decryptButton.addEventListener('click', () => {
    mainFunction('decrypt')
});

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(copyText.value);
    copiedSucessEffect();
});

function mainFunction(wichButton) {
    let text = document.getElementById('text').value.toLowerCase();
    textEncrypted = text;

    if (text == "") {
        missingMessageContent.style.display = 'initial';
        encryptedMessageContent.style.display = 'none';
        return;
    }

    missingMessageContent.style.display = 'none';
    encryptedMessageContent.style.display = 'initial';

    const encryptOrDecryptResult = encryptOrDecrypt(wichButton);

    let textSplitted = encryptOrDecryptResult.split('.');

    textSplitted = firstPhraseLetterUpperCase(textSplitted);

    copyText.value   = textSplitted.join('. ');
    result.innerText = textSplitted.join('. ');
}

function encryptOrDecrypt(encOrDec) {
    if (encOrDec == 'encrypt') {
        let i = 0;
        for (let letter of letters) {
            cryptography(letter, replaceText[i])
            i++;
        }
    } else {
        let i = 0;
        for (let textToDecrypt of replaceText) {
            cryptography(textToDecrypt, letters[i])
            i++;
        }
    }

    return textEncrypted;
}

function cryptography(a, b) {
    textEncrypted = textEncrypted.replaceAll(a, b)
}

function firstPhraseLetterUpperCase(array) {
    for (let i in array) {
        if (array[i].trim() == '') {
            array.splice(i, 1);
            continue;
        }

        array[i] = array[i].trim();
        let phrase = array[i];
        array[i] = phrase[0].toUpperCase() + phrase.slice(1);
    }

    return array;
}

function copiedSucessEffect() {
    const sucess = document.getElementById('copied');
    sucess.style.opacity = '1';

    setTimeout(() => {
        sucess.style.opacity = '0';
    }, 3000)
}