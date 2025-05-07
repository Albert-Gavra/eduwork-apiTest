/// <reference types="Cypress"/>

describe('Validate content', () => {

    it('Sucessfully validate content', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        })
        .then((response) => {
            expect(response.status).equal(200);
            expect(response.body.abilities[0].ability.name).to.eq('limber');
        }) 
    });

});