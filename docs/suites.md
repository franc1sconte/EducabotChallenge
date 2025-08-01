# Clasificación de Casos: Smoke vs Regresión

## Smoke Testing Suite

1. **TC_LOGIN_01** - Login con credenciales correctas  
   Permite validar que el usuario pueda acceder correctamente al sistema.

2. **TC_CART_01** - Agregar múltiples productos al carrito  
   Confirma que la función principal del carrito (agregar productos) funciona.

---

## Regresión Testing Suite

1. **TC_LOGIN_02** - Login fallido con credenciales incorrectas  
   Verifica el manejo de errores ante datos inválidos.

2. **TC_LOGIN_03** - Login sin ingresar credenciales  
   Verifica validaciones de campos obligatorios.

3. **TC_CART_02** - Remover un producto del carrito  
   Comprueba que el carrito se actualiza correctamente y resta productos.

4. **TC_CART_03** - Flujo completo de compra de un producto  
   Verifica el flujo end-to-end de compra, útil para regresión ya que involucra múltiples componentes.


# Por que esta clasificación?

* Por el lado de la suite de [Smoke], se incluye lo mínimo indispensable para validar que el sistema no está roto. Ademas, por el lado de automation, es esencial que esta suite sea rapida y dure poco, ya que generalmente se incluye en una pipeline(CI/CD) antes de un deploy y esto podría relentizar/trabar el proceso de desarrollo.

* Por el lado de la suite de [Regresion], verifica en profundidad comprobando que las funcionalidades existentes no se vean afectadas. Por el lado de automation, no es gran problema la duración de esta suite (aunque siempre es bueno optimizarla al maximo), ya que puede correr luego de un deploy, en horarios separados tomandose su tiempo para validar cada "rincon" del sistema.
