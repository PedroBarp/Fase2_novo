const URL = 'http://localhost:3000/carros';

describe('Lista de Carros', () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it('Exclui o primeiro carro da lista', () => {
    cy.wait(1000);
    cy.get('ul').find('li').should('have.length.gt', 0);
    cy.get(':nth-child(1) > .MuiStack-root > [data-testid="exclui-button"]').click()
    cy.wait(1000);
    cy.get('ul').find('li').should('have.length.gt', 0);
  });
});

