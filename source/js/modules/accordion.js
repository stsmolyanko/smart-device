const accordionTitles = document.querySelectorAll('.footer__accordion-title');
const accordionWrappers = document.querySelectorAll('.footer__accordion-wrapper');

const runAccordion = () => {
  accordionTitles.forEach((item) => {
    item.classList.add('footer__accordion-title--with-icon');

    item.addEventListener('click', () => {
      const parent = item.parentNode;

      if (parent.classList.contains('footer__accordion-item--active')) {
        parent.classList.remove('footer__accordion-item--active');
      } else {
        document.querySelectorAll('.footer__accordion-item').forEach((child) => {
          child.classList.remove('footer__accordion-item--active');

          parent.classList.add('footer__accordion-item--active');
        });
      }
    });
  });

  accordionWrappers.forEach((item) => {
    item.classList.add('footer__accordion-wrapper--with-js');
  });
};

export {runAccordion};
