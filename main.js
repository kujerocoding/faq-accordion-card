const listBtn = document.querySelector('.faq__list--btn');
const arrowBtn = document.querySelector('.btn__arrow');
const faqAnswer = document.querySelector('.faq__answer');

function showAnswer() {
    faqAnswer.style.display = "block";
    arrowBtn.style.transform = "rotate(180deg)";
}

listBtn.addEventListener('click', showAnswer);
