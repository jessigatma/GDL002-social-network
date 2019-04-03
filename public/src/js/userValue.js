//Funciones para iniciar
import {registerUser, gmailLogIn, loginUserWithEmail} from './auth.js';
//import{onNav} from './changePage.js';
import {changeHash} from './changePage.js'

//let tabs = document.querySelectorAll('[data-tab-for]');

        /*history.replaceState({
          tabForId:tabs[0].dataset.tabFor
        },null, tabs[0].dataset.tabFor);*/


   /*const showRegister = () =>{
        tabs[1].classList.remove('hide');
        tabs[1].classList.add('active');

        tabs[0].classList.remove('active');
        tabs[0].classList.add('hide');
        location.hash='#register';

      }
document.getElementById('createAccount').addEventListener('click',showRegister, false);

//registar al usuario.

export const showPost = ()=>{

      tabs[2].classList.remove('hide');
      tabs[2].classList.add('active');

      tabs[0].classList.remove('active');
      tabs[0].classList.add('hide');
      location.hash='#post';
      const content = document.getElementById('post');
      content.innerHTML = `<p>Bienvenido,</p>`;


}*/

export const registerWithEmailAndPassword = () => {
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     registerUser(email, password);
  };

  //document.getElementById('btnSignUp').addEventListener('click', registerWithEmailAndPassword);
//iniciar sesion con el password

export const signInWithEmailAndPassword = () => {
     const textEmail = document.getElementById('emaiLogin').value;
     const textPassword = document.getElementById('passwordLogin').value;
     loginUserWithEmail(textEmail, textPassword);
  };


//iniciar sesion con google
export const logInGoogle = () => {
     //alert("hola")
     gmailLogIn();
  };
  //document.getElementById('btnGmail').addEventListener('click', logInGoogle);
