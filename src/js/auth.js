const textEmail = document.getElementById('email');
const textPassword = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', e => {
  //obtener email y password
  const email = textEmail.value;
  const pass = textPassword.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e=>console.log(e.message));
});

btnSignUp.addEventListener('click', e => {
  //obtener email y password
  const email = textEmail.value;
  const pass = textPassword.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.createUserWithEmailAndPassword(email,pass);
  promise.catch(e=>console.log(e.message));
});
;


