# Alke Wallet

## Página billetera digital para gestión y movimientos de dineros digitales.

    Desarrollada con HTML, CSS, Jquery, JavaScript.

    Contiene imágenes en JPG, PNG.

    **Proyecto ABP Modulo 2**

    20-06-2026 Valparaíso, Chile.

    Andreas Müller S.

Versión:1.0.2.3


Aplicación responsiva para Móviles (481px), Tablet (769px), Computadoras (1025px).

-	Inicio (Index.html) ✔️:
Se agrega imagen de fondo para mayor inmersión en el producto, junto al título y logo de Alke Wallet, se decide incluir una frase de subtitulo, se agrega las opciones de inicio de sesión y crear cuenta.

-	Iniciar Sesión (Login.html) ✔️:
Se puede hacer ingreso a través de un usuario y contraseña estándar con validación de credenciales por nombre y contraseña en Jquery, se agrega el botón de recordar cuenta.
Se puede acceder a la pagina de olvide me contraseña o la pagina de crear cuenta nueva.
Al ingresar al Menu través de la página Login, se abrirá un mensaje con actualizaciones en el menú de inicio.

-	Olvide mi contraseña (forgotpass.html) ✔️:
Se crea validación de email, y al colocar un mail correcto se reenvía al usuario a la página de login.

-	Crear Cuenta (createacount.html) ✔️:
Creación de cuenta con validación por formulario y devuelta da errores en enunciados de cada input,
Se utilizaron todos los tipos de input, para pruebas de sus funcionalidades,
Al completar el formulario, se reenvía al usuario a login.

-	Menu (menú.html) ✔️:
Es la entrada posterior al ingresar desde login, mostrara un mensaje modal con noticias o actualizaciones, se puede hacer click en cualquier parte para cerrarlo, en el menú se muestran un resumen de tu saldo total, los activos, los últimos movimientos, además tiene botones de acciones rápidas para ir a tus lugares mas frecuentes.
Se incluyen dos tablas con las informaciones de movimiento y activos.

-	Deposito (deposit.html) ✔️:
La pagina mas compleja en cuanto a código js jq, en ella podemos ingresar un monto, el cual inmediatamente va reflejando una conversión a dólares, posterior al ingreso del monto podemos generar un deposito o un retiro, ambas funciones se verán reflejadas en el saldo de la cuenta, además recibiremos un popup con la noticia de recepción de dinero o de retiro. En caso de no completar los datos o ingresar un monto mayor al saldo, saldrá un mensaje de ingrese los datos.
La parte del cambio de dólares se encuentra en estado experimental, ya que por el momento genera un null.value en la consola al abrir los demás html (leer mas en errores conocidos), pero se encuentra funcionando sin problemas.

-	Envió de dinero(sendmoney.html) ✔️:
En esta pagina podremos ver los contactos agregados, buscar contactos, o hacer acciones como agregar contacto nuevo, enviar dinero, modificar, o eliminar de la lista a cada contacto por separado
    o	Buscar contacto: al ingresar cada tecla en el input una función onkeyup hará filtrar la tabla según lo que se busque.
    o	Agregar contacto: se abrirá un modal que permitirá ingresar los datos de un nuevo contacto en un formulario con validación, una vez concretado el formulario, mostrará un mensaje de contacto agregado con éxito, y agregará los datos en la tabla.
    o	Borrar: al presionar el botón borrar se borrar el contacto de la tabla.
    o	Enviar dinero: al presionar el botón enviar dinero, se abrirá otro html (sendmoyform.html) con los datos del contacto, para realizar un envío de dinero desde una de tus cuentas.
    o	Modificar contacto: en estado experimental, al presionar el botón, se abrirá un modal con los datos del contacto, que se podrán modificar y guardar en la tabla.

-	Formulario de envió de dinero (sendmoneyform.html) ✔️:
Este formulario permite enviar dinero a un contacto seleccionado, en el se muestran los datos del contacto, posterior se seleccionar una cuenta que mostrara tu saldo en esa cuenta, el monto que se desea enviar, es un formulario con validación, y monto mínimo de $1000 para efectuar el envío, al completar el envío, este solicitara la contraseña para continuar, finalmente muestra una alerta de que el envío fue exitoso, el nombre del contacto y el monto enviado. Posterior reenvía al usuario a la lista de contactos.

-	Últimos movimientos (transaction.html):

-	Traspasos ¡Experimental! () ⁉️:

-	Noticias ¡Experimental! ()⁉️:

-	Crear Contacto y Enviar Dinero ()⁉️:

-	Depósitos a Plazo ¡Próximamente! () ⭕:


--------------------

*Errores conocidos:

1-	Si se detectó un error tipo null.value en la línea 396 por consola, es debido a un funcionamiento constaste de la script tipo listening para la conversión del valor “balance” ingresado y convertido a dólares, que se encuentra activa constante en el index.js, lo que al cambiar de html y no encontrar las ID de (deposit.html) presentando un error de esos valores desconocidos. Se solucionará posterior al desarrollo de una función onkeyup=" ()" con el script desarrollado.






# Título nivel 1
## Título nivel 2
### Título nivel 3

**negrita**   *cursiva*   `código inline`

- Ítem de lista
- Otro ítem

1. Lista numerada
2. Segundo ítem

[Texto del enlace](https://url.com)
![Alt de imagen](ruta/imagen.png)

> Cita o blockquote

```javascript
// Bloque de código
```