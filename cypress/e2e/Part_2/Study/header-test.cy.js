/// <reference types="Cypress"/>

describe('Validate Header', () => {

    it('Sucessfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')

    });

});