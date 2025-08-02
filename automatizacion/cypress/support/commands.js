/// <reference types="cypress"/>
import loginPage from '../support/login/loginPage'

// -- < Login Commands > --

Cypress.Commands.add('login', (usuario, contraseña) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(loginPage.loginContainerAssert()).should('be.visible')
    cy.doTypeSimple(loginPage.usernameInput(), usuario)
    cy.doTypeSimple(loginPage.passInput(), contraseña)
    cy.doClickSimple(loginPage.loginBtn())
})

// -- < Action commands > --

Cypress.Commands.add('doClickSimple', (locator) => {
    cy.get(locator).should('be.visible').click()
})

Cypress.Commands.add('doTypeSimple', (locator, text) => {
    cy.get(locator).should('be.visible')
    cy.get(locator).type(text)
})

Cypress.Commands.add('urlValidator', (url) => {
    cy.url().should('be.eq', url)
})