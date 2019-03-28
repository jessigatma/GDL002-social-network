export const home = () => {
    const divElem = document.createElement('div');
    divElem.classList.add("section");
    const viewHome = `
    <section>
      <form action="">
        <textarea name="" id="post" placeholder="¿Qué estás pensando?" cols="80" rows="8"></textarea>
        <fieldset>
          <select id="privacity" class="button select-btn">
            <option id="public" value="publico">Público</option>
            <option id="private" value="privado">Privado</option>
          </select>
          <button id="button-post" class="button sign-post-btn color-white">Publicar</button>
        </fieldset>
      </form>
        <section>
          <ul id="post-list">
          </ul>
        </section>
    </section>
    <footer id="menu-abajo" class="menu-abajo color">
      <a href="#/signIn"><img id="sign-out" src="imgs/salir.png" alt="salir"></a>
    </footer>
    `;
    // divElem.setAttribute('id', 'muro');
    divElem.innerHTML = viewHome;

    return divElem;
};
