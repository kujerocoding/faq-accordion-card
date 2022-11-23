const listBtns = document.querySelectorAll('.faq__list--btn');
const faqAnswers = document.querySelectorAll('.faq__answer');

function resetList () {
    for (const faqAnswer of faqAnswers) {
    faqAnswer.classList.add('faq__answer--close');
    }
}


for (let i = 0; i < listBtns.length; i++) {
    listBtns[i].addEventListener('click', function () {
    resetList();
    faqAnswers[i].classList.remove('faq__answer--close');
    
    }/* .bind(null, i) */);
}