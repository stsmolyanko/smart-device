const consultButton = document.querySelector('.button--blue');

const changeButtonText = () => {
  if (document.documentElement.clientWidth <= 767) {
    consultButton.innerText = 'бесплатная консультация';
  } else {
    consultButton.innerText = 'получить бесплатную консультацию';
  }
};

window.addEventListener('resize', () => {
  changeButtonText();
});

export {changeButtonText};
