import {registerUser, gmailLogIn, loginUserWithEmail} from './auth.js';

/*let tabs = document.querySelectorAll('[data-tab-for]');

        history.replaceState({
          tabForId:tabs[0].dataset.tabFor
        },null, tabs[0].dataset.tabFor);


    export const showRegister = () =>{
        tabs[1].classList.remove('hide');
        tabs[1].classList.add('active');

        tabs[0].classList.remove('active');
        tabs[0].classList.add('hide');

        history.pushState({
          tabForId: tabs[1].dataset.tabFor
        }, null, tabs[1].dataset.tabFor);
      }
document.getElementById('createAccount').addEventListener('click',showRegister, false);*/






//registar al usuario.
export const registerWithEmailAndPassword = () => {
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     registerUser(email, password);
  };
  document.getElementById('btnSignUp').addEventListener('click', registerWithEmailAndPassword);

//iniciar sesion con el password
export const signInWithEmailAndPassword = () => {
     const textEmail = document.getElementById('emaiLogin').value;
     const textPassword = document.getElementById('password').value;
     loginUserWithEmail(textEmail, textPassword);
  };
  document.getElementById('btnLogin').addEventListener('click', signInWithEmailAndPassword);


//iniciar sesion con google
export const logInGoogle = () => {
     //alert("hola")
     gmailLogIn();
  };
  document.getElementById('btnGmail').addEventListener('click', logInGoogle);
