const encryptButton           = document.getElementById('encryptBtn');
const decryptButton           = document.getElementById('decryptBtn');
const missingMessageContent   = document.getElementById('missingMessageContent');
const encryptedMessageContent = document.getElementById('encryptedMessageContent');
const result                  = document.getElementById('resultMsg');
const copy                    = document.getElementById('copy');
const copyText                = document.getElementById('copyText');

function encryptOrDecrypt(encOrDec) {
    let text = document.getElementById('text').value.toLowerCase();
    let textEncrypted;

    if (encOrDec == 'encrypt') {
        textEncrypted = text.replaceAll('e', 'enter');
        textEncrypted = textEncrypted.replaceAll('i', 'imes');
        textEncrypted = textEncrypted.replaceAll('a', 'ai');
        textEncrypted = textEncrypted.replaceAll('o', 'ober');
        textEncrypted = textEncrypted.replaceAll('u', 'ufat');
    } else {
        textEncrypted = text.replaceAll('enter', 'e');
        textEncrypted = textEncrypted.replaceAll('imes', 'i');
        textEncrypted = textEncrypted.replaceAll('ai', 'a');
        textEncrypted = textEncrypted.replaceAll('ober', 'o');
        textEncrypted = textEncrypted.replaceAll('ufat', 'u');
    }

    return textEncrypted;
}

function firstPhraseLetterUpperCase(array) {
    let i = 0;
    for (let phrase of array) {
        if (phrase.trim() == '') {
            array.splice(i, 1);
            continue;
        }

        array[i] = array[i].trim();
        phrase = array[i];
        array[i] = phrase[0].toUpperCase() + array[i].slice(1);
        i++;
    }

    return array;
}

function mainFunction(wichButton) {
    missingMessageContent.style.display = 'none';
    encryptedMessageContent.style.display = 'initial';

    const textEncrypted = encryptOrDecrypt(wichButton);

    let textSplitted = textEncrypted.split('.');

    textSplitted = firstPhraseLetterUpperCase(textSplitted);

    copyText.value   = textSplitted.join('. ');
    result.innerText = textSplitted.join('. ');
}

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

function copiedSucessEffect() {
    const sucess = document.getElementById('copied');
    sucess.style.opacity = '1';

    setTimeout(() => {
        sucess.style.opacity = '0';
    }, 3000)
}
