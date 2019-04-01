import {savePostFromDatabase} from './main.js';
import {handleRegister, handleLogin} from './changePage.js';

export const registerUser = (email, password) => {
     firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () {
            checkEmail();
        })
        .catch(() => document.getElementById('error-m').innerHTML = 'Crear usuario');
};



export const loginUserWithEmail = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => document.getElementById('error-m').innerHTML = 'Usuario sin registrarse');
};



//Ingresar con cuenta google (Documentación de Firebase)
 export const gmailLogIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider(); //Se crea una instancia del objeto del proveedor de Google
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API. (acceso a google)
        let token = result.credential.accessToken;
        // The signed-in user info. (informacion del usuario que inicia sesión)
        let user = result.user;
        console.log(user, token);

        // ...
    }).catch(function (error) {
        // Handle Errors here. (manejar errores)
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used. (email de la cuenta de usuario utilizado)
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used. (tipo de identificador usado por firebase)
        let credential = error.credential;
        // ...
        document.getElementById('error-m').innerHTML = errorCode + errorMessage + email + credential;
    });

};


export const checkEmail=()=> {
    firebase.auth().currentUser.sendEmailVerification()
        .then(function () {
            //console.log("correo enviado")
            document.getElementById('app').innerHTML = "Confirma tu cuenta desde tu Email"
        })
        .catch(error => {
            document.getElementById('app').innerHTML = "Ingrese su email"
        })
};

export const watcher=()=>{
  firebase.auth().onAuthStateChanged(function (user){
    if(user){
      //savePostFromDatabase();
      handleRegister ();

    }else{
      handleLogin();
    }
  });
  watcher();
}
