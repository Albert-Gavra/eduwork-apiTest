/// <reference types="Cypress"/>

Cypress.env('apiUrl', 'https://reqres.in/api');

describe('Tugas Authentitacion', () => {

    it('Login menggunakan command', () => {
        cy.loginViaAPI('eve.holt@reqres.in', 'cityslicka');
    });

});