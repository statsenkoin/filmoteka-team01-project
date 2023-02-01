import { refs } from './references';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBRS6xf_Enc8Wod3m1W0oIKY2kJtVDEMEM',
  authDomain: 'filmoteka-team01-project.firebaseapp.com',
  projectId: 'filmoteka-team01-project',
  storageBucket: 'filmoteka-team01-project.appspot.com',
  messagingSenderId: '898404896822',
  appId: '1:898404896822:web:1d04d11cb7f222feb28897',
};

const filmoteckApp = initializeApp(firebaseConfig);

const auth = getAuth(filmoteckApp);
refs.form.reset();
refs.form.style.display = 'block';

refs.btnLogin.addEventListener('click', loginEmailPassword);
refs.btnSignin.addEventListener('click', creatAccount);

function loginEmailPassword() {
  const loginEmail = refs.inputEmail.value;
  const loginPassword = refs.inputPassword.value;
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
      showGreetings(user);
    })
    .catch(error => {
      showLoginError(error);

      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

function creatAccount(event) {
  const loginEmail = refs.inputEmail.value.toLowerCase();
  const loginPassword = refs.inputPassword.value;
  createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch(error => {
      showLoginError(error);

      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function monitorAuthchange() {
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;

      showGreetings(user);
    } else {
    }
  });
}

monitorAuthchange();

function showGreetings(user) {
  refs.form.style.display = 'none';
  refs.greetingBox.style.display = 'block';
  refs.greetingBox.innerHTML = `<p  class="auth_modal-loginGreetingsBox_text">
  <span class="word">Dear ${user.email} <span class="superscript"></span> Wellcome to </span>
  <span class="word">Filmoteka</span>
</p>`;
}

function showLoginError(error) {
  refs.divAuth_modal_loginError.style.display = 'block';
  if (error.code == 'auth/wrong-password') {
    refs.loginError_errorText.textContent =
      'The password you entered is incorrect';
  } else if (error.code == 'auth/user-not-found') {
    refs.loginError_errorText.textContent = ' User not found, please signed in';
  } else {
    refs.loginError_errorText.textContent = `Error ${error.code}`;
  }
}

export default function showLoginForm() {
  refs.form.reset();
  refs.form.style.display = 'block';
  refs.greetingBox.style.display = 'none';
  refs.divAuth_modal_loginError.style.display = 'none';
  refs.loginError_errorText.textContent = '';
}
