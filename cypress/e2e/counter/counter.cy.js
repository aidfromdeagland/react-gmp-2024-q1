/// <reference types="cypress" />

describe('counter', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9999')
    });
  
    it('displays 42 as initial value of counter', () => {
      cy.get('[data-testid="counter"] > span').should('have.text', '42');
    });

    it('has two buttons to change the counter', () => {
      cy.get('[data-testid="counter"] > button').should('have.length', 2);
      cy.get('[data-testid="counter"] > button').first().should('have.text', '-');
      cy.get('[data-testid="counter"] > button').last().should('have.text', '+');
    });

    it('increments counter on "+" click', () => {
      cy.contains('+').click();
      cy.get('[data-testid="counter"] > span').should('have.text', '43');

      cy.contains('+').click();
      cy.get('[data-testid="counter"] > span').should('have.text', '44');
    });

    it('decrements counter on "-" click', () => {
      cy.contains('-').click();
      cy.get('[data-testid="counter"] > span').should('have.text', '41');

      cy.contains('-').click();
      cy.get('[data-testid="counter"] > span').should('have.text', '40');
    });
  });