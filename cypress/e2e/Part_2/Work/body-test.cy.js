/// <reference types="Cypress"/>

describe('Validate Body', () => {

    it('Sucessfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').its('name').should('include', 'ditto')

    });

});