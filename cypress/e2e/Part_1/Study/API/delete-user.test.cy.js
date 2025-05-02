/// <reference types="Cypress"/>

describe('Successfuly delete user', () => {

    it('It should delete a user', () => {

        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
        .then((response) => {
            expect(response.status).equal(204);
        })
             
    });

});