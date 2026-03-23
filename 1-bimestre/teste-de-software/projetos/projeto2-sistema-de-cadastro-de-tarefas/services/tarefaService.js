const database = require('../database/tarefaDatabase');

function cadastrarTarefa(descricao) {
    if (!descricao) {
        return false;
    }

    const tarefa = { descricao };

    database.salvar(tarefa);

    return true;
}

function totalTarefas() {
    return database.listar().length;
}


function listarTarefas() {
    return database.listar();
}

module.exports = {
    cadastrarTarefa,
    totalTarefas,
    listarTarefas
};