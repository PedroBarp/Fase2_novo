const URL = 'http://localhost:3000/editar';

describe('Editar Carro', () => {
  beforeEach(() => {
    cy.visit(`${URL}/1`);
  });

  it('Redireciona para /carros ao acessar uma rota com ID inválido', () => {
    cy.wait(2000);
    cy.visit(`${URL}/200000`);
    cy.url().should('include', '/carros');
  });

  it('Não permite salvar a edição se deixar campos em branco', () => {
    cy.wait(1000);
    cy.get('input[name="name"]').clear();
    cy.get('input[name="brand"]').clear();
    cy.get('input[name="color"]').clear();
    cy.get('input[name="year"]').clear();
  
    cy.get('button').contains('Adicionar Carro').should('be.disabled');
  });

  it('Atualiza o carro corretamente ao clicar no botão de salvar edição', () => {
    cy.wait(1000);
    cy.get('input[name="name"]').clear().type('Novo Nome');
    cy.get('input[name="brand"]').clear().type('Nova Marca');
    cy.get('input[name="color"]').clear().type('Nova Cor');
    cy.get('input[name="year"]').clear().type('2022');
    
    cy.get('button').contains('Adicionar Carro').should('not.be.disabled').click();

    cy.url().should('include', '/carros');
  });

});


