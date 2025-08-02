# ✅ Casos de Prueba - [Carrito de compras]

## Información General
- **Funcionalidad:** [Carrito de compras]
- **Tester:** Francisco Conte
- **Fecha:** [31-07-2025]
- **Entorno:** https://www.saucedemo.com/

---

## Caso de Prueba 1: [Agregar multiples productos al carrito de compras]

- **ID:** TC_CART_01

- **Descripción:**  Dado el catalogo de productos proporcionado por saucedemo, agregaremos 3 productos al carrito y validaremos que permita agregar multiples productos al carrito, ademas de validar que todas las caracteristicas de los productos no se vean alteradas al cargar estos productos al carrito.

- **Precondiciones:**
  - Tener el catalogo de productos vigente proporcionado por saucedemo

- **Pasos:**
  1. Ingresar a https://www.saucedemo.com/
  2. Localizar el input de usuario (placeholder: "Username") y escribir un usuario valido.
  3. Localizar el input de contraseña (placeholder: "Password") y escribir una contraseña valida.
  4. Localizar el boton de login y clickear en el.
  5. Localizar el catalogo de productos
  6. Localizar y agregar al carrito los siguientes productos: [Sauce Labs Bike Light, Sauce Labs Backpack y Sauce Labs Fleece Jacket] a través del boton de "Add to cart" en la misma tarjeta de c/u de los productos
  7. Una vez agregado c/u de los productos al carrito, validar que el boton de "Add to cart" de c/u de los productos cambie a "Remove".
  8. Localizar el boton de "Carrito", validar que el numero que aparece es la cantidad de productos agregada y clickear en el.
  9. Validamos que nos redirige a la seccion de "/cart.html"
  10. Validamos que existan 3 productos agregados al carrito.
  11. Validamos c/u de las caracteristicas de los productos agregados al carrito como: [nombre_producto] [descripcion_producto] y [precio_producto]

- **Datos de prueba:**
  - 

- **Resultado esperado:**  
  Al agregar multiples productos al carrito, estos se agregan correctamente, como asi también su [nombre_producto] [descripcion_producto] y [precio_producto]

- **Resultado real:**  
  Se agregaron 3 productos al carrito correctamente, con su información correspondiente de [nombre_producto] [descripcion_producto] y [precio_producto]

- **Estado:** [Pasó ✅]

---

## Caso de Prueba 2: [Remover un producto del carrito de compras]

- **ID:** TC_CART_02

- **Descripción:** Dado el catalogo de productos proporcionado por saucedemo, agregaremos 1 producto al carrito y validaremos que permita remover ese producto agregado al carrito, como asi también que el valor que muestra en el icono de "Cart" en la sección de /inventory.html disminuya y permita nuevamente agregar ese producto al carrito.

- **Precondiciones:**
  - Tener el catalogo de productos vigente proporcionado por saucedemo

- **Pasos:**
  1. Ingresar a https://www.saucedemo.com/
  2. Localizar el input de usuario (placeholder: "Username") y escribir un usuario valido.
  3. Localizar el input de contraseña (placeholder: "Password") y escribir una contraseña valida.
  4. Localizar el boton de login y clickear en el.
  5. Localizar el catalogo de productos
  6. Localizar y agregar al carrito el siguiente producto: [Sauce Labs Bike Light] a través del boton de "Add to cart" en la misma tarjeta del producto
  8. Validamos que el boton "Add to cart" ahora deberia de ser un botón que diga "Remove"
  9. Localizar el boton de "Carrito" y clickear en el.
  10. Validamos que nos redirige a la seccion de "/cart.html"
  11. Validamos que solo exista el producto que agregamos en el carrito.
  12. Localizamos el botón de "Remove" en la tarjeta de producto en el carrito y clickeamos en el.
  13. Validamos que el carrito quede vacio ya que no deberia de aparecer el producto que removimos.
  14. Localizamos y clickeamos en el botón de "Continue Shopping".
  15. Validamos que nos redirija a la sección de /inventory.html
  16. Localizamos el icono de "Carrito" y validamos que no tiene ningun numero de preview, representando que no tiene productos agregados.
  17. Validamos que en la tarjeta de producto el cual removimos del carrito [Sauce Labs Bike Light] tiene el botón de "Add to cart" nuevamente. 


- **Datos de prueba:**
  - 

- **Resultado esperado:**  
  Al remover un producto del carrito, este debe desaparecer, dejando vacio el carrito. Por otro lado al volver a la sección de /inventory.html la tarjeta de producto que removimos anteriormente, tiene que dejar agregar nuevamente al carrito a través del botón "Add to cart". Por último, el icono de "Carrito" no debe tener un numero como preview, ya que el carrito ahora se encuentra vacio.

- **Resultado real:**  
  Al remover un producto del carrito, este se elimina correctamente dejando el carrito vacio. Por otro lado tambien se habilita nuevamente el botón de "Add to cart" en la tarjeta de producto y el numero de la preview de carrito desaparece en la sección de /inventory.html

- **Estado:** [Pasó ✅]

---

## Caso de Prueba 3: [Generar flujo completo de compra de solo un producto]

- **ID:** TC_CART_03

- **Descripción:** Dado el catalogo de productos proporcionado por saucedemo, agregaremos 1 producto al carrito y validaremos que permita realizar el flujo completo de compra/generacion de pedido. 

- **Precondiciones:**
  - Tener el catalogo de productos vigente proporcionado por saucedemo

- **Pasos:**
  1. Ingresar a https://www.saucedemo.com/
  2. Localizar el input de usuario (placeholder: "Username") y escribir un usuario valido.
  3. Localizar el input de contraseña (placeholder: "Password") y escribir una contraseña valida.
  4. Localizar el boton de login y clickear en el.
  5. Localizar el catalogo de productos
  6. Localizar y agregar al carrito el siguiente producto: [Sauce Labs Bike Light] a través del boton de "Add to cart" en la misma tarjeta del producto
  8. Localizar el boton de "Carrito" y clickear en el.
  9. Validamos que nos redirige a la seccion de "/cart.html"
  10. Validamos que solo exista el producto que agregamos en el carrito.
  11. Validamos que los datos de [nombre_producto] y [precio_producto] son correctos en la tarjeta de producto en el carrito.
  12. Localizamos y clickeamos en el boton de "Checkout"
  13. Validamos que rediriga correctamente a la sección de /checkout-step-one.html
  14. Rellenamos los inputs de "First name", "Last name" y Zip/Postal code con informacion correspondiente
  15. Clickeamos en el botón de "Continue"
  16. Validamos que nos redirige a la sección de /checkout-step-two.html
  17. Validamos en esta sección que aparezca el producto que agregamos anteriormente, como asi también que su precio sea el correspondiente.
  18. Localizamos la subsección de "Price total", validamos que el "Item total" sea correcto
  19. Localizamos y obtenemos el "Tax" dentro de la subsección de "Price total", la sumamos y validamos que la sumatoria entre "Item total"  + "Tax" = "Total" sea correcta.
  20. Localizamos el botón de "Finish" y clickeamos en el.
  21. Validamos que nos redirige a la sección de /checkout-complete.html
  22. Validamos que aparezca un mensaje de confirmación que diga que nuestro pedido fue confirmado.
  23. Localizamos el botón de "Back home" y clickeamos en el.
  24. Validamos que nos redirige a la sección de /inventory.html

- **Datos de prueba:**
  - 

- **Resultado esperado:**  
  Al agregar un producto al carrito, este se muestra con su información correspondiente de manera correcta en todas las etapas de la generación de compra/pedido. Pudiendo finalmente completar la compra con exito.

- **Resultado real:**  
  Al intentar realizar una compra de un producto, este se mostró correctamente en todas las etapas de compra, permitiendo finalmente realizar la compra/pedido con exito por el total correspondiente.

- **Estado:** [Pasó ✅]