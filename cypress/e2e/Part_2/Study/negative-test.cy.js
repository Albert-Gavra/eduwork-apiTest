/// <reference types="Cypress"/>

describe('Validate negative status code', () => {

    it('Sucessfully validate negative response', () => {
        cy.request({
            method: 'GET',
            url : 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal', 404)
    });

});