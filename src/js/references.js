export const refs = {
  authModal: document.querySelector('.js-auth_modal'),
  overlay: document.querySelector('.backdrop'),
  modals: document.querySelectorAll('.modal'),
  modal: document.querySelector('.modal'),
  btnLogin: document.querySelector('.js-firebaseLogInbtn'),
  btnSignin: document.querySelector('.js-firebaseSingInbtn'),
  form: document.querySelector('.auth_modal_form'),
  inputEmail: document.querySelector('#username'),
  inputPassword: document.querySelector('#password'),
  divAuth_modal_loginError: document.querySelector('.auth_modal_loginError'),
  loginError_errorText: document.querySelector(
    '.auth_modal_loginError_errorText'
  ),
  greetingBox: document.querySelector('.auth_modal-loginGreetingsBox'),
  greetingText: document.querySelector('.auth_modal-loginGreetingsBox_text'),
};
