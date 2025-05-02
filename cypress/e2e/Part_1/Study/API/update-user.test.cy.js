/// <reference types="Cypress"/>

describe('Successfuly update user', () => {

    it('It should update a user', () => {
        var user = {
            "name": "Mark Rober",
            "job": "Youtuber"
        }

        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: user,
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
        .then((response) => {
            expect(response.status).equal(200);
            expect(response.body.name).to.eq(user.name);
            expect(response.body.job).to.eq(user.job);
        })   
             
    });

});