/// <reference types="cypress" />

describe('genre-filter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9999');
  });
  
  it('has all genres displayed', () => {
    cy.get('[data-testid="genre-filter"] > li').should('have.length', 13);
  });

  it('should highlight selected genre', () => {
    cy
      .contains('Action')
      .click()
      .should('have.css', 'background-color', 'rgb(128, 128, 128)')
      .and('have.css', 'color', 'rgb(255, 255, 255)');
  });

  it('should highlight clicked genre and unset previously selected one', () => {
    cy
      .contains('Action')
      .click()
      .should('have.css', 'background-color', 'rgb(128, 128, 128)')
      .and('have.css', 'color', 'rgb(255, 255, 255)');
    cy
      .contains('Drama')
      .click()
      .should('have.css', 'background-color', 'rgb(128, 128, 128)')
      .and('have.css', 'color', 'rgb(255, 255, 255)');

    cy
      .contains('Action')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'color', 'rgb(128, 128, 128)');
  });
});