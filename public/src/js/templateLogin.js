import {signInWithEmailAndPassword, logInGoogle} from './form.js';

export const pageSignIn = () => {
    const formElem = document.createElement('form');
    const formSignIn = `
                      <section>
                        <img alt="" src="src/imagenes/inicio-mobile.png" width="100%"/>
                        <img alt="" src="src/imagenes/poua-text-mobile.png" width="100%"/>
                        <section class="inputs-buttons-img">
                        <form class= "container active" id="log-in" data-tab-for="login">
                              <input type="email" id="emaiLogin" class="input" placeholder="email"></<input>
                              <input type = "password" id="passwordLogin" class= "input" placeholder="contraseña"></<input>
                              <div id="message"><p>Usuario o contraseña incorrectos</p></div>
                              <div class="error" id="error-m"></div>
                              <button id="btnLogin" class="btn">Entrar</<button>
                              <button>
                                  <a class="google" id="btnGmail" href="#"><i class="fab fa-google"></i> Ingresar con cuenta de Google</a>
                                </button>
                          </form>
                        <div class="register">
                            <p>¿No tienes cuenta? <a id="createAccount" href="#/registerUser">Crear Cuenta</a></p>
                        </div>
                        </section>
                    `;

    formElem.classList.add('login');
    formElem.innerHTML = formSignIn;


    const btnSignIn = formElem.querySelector('#btnLogin');

    btnSignIn.addEventListener( 'click', () => {
        signInWithEmailAndPassword();
      });


    const btnSignInWithGoogle = formElem.querySelector('#btnGmail');

    btnSignInWithGoogle.addEventListener( 'click', () => {
        logInGoogle();
      });
     return formElem;
  };
