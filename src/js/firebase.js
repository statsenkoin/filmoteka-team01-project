import { refs } from './references';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBRS6xf_Enc8Wod3m1W0oIKY2kJtVDEMEM',
  authDomain: 'filmoteka-team01-project.firebaseapp.com',
  projectId: 'filmoteka-team01-project',
  storageBucket: 'filmoteka-team01-project.appspot.com',
  messagingSenderId: '898404896822',
  appId: '1:898404896822:web:1d04d11cb7f222feb28897',
};

console.log(refs);
refs.btnLogin.addEventListener('click', loginEmailPassword);
refs.btnSignin.addEventListener('click', creatAccount);
const filmoteckApp = initializeApp(firebaseConfig);

const auth = getAuth(filmoteckApp);

async function loginEmailPassword() {
  try {
    const userInfo = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );

    console.log(userInfo.user);
  } catch (error) {
    console.log(error.code);
    showLoginError(error);
  }
}

async function creatAccount() {
  try {
    const userInfo = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );

    console.log(userInfo.user);
  } catch (error) {
    console.log(error.code);
    showLoginError(error);
  }
}
function showLoginError(error) {
  refs.divAuth_modal_loginError.style.display = 'block';
  if (error.code == 'auth/wrong-password ') {
    refs.loginError_errorText.textContent =
      'The password you entered is incorrect';
  } else {
    refs.loginError_errorText.textContent = `Error ${error.code}`;
  }
}
