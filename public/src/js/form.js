import {registerUser, gmailLogIn, loginUserWithEmail} from '../js/auth.js';

//-------------------------window.history.pushstate-------------------------
let tabs = document.querySelectorAll('[data-tab-for]');

        history.replaceState({
          tabForId:tabs[0].dataset.tabFor
        },null, tabs[0].dataset.tabFor);


    const showRegister = () =>{
        tabs[1].classList.remove('hide');
        tabs[1].classList.add('active');

        tabs[0].classList.remove('active');
        tabs[0].classList.add('hide');

        history.pushState({
          tabForId: tabs[1].dataset.tabFor
        }, null, tabs[1].dataset.tabFor);
      }
document.getElementById('createAccount').addEventListener('click',showRegister, false);

  //const btnLogout = document.getElementById('btnLogout');

//registar al usuario.
const registerWithEmailAndPassword = () => {
     const textEmail = document.getElementById('email').value;
     const textPassword = document.getElementById('password').value;
     registerUser(textEmail, textPassword);
  };
  document.getElementById('btnSignUp').addEventListener('click', registerWithEmailAndPassword);

//iniciar sesion con el password
const signInWithEmailAndPassword = () => {
     const textEmail = document.getElementById('email').value;
     const textPassword = document.getElementById('password').value;
     loginUserWithEmail(textEmail, textPassword);
  };
  document.getElementById('btnLogin').addEventListener('click', signInWithEmailAndPassword);


//iniciar sesion con google
const logInGoogle = () => {
     //alert("hola")
     gmailLogIn();
  };
  document.getElementById('btnGmail').addEventListener('click', logInGoogle);
