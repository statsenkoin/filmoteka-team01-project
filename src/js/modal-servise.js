const modalTrigers = document.querySelectorAll('.js-modal-triger');
const overlay = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const closeButtons = document.querySelectorAll('.modal-close-btn');

export default function modalActions() {
  Array.from(modalTrigers).forEach(trigger => {
    trigger.addEventListener('click', openModalOnclick);
  });

  Array.from(closeButtons).forEach(button => {
    button.addEventListener('click', closeModalOnclick);
  });

  document.addEventListener('keydown', closeModalOnPress);

  function openModalOnclick(event) {
    event.preventDefault();
    console.log(event.target);
    // if (!event.target.classList.contains('movies-images__item')) {
    //   return;
    // }

    const modalName = event.currentTarget.dataset.modal;

    const modal = document.querySelector('.' + modalName);

    console.log(modalName);
    console.log(modal);

    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModalOnclick(event) {
    event.preventDefault();
    this.closest('.modal').classList.remove('active');
    overlay.classList.remove('active');
  }

  function closeModalOnPress(event) {
    if (event.code !== 'Escape') {
      return;
    } else {
      modal.classList.remove('active');
      overlay.classList.remove('active');
    }
  }
}
