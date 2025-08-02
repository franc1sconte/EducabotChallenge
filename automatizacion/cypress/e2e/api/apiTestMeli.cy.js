/// <reference types="cypress" />

describe('Api', () => {

  it('TC_API_01 - Verificar que la respuesta contenga “departments”', () => {
     cy.request({
      method: 'GET', // --> Aunque request por defecto es GET, se especifica para mayor claridad
      url: 'https://www.mercadolibre.com.ar/menu/departments' // --> URL de la API solicitada
    }).then((response) => {
      // --> Se verifica que el status sea 200
      expect(response.status).to.eq(200)
      // --> Se verifica que la respuesta contenga la propiedad "departments" solicitado en la consinga
      expect(response.body).to.have.property('departments')
      // --> Se verifica que "departments" sea un array (importante para que no falle en caso de que la API cambie)
      expect(response.body.departments).to.be.an('array')
      // --> Por ultimo, se verifica que el array no este vacio
      expect(response.body.departments.length).to.be.greaterThan(0)
    })
  })
  
})
