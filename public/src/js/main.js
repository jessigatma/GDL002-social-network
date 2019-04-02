import {savePost, readPost, readPostUser, object, objectComplete, findObjectByKey, saveEditPost} from './post.js';
//import{onNav} from './changePage.js';
//import {handleRegister, handleLogin} from './changePage.js'

//Funcion para mostrar menu mobile
/*const btnMenu = document.getElementById('menu-btn');
const mobileNav = document.querySelector('nav');
const showMobileMenu = () => {
    if(mobileNav.style.display = 'none'){
        mobileNav.style.display = 'block';
    }
};
btnMenu.addEventListener('click', showMobileMenu);*/


let miFechaActual = new Date();
let year = miFechaActual.getFullYear();
let month = parseInt(miFechaActual.getMonth()) + 1;
let day = miFechaActual.getDate();
let datePost = `${day}/${month}/${year}`;


const savePostIntoDatabase = () => {
    const userName = firebase.auth().currentUser.displayName;
    const post = document.getElementById('createPost').value;
    post.length == 0 ? false(alert('Debes ingresar Texto :) para enviar un mensaje')) : true;
    const photo = firebase.auth().currentUser.photoURL;
    savePost(userName, post, photo, datePost);
    document.getElementById('createPost').value ="";
  //  savePostUser(userName, post, photo, datePost);
};
//document.getElementById('public').addEventListener('click', ()=>{
   //savePostIntoDatabase();


// Crea una iD única
let createId = (function() {
    let map = {};
    return function(prefix) {
        prefix = prefix || 'autoSocial';
        map[prefix] = map[prefix] || 0;
        let id = prefix + '-' + map[prefix]++;
        // Valida :) que no exista un elemento con el mismo id :)
        if(document.getElementById(id)) {
            return createId(prefix);
        }
        return id;
    }
})();
 export const savePostFromDatabase = () => {
     readPost((post)=>{
    document.getElementById('postPublished').innerHTML =
    `<div class="row space">
   <div class="col-12">
      <div class="col-2 box-img">
         <div id="${createId('nameUser')}"><p>${post.val().user ? post.val().user : "Anonimo"}</p><p>${post.val().createdDate}</p></div>
         <div id="${createId('imageUser')}"><img class="img-profile" src=${post.val().userphoto ? post.val().userphoto : "./assets/user11.png"} alt="imagen usuario"></div>
       </div>
      <div class="col-9 question-published clearfix">
         <div class="row">
            <div class="col-12 post">
               <p id="nuevotexto" class="text-post">${post.val().pospublic}
               </p>
            </div>
         </div>
         <div class="row icon-group">
               <div class="col-2"><button id="${createId('likePost')}" class="post-icon hide"><div id="${createId('like')}" class="like"></div></button></div>
               <div class="col-2"><button id="${createId('savePost')}" class="post-icon hide"><i class="far fa-bookmark"></button></i></div>
               <div class="col-2"><button id="${createId('commentPost')}" class="post-icon hide"><i class="far fa-comment-dots"></i></button></div>
               <div class="col-6"><button id="mostrar" class="postReport post-icon float-right"><i class="fas fa-exclamation"></i></button></div>
               <span class="hidden"id="${createId('key')}">${post.val().key}</span>
               <dialog id="dialogo"><h5>¿Esta publicación es inapropiada y quieres denunciarla?</h5>
               <p>Envíanos un correo copiando el numero de publicación <b>-LYm01WhDdKmteY-Sknx</b> y lo revisaremos</p><button id="closeDialog">Cancelar</button>
               <button id="closeDialog"><a href="mailto:scarlettBurboa@gmail.com?Subject=Denunciar%20publicación%20n°%20">Enviar Correo</a></button></dialog>
         </div>
      </div>
      <div class="col-9 float-right" style="display:none;">
            <button id="${createId('ReportPost')}" class="col-12 btnAnswer">Ver respuesta</button>
            <div class="hide section-Answer" id ="especialistAnswer">
            <p class="name-especialist" id="nameEspecialist">Doctora Javiera Carreño</p>
            <p class="answer-especialist" id="answerEspecialist">LGBT es una sigla para abreviar algunas categorías de la Diversidad Sexual por las diferentes orientaciones sexuales e identidades de género: L de Lesbiana, G de Gay, B de Bisexual y T de Trans.<p>
            </div>
      </div>
   </div>
</div>` + document.getElementById('postPublished').innerHTML;


let postReport = document.getElementsByClassName('postReport');
//reportar comentario
for (let i=0; i < postReport.length; i++){
   postReport[i].addEventListener('click', reportPostFuncion)
}
   });
};
//Función reportar
const reportPostFuncion = () =>{
    let dialogo = document.getElementById('dialogo');
   dialogo.showModal();
   savePostFromDatabaseUser();
   document.getElementById('closeDialog').addEventListener('click', function(){
   dialogo.close();
   savePostFromDatabaseUser();
      })
};
