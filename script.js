document.addEventListener("DOMContentLoaded", function () {
    const projetosContainer = document.getElementById("projetos-container");

    const projetos = [
        {
            nome: "Skill Management Platform",
            descricao: "Uma plataforma para gestão de habilidades, utilizando Django e PostgreSQL."
        },
        {
            nome: "E-commerce de Peças Volvo",
            descricao: "Loja online para venda de peças de caminhões e ônibus, com estoque em tempo real."
        }
    ];

    projetos.forEach(projeto => {
        const projetoDiv = document.createElement("div");
        projetoDiv.classList.add("projeto");
        projetoDiv.innerHTML = `<h3>${projeto.nome}</h3><p>${projeto.descricao}</p>`;
        projetosContainer.appendChild(projetoDiv);
    });
});
