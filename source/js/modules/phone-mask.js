import IMask from 'imask';

const phoneInput = document.querySelectorAll('.phone-input');

const maskOptions = {
  mask: '+{7}(000)000-00-00',
};

const initPhoneMask = () => {
  phoneInput.forEach((item) => {
    IMask(item, maskOptions);
  });
};

export {initPhoneMask};
