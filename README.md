# EducabotChallenge

## A continuación detallare paso a paso para que la corrección del challenge se pueda realizar de una forma sencilla.

### Aclaraciones generales

1. Vi oportuno usar el formato de "markdowns" en archivos para integrar toda la informacion dentro del mismo repositorio de Github y evitar usar enlaces o paginas externas.
Mas que todo esto esta pensado en el contexto del challenge para facilitar la corrección, ya que siempre es bueno diversificar y usar diferentes herramientas de organización según lo requiera.

2. Las plantillas utilizadas para los TC, reportes y demás tipo de información estructura fue generada a través de chat-gpt. Siempre verificando que la estructura da pie a proveer información relevante. Las estructuras generalmente tiene aspecto colaborativo, es decir, son metodologias que dentro de un equipo se charlan y se coordinan para poder cumplir un objetivo claro. Por ende, no existe un plantilla "perfecta" ya que todas responden a necesidades concretas.

# Sección 1: Pruebas y reporte de errores

*Como se especificaba en la consigna, todo lo relacionado a la seccion #1 esta contenida dentro de la carpeta "docs" dentro de la carpeta raiz "EducabotChallenge" que engloba todo lo relacionado al challenge en si.*

Dentro de la carpeta "docs" encontraremos 3 carpetas; 

*"bugReports"* para el bug-report.

*"screenshoots"* para guardar todas las capturas relacionadas para al evidencia y tambien para los embeds incluidos en los markdowns para enriquecer la explicación.

*"testCases"* es la carpeta donde se encuentran todos los casos de prueba requeridos para el challenge. Dentro encontraremos archivos .md con el nombre de c/u de los escenarios de prueba y toda su información.

*archivo suites.md* como se especifica en la seccion 1.3, cree un archivo .md para explicar y seccionar las pruebas generadas anteriormente en dos grupos "smoke" y "regression".

*archivo testPlan.md* como se pide en la seccion 1.1, se genera un test plan, en este caso en un archivo .md donde dentro encontraremos todo el plan de pruebas que se llevará a cabo a lo largo de todo el proyecto, como también información extra. La estructura fue generada por chat-gpt. Nuevamente aclaro que la estructura fue filtrada solo para mostrar información relevante en el contexto del challenge.

---

# Sección 2: Automatización de Pruebas

*No se espcificaba, pero opté por crear una carpeta llamada "automatización" que englobe todo lo relacionado a la seccion N#2 del challenge, para mayor organización del repo.*

⚠️ *Informacion Importante para correr las pruebas automatizadas* ⚠️

Se recomienda tener en cuenta los siguientes scripts/comandos para correr las pruebas, como asi también la generación de los reportes (se explica c/u de los scripts mas adelante si se necesita):

1. Tener en cuenta la estructura de proyecto, si se quieren correr los scripts tanto para la ejecución de las pruebas automatizadas, como también para la generación de reportes, es neceario moverse a la carpeta de "automatizacion" desde la consola con "cd automatizacion" si es que nos encontramos "parados" en la carpeta de "educabotchallenge"

[Path correcto] ..\EducabotChallenge\automatizacion

2. npm run cypress:run   ==> comienza la corrida de todos los specs de prueba, tanto del carrito como de login en modo headless. Luego de que las pruebas finalicen se genera una carpeta reports con la informacion de c/u de los specs

3. npm run report:full   ==> script que concatena dos scripts dentro, uno para mergear los archivos de reportes de c/u de los specs ejecutados, como asi tambien otro para generar un unico index.html para mostrar el reporte unificado de un mismo html de todos los specs de prueba. Sin correr este script, no generaremos el reporte unificado correctamente.

---

## Explicaciones de la esctructura del proyecto

Dentro de la carpeta "automatizacion" encontraremos:

*carpeta cypress* aqui se encuentra el framework de automatización elegido, en mi caso fue Cypress, además de que en el mail del challenge se recomendaba.

*carpeta node_modules* contiene todas las dependencias. Esta por motivos prácticos no se sube a github, gracias a la referencia en el archivo de .gitignore

*archivo cypress.config.js* configuración de cypress, aqui configuré las preferencias del reporter "mochawesome", como asi también variables de entorno utilizadas para los fixtures.

*archivo package-lock.json* la función de este archivo es registrar la versiones de las dependencias utilizadas en el proyecto, es útil para volver a instalar estas dependencias en otros entornos sin problemas de versionado.

*package.json* archivo de configuración del proyecto, aca encontraremos información como el nombre del proyecto, el autor, las dependencias y por último y no menos importante, los scripts utilizados. En mi caso cree los siguientes scripts para facilitar el uso del framework de pruebas, paso a detallar uno por uno:

1. "cypress:run" corre cypress en modo headless en el navegador por defecto, ademas de limpiar la carpeta de "reports" generada por mochawesome, esto para no generar duplicados y tener un reporte mas "limpio" de cada corrida.
2. "test:chrome" idem anterior pero en el navegador de chrome
3. "test:edge" idem anterior pero en el navegador de edge
4. "clean:reports" dependencia externa instalada para manejar mas comodamente la eliminación de la carpeta reports generada por mochawesome
5. "report:merge" mochawesome genera tantos reportes como specs tengamos, merge es una dependencia de mochawesome que une (mergea) todos reportes en uno.
6. "report:generate" utiliza el archivo "final-report" generado por el script "report:merge" para crear un index.html mostrando el reporte completo de todos los specs.
7. "report:full" este comando simplifica todo, ya que concatena dentro de si mismo los scripts de "report:merge" y "report:generate" haciendo el proceso de generacion de reportes mas "limpio".


*archivo stack.md* aqui encontraremos el stack técnico utilizado, además de una breve explicación del porque se uso este stack.

---

## Última seccion de "Importante"

Se responden a las aclaraciones del final del documento-challenge:

Multi-browser

Cypress no permite ejecutar los tests en múltiples navegadores al mismo tiempo de forma nativa, por ende cree scripts por si se requiere correr en otro navegador.

--

Caso fallido

Se hace fallar intencionalmente el "TC_CART_02 - Remover un producto del carrito de compras" para cumplir con la consigna. Este genera un screenshoot que podemos ver dentro de la carpeta cypress/screenshoots luego de que finaliza la ejecución.

--

Uso de herramientas externas - IA

Se utilizo chat-gpt a base de prompts en todas las etapas del proyecto. Todas las respuestas fueron evaluadas en base a mi criterio para poder modificarlas, incluirlas e inlcuso en algunos casos descartalas ya que toda respuesta puede que nos sirva o no, dependiendo de nuestro ojo critico y profesional como QA. La IA es una herramienta de acompañamiento y ayuda. No de generación ciega.
