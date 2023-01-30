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

refs.btnLogin.addEventListener('click', loginEmailPassword);
refs.btnSignin.addEventListener('click', creatAccount);
const filmoteckApp = initializeApp(firebaseConfig);

const auth = getAuth(filmoteckApp);
showLoginForm();
async function loginEmailPassword() {
  const loginEmail = refs.inputEmail.value;
  const loginPassword = refs.inputPassword.value;

  try {
    const userInfo = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );

    // console.log(userInfo.user);
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
}

async function creatAccount() {
  const loginEmail = refs.inputEmail.value;
  const loginPassword = refs.inputPassword.value;
  try {
    const userInfo = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );

    // console.log(userInfo.user);
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
}

async function monitorAuthchange() {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      showGreetings(user);
    } else {
      showLoginError;
    }
  });
}

monitorAuthchange();
function showGreetings(user) {
  refs.form.style.display = 'none';
  refs.greetingBox.style.display = 'block';
  refs.greetingText.textContent = ` Dear ${user.email} Wellcome to Filmoteka`;
}

function showLoginForm() {
  refs.divAuth_modal_loginError.style.display = 'none';
  refs.form.style.display = 'block';
  refs.btnLogin.style.display = 'block';
}
function showLoginError(error) {
  refs.divAuth_modal_loginError.style.display = 'block';
  if (error.code == 'auth/wrong-password ') {
    refs.loginError_errorText.textContent =
      'The password you entered is incorrect';
  }
  if (error.code == 'auth/user-not-found') {
    showLoginForm();
    refs.loginError_errorText.textContent = ' User not found, please signed in';
  } else {
    refs.loginError_errorText.textContent = `Error ${error.code}`;
  }
}
