import scrollController from './scroll_lock';
import { refs } from './references';
import showLoginForm from './firebase';

export default function modalActions() {
  const modalTrigers = document.querySelectorAll('.js-modal-triger');
  const overlay = document.querySelector('.backdrop');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.modal-close-btn');

  Array.from(modalTrigers).forEach(trigger => {
    trigger.addEventListener('click', openModalOnclick);
  });

  Array.from(closeButtons).forEach(button => {
    button.addEventListener('click', closeModalOncloseButtonsСlick);
  });

  function openModalOnclick(event) {
    document.addEventListener('keydown', closeModalOnEscapePress);
    overlay.addEventListener('click', closeModalOnOverlayClick);
    event.preventDefault();
    // if (!event.target.closest('.movies-images__item')) return;
    if (event.target.classList.contains('home-gallery')) return;

    const modalName = event.currentTarget.dataset.modal;
    const modal = document.querySelector('.' + modalName);

    modal.classList.add('active');
    overlay.classList.add('active');
    scrollController.disabledScroll();

    // =====================================================
    // console.log(
    //   'event.target :>> ',
    //   event.target.closest('.movies-images__item')
    // );

    // =====================================================
    showLoginForm();
  }

  function closeModalOncloseButtonsСlick(event) {
    console.log(event.target);
    event.preventDefault();
    Array.from(modals).forEach(modal => {
      modal.classList.remove('active');
    });
    overlay.classList.remove('active');
    scrollController.enabledScroll();

    document.removeEventListener('keydown', closeModalOnEscapePress);
    overlay.removeEventListener('click', closeModalOnOverlayClick);
  }

  function closeModalOnEscapePress(event) {
    if (event.code !== 'Escape') {
      return;
    } else {
      Array.from(modals).forEach(modal => {
        modal.classList.remove('active');
        scrollController.enabledScroll();
      });
      overlay.classList.remove('active');
      scrollController.enabledScroll();

      overlay.removeEventListener('click', closeModalOnOverlayClick);
    }
  }

  function closeModalOnOverlayClick(event) {
    Array.from(modals).forEach(modal => {
      modal.classList.remove('active');
      scrollController.enabledScroll();
    });
    overlay.classList.remove('active');
    scrollController.enabledScroll();

    document.removeEventListener('keydown', closeModalOnEscapePress);
  }
}
