/// <reference types="cypress" />

describe('counter', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9999');
    });
  
    it('has all genres displayed', () => {
      cy.get('ul li').should('have.length', 8);
    });

    it('should highlight selected genre', () => {
      cy
        .contains('Lorem')
        .should('have.css', 'background-color', 'rgb(128, 128, 128)')
        .and('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('should highlight clicked genre and unset previously selected one', () => {
        cy
        .contains('elit')
        .click()
        .should('have.css', 'background-color', 'rgb(128, 128, 128)')
        .and('have.css', 'color', 'rgb(255, 255, 255)');

      cy
        .contains('Lorem')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .and('have.css', 'color', 'rgb(128, 128, 128)');
    });
  });