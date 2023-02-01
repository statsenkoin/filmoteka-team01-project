import scrollController from './scroll_lock';
import { refs } from './references';
import showLoginForm from './firebase';

import { refs } from './references';
export default function modalActions() {
  const modalTrigers = document.querySelectorAll('.js-modal-triger');
  const closeButtons = document.querySelectorAll('.modal-close-btn');

  Array.from(modalTrigers).forEach(trigger => {
    trigger.addEventListener('click', openModalOnclick);
  });

  Array.from(closeButtons).forEach(button => {
    button.addEventListener('click', closeModalOncloseButtonsСlick);
  });

  function openModalOnclick(event) {
    document.addEventListener('keydown', closeModalOnEscapePress);
    refs.overlay.addEventListener('click', closeModalOnOverlayClick);
    event.preventDefault();
    // if (!event.target.closest('.movies-images__item')) return;
    if (event.target.classList.contains('home-gallery')) return;

    const modalName = event.currentTarget.dataset.modal;
    const modal = document.querySelector('.' + modalName);

    modal.classList.add('active');
    refs.overlay.classList.add('active');
    scrollController.disabledScroll();
    showLoginForm();
  }

  function closeModalOncloseButtonsСlick(event) {
    event.preventDefault();
    Array.from(refs.modals).forEach(modal => {
      modal.classList.remove('active');
    });
    refs.overlay.classList.remove('active');
    scrollController.enabledScroll();
    // refs.greetingBox.style.display = 'none';
    // refs.form.style.display = 'block';
    document.removeEventListener('keydown', closeModalOnEscapePress);
    refs.overlay.removeEventListener('click', closeModalOnOverlayClick);
  }

  function closeModalOnEscapePress(event) {
    if (event.code !== 'Escape') {
      return;
    } else {
      Array.from(refs.modals).forEach(modal => {
        modal.classList.remove('active');
        scrollController.enabledScroll();
      });
      refs.overlay.classList.remove('active');
      scrollController.enabledScroll();

      refs.overlay.removeEventListener('click', closeModalOnOverlayClick);
    }
  }

  function closeModalOnOverlayClick(event) {
    Array.from(refs.modals).forEach(modal => {
      modal.classList.remove('active');
      scrollController.enabledScroll();
    });
    refs.overlay.classList.remove('active');
    scrollController.enabledScroll();

    document.removeEventListener('keydown', closeModalOnEscapePress);
  }
}
