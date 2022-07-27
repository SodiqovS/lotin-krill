window.addEventListener('DOMContentLoaded', () => {
    // Lotin-Krill
    const Transliterator = lotinKirill.default;
    const transliterator = new Transliterator();
    
    const text = document.querySelector('#text'),
        trText = document.querySelector('#trText'),
        lotin = document.querySelector('#lotin'),
        krill = document.querySelector('#krill');

    lotin.addEventListener('click', () => {
        text.addEventListener('input', () => {
            let cyrillicText = transliterator.textToCyrillic(text.value);
            trText.textContent = cyrillicText;
        })
    })
    
    krill.addEventListener('click', () => {
        trText.addEventListener('input', () => {
            let latinText = transliterator.textToLatin(trText.value);
            text.textContent = latinText;
        })
    });

    
    


})

