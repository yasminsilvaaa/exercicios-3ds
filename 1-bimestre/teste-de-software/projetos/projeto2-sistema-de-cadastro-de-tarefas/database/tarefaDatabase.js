let tarefas = [];

function salvar(tarefa) {
    tarefas.push(tarefa);
}

function listar() {
    return tarefas;
}

function limpar() {
    tarefas = [];
}

module.exports = {
    salvar,
    listar,
    limpar
};