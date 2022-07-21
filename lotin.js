
const Transliterator = lotinKirill.default;
const transliterator = new Transliterator();

const text = document.querySelector('#text'),
    trText = document.querySelector('#trText');

text.addEventListener('input', () => {
    let cyrillicText = transliterator.textToCyrillic(text.value);
    trText.textContent = cyrillicText;
})

trText.addEventListener('input', () => {
    let latinText = transliterator.textToLatin(trText.value);
    text.textContent = latinText;
})
