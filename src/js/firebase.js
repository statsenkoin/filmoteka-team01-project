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
      // Signed in
      const user = userCredential.user;
      console.log(user);

      // ...
    })
    .catch(error => {
      showLoginError(error);

      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
}

// async function creatAccount() {
//   const loginEmail = refs.inputEmail.value;
//   const loginPassword = refs.inputPassword.value;
//   try {
//     const userInfo = await createUserWithEmailAndPassword(
//       auth,
//       loginEmail,
//       loginPassword
//     );

//     // console.log(userInfo.user);
//   } catch (error) {
//     console.log(error);
//   }
// }

function creatAccount(event) {
  const loginEmail = refs.inputEmail.value;
  const loginPassword = refs.inputPassword.value;
  createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // showGreetings(user);
      // ...
    })
    .catch(error => {
      showLoginError(error);

      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function monitorAuthchange() {
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...

      showGreetings(user);
    } else {
      // User is signed out
      // ...
    }
  });
}

monitorAuthchange();

function showGreetings(user) {
  refs.form.style.display = 'none';
  refs.greetingBox.style.display = 'block';
  refs.greetingText.textContent = ` Dear ${user.email} Wellcome to Filmoteka`;
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
