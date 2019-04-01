export const home = (posts) => {
    const divElem = document.createElement('div');
    divElem.classList.add("section");
     const viewHome = `
    <article class="post">
      <img src="src/imagenes/boy.png" alt="user" width="45" height="45" class="user">
      <textarea name="Crea una publicación" id="createPost" class="createPost" cols="50" rows="15" placeholder="Cuenta la historia de un lugar que conoces"></textarea>
      <article>
        <img src="src/imagenes/image.png" alt="Subir foto" width="35" height="35">
        <img src="src/imagenes/location.png" alt="Localización" width="35" height="35">
        <select name="Seleccionar época" id="era" class="era">
          <option value="" selected>Seleccionar época</option>
          <option value="">México moderno</option>
          <option value="">México post-revolucionario</option>
          <option value="">Revolución mexicana</option>
          <option value="">Porfiriato</option>
          <option value="">Reforma</option>
          <option value="">México independiente</option>
          <option value="">Independencia</option>
          <option value="">Virreinato o Colonia</option>
          <option value="">La Conquista</option>
          <option value="">México prehispánico</option>
        </select>
        <select name="Seleccionar privacidad" id="privacy" class="privacy">
          <option value="">Público</option>
          <option value="">Privado</option>
        </select>
        <button id="public" class="makePost-btn">PUBLICAR</button>
      </article>
    </article>
  </section>
  <footer class="desktop-foot">
    <p class="foot-parr">Powered By Perla, Jess & Itinna. 2019</p>
  </footer>
  <footer class="mobile-foot">
      <i class="fas fa-home fa-2x" style="color: #ffffff;"></i>
      <i class="fas fa-user fa-2x" style="color: #ffffff;"></i>
      <i class="fas fa-calendar-plus fa-2x" style="color: #ffffff;"></i>
      <i class="fas fa-bookmark fa-2x" style="color: #ffffff;"></i>
  </footer>
    `;
     divElem.setAttribute('id', 'muro');
    divElem.innerHTML = viewHome;

    return divElem;
  };
