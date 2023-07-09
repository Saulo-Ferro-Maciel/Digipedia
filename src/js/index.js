const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        if (window.innerWidth < 487) {
            window.scrollTo({top: 0, behavior: "smooth"});
        } else if (window.innerWidth < 790) {
            window.scrollTo({top: 0, behavior: "instant"});
        } else if (window.innerHeight < 699) {
            window.scrollTo({top: 0, behavior: "smooth"});
        } else if (window.innerWidth < 1024) {
            window.scrollTo({top: 0, behavior: "instant"});
        }

        mudarPesonagemSelecionadoID(personagem);

        mudarImagemDosPersonagensSelecionados(personagem);

        mudarDescriçãoDosPersonagens(personagem);
    })

})

function mudarPesonagemSelecionadoID(personagem) {
    personagem.classList.add('selecionado');
    console.log(`status do ${personagem.id}`, personagem.classList);
}

function mudarImagemDosPersonagensSelecionados(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grandes');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/${idPersonagem}.jpg`;
}

function mudarDescriçãoDosPersonagens(personagem) {
    const nomePersonagemGrande = document.getElementById('nome-personagem');
    nomePersonagemGrande.innerText = personagem.getAttribute('data-name');

    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    const nivelPersonagem = document.getElementById('nível');
    nivelPersonagem.innerText = personagem.getAttribute('data-n');
    console.log(nivelPersonagem);

    const tipoPersonagem = document.getElementById('tipo');
    tipoPersonagem.innerText = personagem.getAttribute('data-tipo');

    const atributoPersonagem = document.getElementById('atributo');
    atributoPersonagem.innerText = personagem.getAttribute('data-atibuto');
}

