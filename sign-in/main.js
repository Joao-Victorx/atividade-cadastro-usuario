//Cria funçãom para validar preenchimento dos campos do formulário de login

function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    //Estrutura de decisão para validar preenchimento dos campos do formulário de login

    if (!loginEmail || !loginSenha) {
        alert("Preencha todos os campos para acessar!");
    }
    else {
        window.location.href = "cadastro.html";
    }
}

// Cria Array de forma geral
var dadosLista = [];

//Função para salvar usuario
function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        console.log(dadosLista); //Mostra no console o array
        document.getElementById("nomeUser").value = ""; //Limpa o campo de input
        criaLista();
    }
    else {
        alert("Preencha o campo nome!");
    }
}

function criaLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        tabela += "<tr><td class='align-middle fw-semibold'>" + dadosLista[i] + "</td><td> <button class='btn btn-success fw-semibold' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger fw-semibold' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

//função para editar nomes da lista
function editar(i){
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}

//função para excluir nomes da lista
function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}

