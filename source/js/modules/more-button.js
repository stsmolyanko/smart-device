const aboutButton = document.querySelector('.about__button');
const hiddenText = document.querySelectorAll('.about__text--hidden');
const componentsText = document.querySelector('.about__text--components');


const moreButton = () => {
  aboutButton.addEventListener('click', () => {
    hiddenText.forEach((elem) => {
      elem.classList.toggle('visually-hidden');
      elem.classList.toggle('about__text--shown');
    });

    componentsText.classList.toggle('about__text--shown');

    if (aboutButton.innerText.toLowerCase() === 'подробнее') {
      aboutButton.innerText = 'свернуть';
    } else {
      aboutButton.innerText = 'подробнее';
    }
  });
};

export {moreButton};
