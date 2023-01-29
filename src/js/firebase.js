import { refs } from './references';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBRS6xf_Enc8Wod3m1W0oIKY2kJtVDEMEM',
  authDomain: 'filmoteka-team01-project.firebaseapp.com',
  projectId: 'filmoteka-team01-project',
  storageBucket: 'filmoteka-team01-project.appspot.com',
  messagingSenderId: '898404896822',
  appId: '1:898404896822:web:1d04d11cb7f222feb28897',
};

console.log(refs);
const filmoteckApp = initializeApp(firebaseConfig);

const auth = getAuth(filmoteckApp);

const loginEmailPassworl = async () => {
  const loginEmail = refs.inputEmail.value;
  const password = refs.inputPassword.value;
  const userInfo = await signInWithEmailAndPassword(auth, loginEmail, password);

  console.log(userInfo.user);
};

refs.btnLogin.addEventListener('click', loginEmailPassworl);
