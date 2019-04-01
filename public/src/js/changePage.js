import {pageSignIn} from './templateLogin.js';
import {pageSignUp} from './templateRegisterUser.js';
import {home} from './templatePerfil.js';

/*export const content = document.getElementById('container');

export let routers = {
  '/': pageSignIn,
  '/login': pageSignIn,
  '/register':pageSignUp,
  '/home':home
}
window.onpopstate = ()=>{
  content.innerHTML = routers[window.location.pathname];
  content.innerHTML=' ';
}
export let onNav = (pathName)=>{
  window.history.pushState({},pathName,window.location.origin + pathName);
  content.innerHTML = routers[pathName];
}

content.innerHTML = routers[window.location.pathname];*/



export const handleRegister=(firebaseUser)=>{
  location.hash='#register';
}

export const handleLogin=()=>{
  location.hash='#login';
}


/*export const changeHash = (nameHash) => {
    window.location.hash = nameHash;
};


/* const changeRouter = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return showTemplate(hash); //el que carga por defecto, primera vez
    } else if (hash === '#/signup' || hash=== '#/signin' || hash === '#/home') {
      return showTemplate(hash);
    } else {
      return showTemplate('#/404');
    }
  };
*/



  /*const showTemplate = (routers) => {


    const router = routers.substr(2, routers.length - 2);


    const container = document.getElementById("container");
    container.innerHTML = '';



    switch (router) {
      case 'signin':
        container.appendChild(pageSignIn());
        break;


      case 'signup':
        container.appendChild(pageSignUp());
        break;


        case 'home':
          //privacityPost(() => {
            container.innerHTML = '';
            container.appendChild(home());
        //});
          break;
        default:

          const templateSignIn = pageSignIn();
          container.appendChild(templateSignIn);
      }
};

export const initRouter = () => {
  window.addEventListener('load', changeRouter(window.location.hash));
  if ('onhashchange' in window) {
     window.onhashchange = () => changeRouter(window.location.hash);
  }
};*/
