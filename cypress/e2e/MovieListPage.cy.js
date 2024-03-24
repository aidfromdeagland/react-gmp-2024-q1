/// <reference types="cypress" />

describe('MovieListPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9999');
  });

  it('should change url path based on applied sorting', () => {
    cy.get('[data-testid="sort-control"]')
      .select('release_date asc');

    cy.url()
      .should('equal', 'http://localhost:9999/?sorting=release_date+asc');
  });

  it('should change order of movies in the list based on applied sorting', () => {
    cy.get('[data-testid="search"]')
      .type('Fury');

    cy.contains('Search')
      .click();

    cy.get('[data-testid="movie-tile"]')
      .first()
      .should('contain', 'Fury');

    cy.get('[data-testid="movie-tile"]')
      .last()
      .should('contain', 'Fist of Fury');
  
    cy.get('[data-testid="sort-control"]')
      .select('title asc');

    cy.get('[data-testid="movie-tile"]')
      .first()
      .should('contain', 'Fist of Fury');

    cy.get('[data-testid="movie-tile"]')
      .last()
      .should('contain', 'Mad Max: Fury Road');

    cy.url()
      .should('equal', 'http://localhost:9999/?query=Fury&sorting=title+asc');
  });

  it('should change url path based on search query', () => {
    cy.get('[data-testid="search"]')
      .type('Fury');

    cy.contains('Search')
      .click();

    cy.url()
      .should('equal', 'http://localhost:9999/?query=Fury');
  });

  it('should apply search filter', () => {
    cy.get('[data-testid="movie-tile"]')
      .should('have.length', 10);

    cy.get('[data-testid="search"]')
      .type('Fury');

    cy.contains('Search')
      .click();

    cy.get('[data-testid="movie-tile"]')
      .should('have.length', 4);
  });

  it('should change url path based on search query', () => {
    cy.get('[data-testid="search"]')
      .type('lalala');

    cy.contains('Search')
      .click();

    cy.url()
      .should('equal', 'http://localhost:9999/?query=lalala');
  });

  it('should change url path based on selected genre', () => {
    cy.get('[data-testid="genre-filter"] > li')
      .first()
      .click();

    cy.url()
      .should('equal', 'http://localhost:9999/?genre=Action');
  });

  it('should change url path based on clicked movie tile', () => {
    cy.contains('Fifty Shades Freed')
      .click({ force: true });

    cy.url()
      .should('equal', 'http://localhost:9999/337167');
  });

  it('should render movie detail instead of search on movie tile click', () => {
    cy.get('[data-testid="search"]')
      .should('exist');

    cy.contains('Fifty Shades Freed')
      .click({ force: true });

    cy.get('[data-testid="search"]')
      .should('not.exist');

    cy.get('[data-testid="movie-details"]')
      .should('exist');
  });

  it('should persist search params on clicked movie tile', () => {
    cy.get('[data-testid="search"]')
      .type('Fury');

    cy.contains('Search')
      .click();

    cy.contains('Kung Fury')
      .click({ force: true });

    cy.url()
      .should('equal', 'http://localhost:9999/251516?query=Fury');
  });

  it('should have "Back To Search" button to give user ability to close movie details', () => {
    cy.contains('Fifty Shades Freed')
      .click({ force: true });

    cy.get('[data-testid="search"]')
      .should('not.exist');

    cy.get('[data-testid="movie-details"]')
      .should('exist');

    cy.url()
      .should('equal', 'http://localhost:9999/337167');

    cy.contains('Back To Search')
      .click();

    cy.get('[data-testid="search"]')
      .should('exist');

    cy.get('[data-testid="movie-details"]')
      .should('not.exist');

    cy.url()
      .should('equal', 'http://localhost:9999/');
  });

  it('should persist search params on "Back To Search" button click', () => {
    cy.get('[data-testid="search"]')
      .type('Fury');

    cy.contains('Search')
      .click();

    cy.contains('Kung Fury')
      .click({ force: true });

    cy.url()
      .should('equal', 'http://localhost:9999/251516?query=Fury');

    cy.contains('Back To Search')
      .click();

    cy.url()
      .should('equal', 'http://localhost:9999/?query=Fury');
  });
});