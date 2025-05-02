/// <reference types="Cypress"/>

describe('Create New User', () => {

    it('It should create a new user', () => {
        var user = {
            "name": "Eduwork",
            "job": "QA Engineer"
        }

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: user,
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
        .then((response) => {
            expect(response.status).equal(201);
            expect(response.body).to.have.property('name', user.name);
            expect(response.body).to.have.property('job', user.job);
        })   
             
    });

});