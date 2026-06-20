//Filtrar Tabla contactos
function filtrarTabla() {

    const input = document.getElementById("buscador");
    const filtro = input.value.toLowerCase();
    

    const tabla = document.getElementById("contactList");
    const filas = tabla.getElementsByTagName("tr");


    for (let i = 1; i < filas.length; i++) {
        const fila = filas[i];

        const textoFila = fila.textContent || fila.innerText;


        if (textoFila.toLowerCase().indexOf(filtro) > -1) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    }
}


//Filtrar Tabla transacciones
function filtrarTabla2() {

    const input = document.getElementById("buscadortransacciones");
    const filtro = input.value.toLowerCase();
    

    const tabla = document.getElementById("listatransacciones");
    const filas = tabla.getElementsByTagName("tr");


    for (let i = 1; i < filas.length; i++) {
        const fila = filas[i];

        const textoFila = fila.textContent || fila.innerText;


        if (textoFila.toLowerCase().indexOf(filtro) > -1) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    }
}


//Toast Emergente al Depositar y Retirar
$('').toast('show');


// Form Validaciones Crea Contacto
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')
  const formulario = document.getElementById('crearcontacto');


  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      else{
      event.preventDefault();

      }

      form.classList.add('was-validated')
      
      
    }, false)
  })
})()



//Crear y Borrar Contacto
$(function () {
const cerrarform = document.getElementById('btnAgregardatos');
const modal = document.getElementById('close1');

    $("#btnAgregardatos").on("click", function () {
        let nombre = $("#agregarNombre").val();
        let apellido = $("#agregarApellido").val();  
        let rut = $("#agregarRut").val();
        let banco = $("#agregarBanco option:selected").text();
        let tcuenta = $("#agregarTcuenta option:selected").text();
        let ncuenta = $("#agregarNcuenta").val();   
        let alias = $("#agregarAlias").val();  
        let cresh = 5;
        cresh++;  

      if (isNaN(nombre) && isNaN(apellido)) {
//        let alias = prompt("Ingrese un Alias");
        let cresh = 5;
        cresh++;  
        $("#contactList")
        .append(
            `
            <tr>
                <td>`+cresh+`</td>
                <td>`+nombre+" "+apellido+`</td>
                <td>`+rut+`</td>
                <td>`+alias+`</td>                
                <td>`+banco+`</td>
                <td>`+tcuenta+`</td>
                <td>`+ncuenta+`</td>
                <td class="text-success"><div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-sm btn-success enviar-btn">Enviar Dinero</button>
                    <button type="button" class="btn btn-sm btn-warning modifica-btn">Modificar</button>
                    <button type="button" class="btn btn-sm btn-danger delete-btn">Borrar</button>
            </div></td>
            </tr>
            `,
        )
                    .fadeIn("slow");            
        alert("Contacto "+nombre+" "+apellido+" creado exitosamente")
        $("#agregarNombre").val("");
        $("#agregarApellido").val("");
        $("#agregarRut").val("");
        $("#agregarBanco").val("");
        $("#agregarTcuenta").val("");
        $("#agregarNcuenta").val("");
        $("#agregarAlias").val("");
        console.log("tr creado")
        modal.click();
  


      } 
      else {
//            alert('Agrega los datos de nuevo contacto con (*). Inténtalo de nuevo.');
      }

    });
    //Borrar de la tabla
    $("table").on("click",".delete-btn" , function () {
    if(confirm("Desea eliminar contacto?")){
    console.log("clink en delete")
    $(this).parent().parent().parent().remove()
    console.log("tr eliminado")

    return
    }
    else{

    }


    });
    //Enviar Dinero de la tabla
    $("table").on("click",".enviar-btn" , function () {
    if(confirm("Desea Enviar dinero a contacto?")){
    console.log("clink en enviar dinero")
    window.location.href = './sendmoneyform.html';

    return
    }
    else{

    }


    });

        //Abrir modificar de la tabla
    $("table").on("click",".modifica-btn" , function () {
    if(confirm("Desea Modificar contacto?")){
    console.log("clink en modificar contacto")
    $('#modalcontacto').modal('show');

    return
    }
    else{

    }


    });


});



//Crear y Borrar Tarea
$(function () {

    $("#btnAlerta").on("click", function () {
        let tarea = $("#agregartarea").val();
        $("#caja").append("<li> " + tarea + "</li>");
        $("#agregartarea").val("");
    });


   // $("ul").on("click","li", function () {
   // $(this).remove()
   // });

    $("#resultado").on("click","" , function () {
    $(this).fadeToggle("slow")
    });


});



//Login
$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    if (username === 'admin' && password === '123456') {

      window.location.href = './menu.html?abrirModal=true';
    } else {
      alert('Usuario o contraseña invalido. Inténtelo de nuevo.');
    }
  });
});


//Olvide mi contrasena
$(document).ready(function() {
  $('#reenviarmail').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();

    if (email != '') {
      alert('¡Contraseña enviada al mail con exito!');
      window.location.href = './login.html';
    } else {
      alert('Ingrese un mail valido para reenviar su contraseña . Inténtalo de nuevo.');
    }
  });
});


//Crear Usuario
$(document).ready(function() {
  $('#crearusuario').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();

    if (username != '' && email != '' && password != '') {
      alert('Usuario creado exitosamente.');
      window.location.href = './login.html';
    } else {
      alert('Complete los datos para crear su usuario correctamente. Inténtalo de nuevo.');
    }
  });
});



// function accionarconvertor() {}

//Sumar Dinero
$(document).ready(function() {
  let balance = parseFloat($('#balance').val());
  //Formato Dinero Chile
  let valorTexto = document.getElementById("balance").value;
  let numeroLimpio = Number(valorTexto.replace(/\./g, ''));


let input = document.getElementById('monto');

     //listener conversion dolares
input.addEventListener('input', function() {
let valor5 = document.getElementById('monto').value;

let numeroLimpio4 = Number(valor5.replace(/\./g, ''));

let dolarvalor = "900"

 conversionpeso = numeroLimpio4 * dolarvalor
  conversiondolar = numeroLimpio4 / dolarvalor


let resultadoFormateadodolarpeso = conversionpeso.toLocaleString('es-CL'); 
console.log("conversion a peso frm",resultadoFormateadodolarpeso)

let resultadoFormateadopesodolar = conversiondolar.toLocaleString('es-CL'); 
console.log("conversion a dolar frm",resultadoFormateadopesodolar)

$('#dolar').val(resultadoFormateadopesodolar);
$('#sumarbtn').click(function() {
  $('#dolar').val('');
});
$('#restarbtn').click(function() {
  $('#dolar').val('');
});


});


  function updateBalance() {
    $('#balance').text(numeroLimpio.toFixed(0));
  }

  $('#sumarbtn').click(function() {
    var amount = parseFloat($('#monto').val());
    const ahorasumar = new Date();

    retirado = numeroLimpio;
    let resultadoFormateadoretirado1 = retirado.toLocaleString('es-CL'); 
    let resultadoFormateadomonto1 = amount.toLocaleString('es-CL'); 
    if (!isNaN(amount) && amount > 0) {
      numeroLimpio += amount;
      let resultadoFormateado = numeroLimpio.toLocaleString('es-CL'); 
      updateBalance();
      $('#monto').val('');
      $('#balance').val(resultadoFormateado);
      alert('Deposit realizado!');
      $("#resultado")
        .removeClass("alert-info")
        .removeClass("alert-danger")
        .removeClass("alert-warning")
        .addClass("alert-success")
        //.html(
          //  `
          //  <strong><u>Deposito</u></strong><br>
          //  Cantidad Depositada: <strong> $${amount.toFixed(0)} </strong><br>
          //  Balance Anterior: <strong> $${retirado.toFixed(0)} </strong><br>
          //  Saldo Actualizado:<strong> $${balance.toFixed(0)} </strong>
          //  `,
        //)
           // .fadeIn("slow");
           .fadeOut("slow");

        $('#toast1')
        .append(
            `
            <div class="toast-header bg-success">
              <p class="mr-2">💰</p>
              <strong class="mr-5">Recibo de Deposito</strong>
              <small class="text-muted">${ahorasumar.toLocaleTimeString("es-CL")}</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body" id="">
              <strong><u>Deposito</u></strong><br>
              Cantidad Depositada: <strong> + $${resultadoFormateadomonto1} </strong><br>
              Balance Anterior: <strong> $${resultadoFormateadoretirado1} </strong><br>
              Saldo Actualizado:<strong> $${resultadoFormateado} </strong>
            </div>

            `,
        )
        

        $('#toast1').toast('show')
        .fadeIn("slow"); 

      return;   


    } else {
      alert('Monto invalido. Por favor ingrese un monto mayor a 0.');
      $("#resultado")
        .removeClass("alert-info")
        .removeClass("alert-warning")
        .addClass("alert-danger")
        .text("Ingrese monto de deposito.")
        .fadeIn();
    
    }
  });

  


//Restar Dinero
  $('#restarbtn').click(function() {
    const ahorarestar = new Date();
    var amount = parseFloat($('#monto').val());
    retirado = numeroLimpio;
    let resultadoFormateadoretirado2 = retirado.toLocaleString('es-CL'); 
    let resultadoFormateadomonto2 = amount.toLocaleString('es-CL'); 
    if (!isNaN(amount) && amount > 0 && amount <= numeroLimpio) {
      numeroLimpio -= amount;
      let resultadoFormateado2 = numeroLimpio.toLocaleString('es-CL'); 
      updateBalance();
      $('#monto').val('');
      $('#balance').val(resultadoFormateado2);
      alert('Retiro exitoso!');
      $("#resultado")
        .removeClass("alert-info")
        .removeClass("alert-danger")
        .addClass("alert-warning")
     //   .html(
     //       `
     //       <strong><u>Retiro</u></strong><br>
     //       Cantidad Retirada: <strong> $${amount.toFixed(0)} </strong><br>
      //      Balance Anterior: <strong> $${retirado.toFixed(0)} </strong><br>
      //      Saldo Actualizado: <strong> $${balance.toFixed(0)} </strong>
      //      `,
      //  )
    //        .fadeIn("slow");
           .fadeOut("slow");    

        $('#toast1')
        .append(
            `
            <div class="toast-header bg-warning">
              <p class="mr-2">💰</p>
              <strong class="mr-5">Recibo de Retiro</strong>
              <small class="text-muted">${ahorarestar.toLocaleTimeString("es-CL")}</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body" id="">
              <strong><u>Retiro</u></strong><br>
              Cantidad Retirada: <strong> - $${resultadoFormateadomonto2} </strong><br>
              Balance Anterior: <strong> $${resultadoFormateadoretirado2} </strong><br>
              Saldo Actualizado:<strong> $${resultadoFormateado2} </strong>
            </div>

            `,
        )
        

        $('#toast1').toast('show')
        .fadeIn("slow");    


      return;        
    } 
    else {
      alert('Cantidad no válida. Ingrese un monto válido dentro de su saldo.');
     $("#resultado")
        .removeClass("alert-info")
        .removeClass("alert-warning")
        .addClass("alert-danger")
        .text("Ingrese monto de retiro, dentro de su saldo.")
        .fadeIn();

    }


    
  });



});



//Console log

