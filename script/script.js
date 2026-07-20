/* Leitura de arquivos */

async function obterDados(nomeArquivo, exibirDados) {
    try {
        const response = await fetch(nomeArquivo);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const dados = await response.json();
        exibirDados(dados);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Leitura do arquivo JSON finalizada!");
    }
}

function exibirTechStack(techStack) {
    const containerTechStack = document.getElementById("tech-stack__container");
    for (const elemento of techStack) {
        containerTechStack.innerHTML += `
        <!-- ${elemento.nome} -->
        <div class="tech-stack__item">      
        <img src="${elemento.link}"/>
        <p class="tech-stack__texto">${elemento.nome}</p>
        </div>
        `;
    }
    console.log("Elementos adicionados!.");
}

function exibirProjetos(projetos) {
    const containerProjetos = document.getElementById("projetos__container");
    for (const elemento of projetos) {
        containerProjetos.innerHTML += `
        <article class="projetos__item">
            <h3>${elemento.nome}</h3>
            <p>${elemento.descricao}</p>
            <a href="${elemento.link}" target="_blank" rel="noopener norefferer"><button class="botao projetos__botao">Acesse o projeto</button></a>
        </article>`;
        console.log("Elemento adicionado.");
    }
}

/* Carregar dados das seções da página */

document.addEventListener("DOMContentLoaded", () => {
    obterDados("data/tech-stack.json", exibirTechStack);
    obterDados("data/projetos.json", exibirProjetos);
});


/* Ampliar itens do menu */

let botaoNav = document.getElementById("nav-toggle");
let nav = document.getElementById("nav")

botaoNav.addEventListener("click", () => {
    if (nav.style.display === "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
});