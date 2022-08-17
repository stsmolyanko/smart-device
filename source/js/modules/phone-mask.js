import IMask from 'imask';

const phoneInputMain = document.querySelector('.contacts__phone');
const phoneInputModal = document.querySelector('.modal__phone-input');

const maskOptions = {
  mask: '+{7}(000)000-00-00',
};

const initPhoneMask = () => {
  IMask(phoneInputMain, maskOptions);
  IMask(phoneInputModal, maskOptions);
}

export {initPhoneMask};
