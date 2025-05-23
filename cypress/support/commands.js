// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/login`,
        headers: {
            'x-api-key': 'reqres-free-v1',  
        },
        body: {
            email: email, 
            password: password,
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
        const token = response.body.token;
        cy.setCookie('authToken', token);

        cy.log('Token:', token);
    })
});