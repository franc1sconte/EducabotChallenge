/// <reference types="cypress" />
// --> Se importa la pagina de login para usar sus selectores
import loginPage from '../../support/login/loginPage'


describe('Login', () => {
  // --> Variables para traer asserts.json y datos.json de fixtures
  let asserts
  let datos

  // --> Traemos los asserts y datos antes de cada test
  // --> Esto permite que los datos sean reutilizables en cada test
  beforeEach(() => {
    cy.fixture(Cypress.env("assertsJson")).then(function (assertsv) {
      asserts = assertsv
    })
    cy.fixture(Cypress.env("datosJson")).then(function (datosv) {
      datos = datosv
    })
  })

  it('TC_LOGIN_01 - Login con credenciales correctas', () => {
    // --> Corremos comando de login con credenciales correctas
    cy.login(datos.login.credenciales.usuario_correcto, datos.login.credenciales.password_correcto)

    // --> Verificamos que la URL sea la correcta, siendo la de inventario
    cy.urlValidator(asserts.urls.inventory)

    // --> Verificamos que el contenedor de login no se muestre
    cy.get(loginPage.loginContainerAssert()).should('not.exist')
  })

  it('TC_LOGIN_02 - Login fallido con credenciales incorrectas', () => {
    // --> Corremos comando de login con credenciales incorrectas
    cy.login(datos.login.credenciales.usuario_incorrecto, datos.login.credenciales.password_incorrecto)

    // --> Verificamos que el contenedor de login se muestre
    cy.get(loginPage.errorLoginAssert()).should('be.visible')
    
    // --> Verificamos que el mensaje de error sea el esperado
    cy.get(loginPage.errorLoginAssert()).invoke('text').then((textoMostrado) => {
      cy.wrap(textoMostrado).should('be.equal', asserts.login.error.credenciales_incorrectas)
    })

    // --> Verificamos que la URL sea la correcta, siendo la de login
    cy.urlValidator(asserts.urls.login)
  })

})
