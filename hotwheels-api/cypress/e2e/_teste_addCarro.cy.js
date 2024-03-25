const URL = 'http://localhost:3000/addCarro';

describe('Adicionar Carro', () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it('Adiciona um novo carro corretamente', () => {
    cy.wait(1000);
    cy.get('input[name="name"]').type('Carro Teste');
    cy.get('input[name="brand"]').type('Marca Teste');
    cy.get('input[name="color"]').type('Cor Teste');
    cy.get('input[name="year"]').type('2024');

    cy.get('button').contains('Adicionar Carro').should('not.be.disabled').click();

    cy.url().should('include', '/carros');
  });

  it('Desabilita o botão de adicionar carro quando ano inválido é inserido', () => {
    cy.wait(1000);
    cy.get('input[name="name"]').type('Carro Teste');
    cy.get('input[name="brand"]').type('Marca Teste');
    cy.get('input[name="color"]').type('Cor Teste');
    cy.get('input[name="year"]').type('Texto Inválido');

    cy.get('button').contains('Adicionar Carro').should('be.disabled');
  });

  it('Desabilita o botão de adicionar carro quando campos obrigatórios são deixados em branco', () => {
    cy.wait(1000);
    cy.get('button').contains('Adicionar Carro').should('be.disabled');
  });

  it('Desabilita o botão de adicionar carro quando campos são preenchidos apenas com espaços em branco', () => {
    cy.wait(1000);
    cy.get('input[name="name"]').type('   ');
    cy.get('input[name="brand"]').type('   ');
    cy.get('input[name="color"]').type('   ');
    cy.get('input[name="year"]').type('2022');
  
    cy.get('button').contains('Adicionar Carro').should('be.disabled');
  });
  
  it('Desabilita o botão de adicionar carro quando um ano no futuro é inserido', () => {
    cy.wait(1000);
    cy.get('input[name="name"]').type('Carro Teste');
    cy.get('input[name="brand"]').type('Marca Teste');
    cy.get('input[name="color"]').type('Cor Teste');
    cy.get('input[name="year"]').type('2050');
  
    cy.get('button').contains('Adicionar Carro').should('be.disabled');
  });
  
  it('Desabilita o botão de adicionar carro quando um ano muito no passado é inserido', () => {
    cy.wait(1000);
    cy.get('input[name="name"]').type('Carro Teste');
    cy.get('input[name="brand"]').type('Marca Teste');
    cy.get('input[name="color"]').type('Cor Teste');
    cy.get('input[name="year"]').type('1500');
  
    cy.get('button').contains('Adicionar Carro').should('be.disabled');
  });  

});
