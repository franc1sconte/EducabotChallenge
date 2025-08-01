# ✅ Casos de Prueba - [Login]

## Información General
- **Funcionalidad:** [Inicio de sesión]
- **Tester:** Francisco Conte
- **Fecha:** [31-07-2025]
- **Entorno:** https://www.saucedemo.com/

---

## 🔢 Caso de Prueba 1: [Login con credenciales correctas]

- **ID:** TC_LOGIN_01

- **Descripción:** [Caso POSITIVO] Dado los datos de login correctos, deberiamos de: poder iniciar sesion ingresado
el user correcto en el input (placeholder: "Username") y la pass en el input (placeholder: "Password") para luego clickear en el botón de "Login" para que finalmente nos redirija a la sección de /inventory.html correctamente.

- **Precondiciones:**
  - Navegador abierto en la página de login
  - Obtener credenciales de login correctas

- **Pasos:**
  1. Ingresar a https://www.saucedemo.com/
  2. Localizar el input de usuario (placeholder: "Username") y escribir un usuario valido.
  3. Localizar el input de contraseña (placeholder: "Password") y escribir una contraseña valida.
  4. Localizar el boton de login y clickear en el.
  5. Validar que al clickear en el boton de login luego de ingresar credenciales validas, nos redirije a la sección de /inventory.html

- **Datos de prueba:**
  - Usuario: standard_user
  - Contraseña: secret_sauce

- **Resultado esperado:**  
  Al clickear en el botón de login, luego de escribir credenciales validas en los inputs correspondientes, debería de redirigirnos a la sección de /inventory.html

- **Resultado real:**  
  Al ingresar credenciales validas en los inputs correspondientes para luego clickear en el botón de "Login", nos inicia sesión y nos redirije correctamente a la sección de /inventory.html

- **Estado:** [Pasó ✅]

---

## 🔢 Caso de Prueba 2: [Login fallido con credenciales incorrectas]

- **ID:** TC_LOGIN_02

- **Descripción:** [Caso NEGATIVO] Dado los datos de login incorrectos, deberiamos de: NO poder iniciar sesion ingresado credenciales incorrectas en el input (placeholder: "Username") y la pass en el input (placeholder: "Password") para luego clickear en el botón de "Login" para que finalmente nos salte un tooltip especificando que las credenciales ingresadas son incorrectas.

- **Precondiciones:**
  - Navegador abierto en la página de login
  - Generar credenciales de login incorrectas

- **Pasos:**
  1. Ingresar a https://www.saucedemo.com/
  2. Localizar el input de usuario (placeholder: "Username") y escribir un usuario invalido.
  3. Localizar el input de contraseña (placeholder: "Password") y escribir una contraseña invalida.
  4. Localizar el boton de login y clickeaar en el.
  5. Validar que al clickear en el boton de login luego de ingresar credenciales invalidas, nos aparezca un toast aclarando que las credenciales no son correctas y no nos redirija a la seccion de /inventory.html

- **Datos de prueba:**
  - Usuario: user_incorrect
  - Contraseña: not_secret_sauce

- **Resultado esperado:**  
  Al clickear en el botón de login, luego de escribir credenciales invalidas en los inputs correspondientes, aparecer un toast que diga "Epic sadface: Username and password do not match any user in this service" y no redirigirnos a la seccion de /inventory.html

- **Resultado real:**  
  Al ingresar credenciales invalidas en los inputs correspondientes para luego clickear en el botón de "Login", NO inicia sesión, NO nos redirije a la sección de /inventory.html y nos salta un toast aclarando cual fue la causa: "Epic sadface: Username and password do not match any user in this service"

- **Estado:** [Pasó ✅]

---

## 🔢 Caso de Prueba 3: [Login fallido sin ingresar credenciales]

- **ID:** TC_LOGIN_03

- **Descripción:** [Caso NEGATIVO] Dado los datos de login nulos, deberiamos de: NO poder iniciar sesion sin ingresar credenciales en el input (placeholder: "Username") y la pass en el input (placeholder: "Password") para luego clickear en el botón de "Login" para que finalmente nos salte un tooltip especificando que credenciales faltan para completar el login.

- **Precondiciones:**
  - Navegador abierto en la página de login

- **Pasos:**
  1. Ingresar a https://www.saucedemo.com/
  2. Localizar el input de usuario (placeholder: "Username") y dejarlo vacio.
  3. Localizar el input de contraseña (placeholder: "Password") y dejarlo vacio.
  4. Localizar el boton de login y clickear en el.
  5. Validar que al clickear en el boton de login luego de no ingresar credenciales, nos aparezca un toast aclarando que credenciales faltan y no nos redirija a la seccion de /inventory.html

- **Datos de prueba:**
  - Usuario: [null]
  - Contraseña: [null]

- **Resultado esperado:**  
  Al clickear en el botón de login, luego de NO escribir credenciales en los inputs correspondientes, debería de aparecer un toast que nos especifique cuales son los datos faltantes para compeltar el login y no redirigirnos a la seccion de /inventory.html

- **Resultado real:**  
  Al NO ingresar credenciales en los inputs correspondientes para luego clickear en el botón de "Login", NO inicia sesión, NO nos redirije a la sección de /inventory.html y nos salta un toast aclarando cual fue la causa: "Epic sadface: Username is required"

- **Estado:** [Pasó ✅]