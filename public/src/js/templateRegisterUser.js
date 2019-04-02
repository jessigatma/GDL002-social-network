import {registerWithEmailAndPassword, logInGoogle} from './userValue.js';

export let registerUser = () => {
    const formElemtTwo = document.createElement('form');
   let templateRegisterUser = `
                <section>
                <img alt="" src="src/imagenes/inicio-mobile.png" width="100%"/>
                <img alt="" src="src/imagenes/poua-text-mobile.png" width="100%"/>

                    <form class= "container hide" id="register" data-tab-for="register">

                    <input class= "input" id="name" type="text" placeholder="Elige tu usuario" required></input>
                      <input type="email" id="email" class="input" placeholder="email" required></<input>
                      <input type = "password" id="password" class= "input" placeholder="contraseña"required></<input>
                      <div id="message2"><p>No se ingreso usuario, e-mail o contraseña</p></div>
                      <div class="error" id="error-m"></div>
                      <button id="btnSignUp" class="btn">Registrarse</<button>

                      <button>
                        <a class="google" id="btnGmail" href="#"><i class="fab fa-google"></i> Ingresar con cuenta de Google</a>
                      </button>
                </form>
                </section>
                  `;

      formElemtTwo.classList.add('register');
      formElemtTwo.innerHTML = templateRegisterUser;


      const btnRegister = formElemtTwo.querySelector('#btnSignUp');
      btnRegister.addEventListener( 'click', () => {
      registerWithEmailAndPassword();
    });

      const btnSignInWithGoogle = formElemtTwo.querySelector('#btnGmail');
      btnSignInWithGoogle.addEventListener( 'click', () => {
          logInGoogle();
        });

      return formElemtTwo;
};
