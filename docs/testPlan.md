# 🧪 Test Plan - Challenge QA

## 1. Identificación del Proyecto
**Aplicación:** https://www.saucedemo.com/  
**Funcionalidades a testear:**  
- Inicio de sesión  
- Carrito de compras (y su relacion con el inventario de productos)

## 2. Objetivo del Plan de Pruebas
Validar el correcto funcionamiento de las funcionalidades críticas del sistema: login de usuarios y operación del carrito de compras, garantizando la integridad de la experiencia del usuario.

## 3. Alcance
**In Scope:**  
- Login con credenciales válidas e inválidas  
- Mensajes de error de login  
- Agregado y eliminado de productos del carrito  
- Verificación de totales en el carrito
- Flujo completo de checkout

**Out of Scope:**  
- Filtrado de productos en pagina de inventory  
- Pruebas en dispositivos móviles

## 4. Requerimientos a testear
- Validación de autenticación de usuarios
- Comportamiento del carrito (agregar, eliminar, persistencia)
- Mensajes de error y validaciones front-end
- Funcionalidad de compra

## 5. Tipos de pruebas
- Pruebas funcionales manuales
- Pruebas automatizadas
- Smoke Testing
- Regresión

## 6. Herramientas a utilizar
- Navegador Chrome  
- Cypress para automatización  
- VSCode, Git, GitHub  
- Capturas con funcionalidad integrada de Cypress
- Mochawesome para la generación de reportes
- Mocha (integrado en Cypress) para la estructura de las pruebas
- Chai (integrado en Cypress) para las aserciones

## 7. Cronograma
- Día 1: Análisis, Test Plan, Casos de prueba manuales  
- Día 2: Automatización, captura de errores, API test y generación de   reportes
- Día 3: Revisión final, carga a GitHub con la version final

## 8. Responsables
**Tester:** Francisco Conte

