import IMask from 'imask';

const phoneInput = document.querySelector('.contacts__phone');

const maskOptions = {
  mask: '+{7}(000)000-00-00',
};

const phoneMask = IMask(phoneInput, maskOptions);

export {phoneMask};
