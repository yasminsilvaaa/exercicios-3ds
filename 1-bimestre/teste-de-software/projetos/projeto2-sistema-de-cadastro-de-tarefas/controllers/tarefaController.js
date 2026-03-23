function listar(req, res) {
    const tarefas = service.listarTarefas();
    return res.json(tarefas);
}