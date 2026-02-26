describe('Testes utilizando matchers do Jest', () => {

  test('5 é maior que 3', () => {
    expect(5).toBeGreaterThan(3);
  });

  test('Texto contém a palavra "Software"', () => {
    expect('Teste de Software').toContain('Software');
  });

  test('Objeto { aprovado: true } é igual ao esperado', () => {
    expect({ aprovado: true }).toEqual({ aprovado: true });
  });

});