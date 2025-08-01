# 🧪 Test Plan - Challenge QA

## 1. Identificación del Proyecto
**Aplicación:** https://www.saucedemo.com/  
**Funcionalidades a testear:**  
- Inicio de sesión  
- Carrito de compras  

## 2. Objetivo del Plan de Pruebas
Validar el correcto funcionamiento de las funcionalidades críticas del sistema: login de usuarios y operación del carrito de compras, garantizando la integridad de la experiencia del usuario.

## 3. Alcance
**In Scope:**  
- Login con credenciales válidas e inválidas  
- Mensajes de error de login  
- Agregado y eliminado de productos del carrito  
- Verificación de totales en el carrito

**Out of Scope:**  
- Flujo completo de checkout  
- Pruebas en dispositivos móviles

## 4. Requerimientos a testear
- Validación de autenticación de usuarios
- Comportamiento del carrito (agregar, eliminar, persistencia)
- Mensajes de error y validaciones front-end

## 5. Tipos de pruebas
- Pruebas funcionales manuales
- Pruebas automatizadas
- Smoke Testing
- Regresión

## 6. Criterios de entrada y salida
**Entrada:**  
- Acceso a la web  
- Entorno funcional  
- Casos de prueba definidos  

**Salida:**  
- Ejecución completa de los casos  
- Reportes generados  
- Capturas de errores identificados  

## 7. Herramientas a utilizar
- Navegador Chrome  
- Cypress para automatización  
- VSCode, Git, GitHub  
- Capturas con Cypress o herramientas del sistema operativo  

## 8. Cronograma
- Día 1: Análisis, Test Plan, Casos de prueba manuales  
- Día 2: Automatización y captura de errores  
- Día 3: API test, revisión final, carga a GitHub

## 9. Riesgos y mitigaciones
| Riesgo | Mitigación |
|--------|------------|
| Problemas de red o sitio caído | Tener capturas y videos offline |
| Falta de claridad en el alcance | Ajustar alcance con documentación y comentarios |
| Automatización falla por cambios en el sitio | Validación constante y ajuste de selectores |

## 10. Responsables
**Tester:** Francisco Conte

