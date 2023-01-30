import scrollController from './scroll_lock';

export default function modalActions() {
  const modalTrigers = document.querySelectorAll('.js-modal-triger');
  const overlay = document.querySelector('.backdrop');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.modal-close-btn');
  document.addEventListener('keydown', closeModalOnEscapePress);
  overlay.addEventListener('click', closeModalOnOverlayClick);
  Array.from(modalTrigers).forEach(trigger => {
    trigger.addEventListener('click', openModalOnclick);
  });

  Array.from(closeButtons).forEach(button => {
    button.addEventListener('click', closeModalOncloseButtonsСlick);
  });

  function openModalOnclick(event) {
    event.preventDefault();
    // console.log(event.currentTarget);
    console.log(event.target);

    if (event.target.classList.contains('home-gallery')) {
      return;
    }

    const modalName = event.currentTarget.dataset.modal;

    const modal = document.querySelector('.' + modalName);

    // console.log(modalName);
    // console.log(modal);

    modal.classList.add('active');
    overlay.classList.add('active');
    scrollController.disabledScroll();
  }

  function closeModalOncloseButtonsСlick(event) {
    event.preventDefault();
    this.closest('.modal').classList.remove('active');
    overlay.classList.remove('active');
    scrollController.enabledScroll();
    // document.removeEventListener('keydown', closeModalOnEscapePress);
    // overlay.removeEventListener('click', closeModalOnOverlayClick);
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
      // overlay.removeEventListener('click', closeModalOnOverlayClick);
      // Array.from(closeButtons).forEach(button => {
      //   button.removeEventListener('click', closeModalOncloseButtonsСlick);
      // });
    }
  }

  function closeModalOnOverlayClick(event) {
    Array.from(modals).forEach(modal => {
      modal.classList.remove('active');
      scrollController.enabledScroll();
    });
    overlay.classList.remove('active');
    scrollController.enabledScroll();
    // document.removeEventListener('keydown', closeModalOnEscapePress);
    // Array.from(closeButtons).forEach(button => {
    //   button.removeEventListener('click', closeModalOncloseButtonsСlick);
    // });
  }
}
