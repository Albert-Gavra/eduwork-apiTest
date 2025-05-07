/// <reference types="Cypress"/>

describe('Validate content', () => {

    it('Sucessfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('body').should('include', {name: "ditto"})
    });

});