const listBtns = document.querySelectorAll('.faq__list--btn');
const faqAnswers = document.querySelectorAll('.faq__answer');
const arrowBtns = document.querySelectorAll('.btn__arrow');

function resetList () {
    for (const faqAnswer of faqAnswers) {
    faqAnswer.classList.add('faq__answer--close');
    }

    for (const arrowBtn of arrowBtns) {
        arrowBtn.classList.remove('btn__arrow--active');
    }
}


for (let i = 0; i < listBtns.length; i++) {
    listBtns[i].addEventListener('click', function () {
    resetList();
    faqAnswers[i].classList.remove('faq__answer--close');
    arrowBtns[i].classList.add('btn__arrow--active');
    
    }/* .bind(null, i) */);
}