/// <reference types="cypress" />
// --> Se importa la pagina de login para usar sus selectores
import inventoryPage from '../../support/carrito/inventoryPage'
import cartPage from '../../support/carrito/cartPage'
import checkoutStepOnePage from '../../support/carrito/checkoutStepOnePage'
import checkoutStepTwoPage from '../../support/carrito/checkoutStepTwoPage'
import checkoutCompletePage from '../../support/carrito/checkoutCompletePage'


describe('Carrito', () => {
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

  it('TC_CART_02 - Remover un producto del carrito de compras', () => {
    // --> Corremos comando de login con credenciales correctas
    cy.login(datos.login.credenciales.usuario_correcto, datos.login.credenciales.password_correcto)

    // --> Verificamos que la URL sea la correcta, siendo la de inventario
    cy.urlValidator(asserts.urls.inventory)

    // --> Localizamos el catalogo de productos y validamos que se muestre
    cy.get(inventoryPage.inventoryContainerAssert()).should('be.visible')

    // --> Localizamos el producto que queremos agregar al carrito y lo agregamos
    cy.doClickSimple(inventoryPage.addToCartBtn(datos.inventory.productos.producto_1))

    // --> Validamos que en la tarjeta de proucto el boton diga "Remove" en vez de "Add to cart"
    cy.get(inventoryPage.inventoryItemValidator(datos.inventory.productos.producto_1))
      .find('button')
      .should('have.text', 'Remove')

    // --> Localizamos el carrito y lo abrimos
    cy.doClickSimple(inventoryPage.miniCartBtn())

    // --> Validamos que nos redirige a la pagina del carrito
    cy.urlValidator(asserts.urls.cart)

    // --> Validamos que solo exista el producto que agregamos en el carrito
    cy.get(cartPage.cartListAssert())
      .find(cartPage.inventoryItemCartValidator())
      .should('have.length', 2) // Error intencional para generar un fallo en la prueba, comentar esta linea para que la prueba pase
      // .should('have.length', 1) // Descomentar esta linea para que la prueba pase
    cy.get(cartPage.exactItemCartValidator(datos.inventory.productos.producto_1)).should('be.visible')

    // --> Localizamos el boton de remover producto y clickeamos en el
    cy.doClickSimple(cartPage.removeExactItemBtn(datos.inventory.productos.producto_1))

    // --> Validamos que el producto ya no este en el carrito
    cy.get(cartPage.cartListAssert())
      .find(cartPage.inventoryItemCartValidator())
      .should('have.length', 0)

    // --> Regresamos al catalogo de productos
    cy.doClickSimple(cartPage.continueShoppingBtn())

    // --> Validamos que la URL sea la correcta, siendo la de inventario
    cy.urlValidator(asserts.urls.inventory)

    // Localizamos el icono de carrito y validamos que no tenga ningun producto
    cy.get(inventoryPage.miniCartBtn())
      .find(inventoryPage.miniCartBadgeAssert())
      .should('not.exist')
    
    // --> Validamos que el boton en la tarjeta del producto diga "Add to cart" nuevamente
    cy.get(inventoryPage.inventoryItemValidator(datos.inventory.productos.producto_1))
      .find('button')
      .should('have.text', 'Add to cart')

  })

  it('TC_CART_03 - Generar flujo completo de compra de solo un producto', () => {
    // --> Corremos comando de login con credenciales correctas
    cy.login(datos.login.credenciales.usuario_correcto, datos.login.credenciales.password_correcto)

    // --> Verificamos que la URL sea la correcta, siendo la de inventario
    cy.urlValidator(asserts.urls.inventory)

    // --> Localizamos el catalogo de productos y validamos que se muestre
    cy.get(inventoryPage.inventoryContainerAssert()).should('be.visible')

    // --> Invocamos el nombre exacto del producto que vamos a agregar al carrito para luego compararlo en el carrito
    cy.get(inventoryPage.nameExactItemAssert(datos.inventory.productos.producto_2)).invoke('text').then((nombreProducto) => {
      cy.log('Nombre del producto:' + nombreProducto)
      cy.wrap(nombreProducto).as('nombreProductoInventario')
    })

    // --> Invocamos el precio exacto del producto que vamos a agregar al carrito para luego compararlo en el carrito
    cy.get(inventoryPage.priceExactItemAssert(datos.inventory.productos.producto_2)).invoke('text').then((precioProducto) => {
      cy.log('Precio del producto:' + precioProducto)
      cy.wrap(precioProducto).as('precioInventario')
    })

    // --> Localizamos el producto que queremos agregar al carrito y lo agregamos
    cy.doClickSimple(inventoryPage.addToCartBtn(datos.inventory.productos.producto_2))

    // --> Localizamos el carrito y lo abrimos
    cy.doClickSimple(inventoryPage.miniCartBtn())

    // --> Validamos que nos redirige a la pagina del carrito
    cy.urlValidator(asserts.urls.cart)

    // --> Validamos que solo exista el producto que agregamos en el carrito
    cy.get(cartPage.cartListAssert())
      .find(cartPage.inventoryItemCartValidator())
      .should('have.length', 1)
    cy.get(cartPage.exactItemCartValidator(datos.inventory.productos.producto_2)).should('be.visible')

    // --> Obtenemos y validamos que el nombre del producto en el carrito sea el mismo que el del inventario
    cy.get('@nombreProductoInventario').then((nombreProductoInventario) => {
      cy.get(cartPage.nameExactItemCartAssert(datos.inventory.productos.producto_2)).invoke('text').then((nombreProductoCarrito) => {
        cy.wrap(nombreProductoCarrito).should('eq', nombreProductoInventario)
      })
    })

    // --> Obtenemos y validamos que el precio del producto en el carrito sea el mismo que el del inventario
    cy.get('@precioInventario').then((precioInventario) => {
      cy.get(cartPage.priceExactItemCartAssert(datos.inventory.productos.producto_2)).invoke('text').then((precioCarrito) => {
        cy.wrap(precioCarrito).should('eq', precioInventario)
      })
    })

    // --> Localizamos el boton de checkout y clickeamos en el
    cy.doClickSimple(cartPage.checkoutBtn())

    // --> Validamos que nos redirige a la pagina de checkout
    cy.urlValidator(asserts.urls.checkout_step_one)

    // --> Rellenamos los datos del formulario de checkout
    cy.doTypeSimple(checkoutStepOnePage.firstNameInput(), datos.cart.checkout.first_name)
    cy.doTypeSimple(checkoutStepOnePage.lastNameInput(), datos.cart.checkout.last_name)
    cy.doTypeSimple(checkoutStepOnePage.zipPostalCodeInput(), datos.cart.checkout.postal_code)

    // --> Localizamos el boton de continue y clickeamos en el
    cy.doClickSimple(checkoutStepOnePage.continueBtn())

    // --> Validamos que nos redirige a la pagina de checkout step two
    cy.urlValidator(asserts.urls.checkout_step_two)

    // --> Validamos que solo exista el producto que agregamos en el carrito, como su nombre y precio exacto
    cy.get(checkoutStepTwoPage.cartListAssert())
      .find(checkoutStepTwoPage.inventoryItemCartAssert())
      .should('have.length', 1)

    cy.get('@nombreProductoInventario').then((nombreProductoInventario) => {
      cy.get(checkoutStepTwoPage.nameExactItemCartAssert(datos.inventory.productos.producto_2)).invoke('text').then((nombreProductoCheckout) => {
        cy.wrap(nombreProductoCheckout).should('eq', nombreProductoInventario)
      })
    })

    cy.get('@precioInventario').then((precioInventario) => {
      cy.get(checkoutStepTwoPage.priceExactItemCartAssert(datos.inventory.productos.producto_2)).invoke('text').then((precioCheckout) => {
        cy.wrap(precioCheckout).should('eq', precioInventario)
      })
    })

    // --> Validamos que los labels de subtotal, tax y total esten visibles
    cy.get(checkoutStepTwoPage.subTotalLabelAssert()).should('be.visible')
    cy.get(checkoutStepTwoPage.taxLabelAssert()).should('be.visible')
    cy.get(checkoutStepTwoPage.totalLabelAssert()).should('be.visible')

    // --> Obtenemos el precio del inventario guardado previamente y lo comparamos con el subtotal
    cy.get('@precioInventario').then((precioInventario) => {
      cy.log('[precioInventario] -> ' + precioInventario)
      cy.get(checkoutStepTwoPage.subTotalLabelAssert()).invoke('text').then((subTotal) => {
        const subTotalFormat = subTotal.replace('Item total: ', '').trim()
        cy.log('[subTotalFormat] -> ' + subTotalFormat)
        cy.wrap(precioInventario).should('eq', subTotalFormat)
      })
    })

    // --> Obtenemos el subtotal y el tax, los sumamos y validamos que sea igual al total
    cy.get(checkoutStepTwoPage.subTotalLabelAssert()).invoke('text').then((subTotal) => {
      const subTotalFormat = parseFloat(subTotal.replace('Item total: $', '').trim())
      cy.log('[subTotalFormat] -> ' + subTotalFormat)
      cy.get(checkoutStepTwoPage.taxLabelAssert()).invoke('text').then((tax) => {
        const taxFormat = parseFloat(tax.replace('Tax: $', '').trim())
        cy.log('[taxFormat] -> ' + taxFormat)
        cy.get(checkoutStepTwoPage.totalLabelAssert()).invoke('text').then((total) => {
          const totalFormat = parseFloat(total.replace('Total: $', '').trim())
          cy.log('[totalFormat] -> ' + totalFormat)
          const totalCalculado = parseFloat((subTotalFormat + taxFormat).toFixed(2))
          cy.log('[totalCalculado] -> ' + totalCalculado)
          // --> Validamos que el total sea igual al subtotal mas el tax
          cy.wrap(totalFormat).should('eq', totalCalculado)
        })
      })
    })

    // --> Localizamos el boton de finalizar compra y clickeamos en el
    cy.doClickSimple(checkoutStepTwoPage.finishBtn())

    // --> Validamos que nos redirige a la pagina de checkout complete
    cy.urlValidator(asserts.urls.checkout_complete)

    // --> Validamos que el mensaje de compra exitosa este visible
    cy.get(checkoutCompletePage.checkoutCompleteAssert()).should('be.visible')

    // --> Localizamos el boton de volver al inicio y clickeamos en el
    cy.doClickSimple(checkoutCompletePage.backHomeBtn())

    // --> Validamos que nos redirige a la pagina de inventario
    cy.urlValidator(asserts.urls.inventory)
  })

  
})
