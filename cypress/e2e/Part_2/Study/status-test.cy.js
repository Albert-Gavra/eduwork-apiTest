/// <reference types="Cypress"/>

describe('Validate status code', () => {

    it('Sucessfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Also successfully validate status code', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });

});