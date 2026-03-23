const service = require('../services/tarefaService');
const database = require('../database/tarefaDatabase');

beforeEach(() => {
    database.limpar();
});

test('Deve cadastrar tarefa com sucesso', () => {
    const resultado = service.cadastrarTarefa("Estudar Node");

    expect(resultado).toBe(true);
    expect(service.totalTarefas()).toBe(1);
});

test('Não deve cadastrar tarefa sem descrição', () => {
    const resultado = service.cadastrarTarefa();

    expect(resultado).toBe(false);
    expect(service.totalTarefas()).toBe(0);
});

test('Deve retornar total de tarefas corretamente', () => {
    service.cadastrarTarefa("Tarefa 1");
    service.cadastrarTarefa("Tarefa 2");

    expect(service.totalTarefas()).toBe(2);
});


test('Deve listar tarefas e conter a tarefa cadastrada', () => {
    service.cadastrarTarefa("Estudar Testes");

    const lista = service.listarTarefas();

    expect(lista.length).toBe(1);
    expect(lista[0].descricao).toBe("Estudar Testes");
});