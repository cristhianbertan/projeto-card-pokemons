const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imgBotaoTrocaDeTema = document.querySelector(".img-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {

        imgBotaoTrocaDeTema.setAttribute("src", "/source/imagens/sun.png");

    } else {

        imgBotaoTrocaDeTema.setAttribute("src", "/source/imagens/moon.png");
    }

    //Salvar ou remover o modo escuro
    localStorage.removeItem("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        localStorage.setItem("modo-escuro", 1);
    }
});
