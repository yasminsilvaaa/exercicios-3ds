const { calcularQuadrado } = require('../index');

describe('Função calcularQuadrado', () => {
  test('calcularQuadrado(5) deve retornar 25', () => {
    expect(calcularQuadrado(5)).toBe(25);
  });
});