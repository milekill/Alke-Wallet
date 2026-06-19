
//Efectos
$(function () {

    $("#btnCambiar").on("clik", function () {
        $("#titulo").text("Nuevo texto con Jquery");
        $("subtitulo").html("<strong>Modificado</strong> con .html");
    });


    $("#btnFadeIn").on("click",function () {
    $("#caja").fadeIn("slow");
    });

    $("#btnFadeOut").on("click",function () {
    $("#caja").fadeIn("1000");
    });

    $("#btnFadeSlide").on("click",function () {
    $("#caja").slideToggle("600");
    });

});







//Calculo Credito
$(function () {
    $("#btnCalcular").on("click", function () {

    const monto = parseFloat($("#monto").val());
    const tasaAnual = parseFloat($("#tasa").val());
    const plazo = parseFloat($("#plazo").val());

    console.log(monto, tasaAnual, plazo)

    });
});


$(function () {
    $("#btnCalcular").on("click", function () {

    const monto = parseFloat($("#monto").val());
    const tasaAnual = parseFloat($("#tasa").val());
    const plazo = parseFloat($("#plazo").val());

    console.log(monto, tasaAnual, plazo)
    
    if (isNaN(monto) || isNaN(tasaAnual) || isNaN(plazo)) {
        $("#resultado")
            .removeClass("alert-info")
            .addClass("alert-danger")
            .text("Por favor Completa todos los campos...")
            .fadeIn();
    return;
    }

    const tasaMensual = tasaAnual / 100 / 12;
    let cuota;

    if (tasaMensual === 0) {
        cuota = monto / plazo;
    } 
    else {
        cuota = 
        (monto * (tasaMensual * Math.pow(1 + tasaMensual, plazo))) / 
        (Math.pow(1 + tasaAnual, plazo) - 1);
    }

    const totalPagar = cuota * plazo;
    const totalIntereses = totalPagar - monto;

    $("#resultado")
        .removeClass("alert-danger")
        .addClass("alert-info")
        .html(
            `
            <strong>Cuota mensual:</strong> $${cuota.toFixed(2)} <br>
            <strong>Cuota a pagar:</strong> $${totalPagar.toFixed(2)} <br>
            <strong>Cuota intereses:</strong> $${totalIntereses.toFixed(2)}
            `,
        )
            .fadeIn("slow");
            $("#monto").val("")
            $("#tasa").val("")
            $("#plazo").val("")

    });
});



//Carrusel Stop on Hover
$(function () {
    $("#carouselExampleIndicators").on("mouseenter", function () {
    $(this).carousel("pause");
    });
});




//prompt
//$(function () {
//$("#btnAgregardatos").on("click", function () {
  //  const texto1 = prompt("Ingrese texto de Nombre");
   // const texto2 = prompt("Ingrese texto Apellido");
  //  const texto3 = prompt("Ingrese texto Rut");

//    if (!null(texto1) && !null(texto2) && !null(texto3)) {
  //      let dato2 = $("#agregardato2").val();
    //    $("#caja3").append("<li> " + dato2 + "</li>");
      //  $("#agregardato2").val("");

//      console.log(texto1);
  //    console.log(texto2);
    //  console.log(texto3);
//      window.location.href = './menu.html';
  //  } else {
  //    alert('Usuario o contraseña invalido. Inténtalo de nuevo.');
  //  }


    //document.getElementById("info-navegador").textContent = Date();
    //document.getElementById("mensaje").textContent = texto2;
 //   });

//});

//Buscador al escribir
$(function () {
const inputBusqueda = document.getElementById('buscador');
const items = document.querySelectorAll('#contactList li');

inputBusqueda.addEventListener('input', (evento) => {
  const textoEscrito = evento.target.value.toLowerCase();

  items.forEach(item => {
    const textoItem = item.textContent.toLowerCase();

    if (textoItem.includes(textoEscrito)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
});



//Toast emergente depositar y retirar
$('').toast('show');


$(function () {
//Modal Agrega Contacto
const cerrarform = document.getElementById('btnAgregardatos');
const modal = document.getElementById('close1');

  
    cerrarform.addEventListener('click', () => {
        modal.click();
    });
});




//Crear y Borrar Contacto
$(function () {

    $("#btnAgregardatos").on("click", function () {
        let nombre = $("#agregarNombre").val();
        let rut = $("#agregarRut").val();
        let banco = $("#agregarBanco").val();   

      if (isNaN(nombre) && isNaN(rut) && isNaN(banco)) {
        let alias = prompt("Ingrese un alias");
        $("#contactList")
        .append(
            `
            <li class="list-group-item">
            <div class="contact-info d-flex justify-content-between">
              <span class="contact-name">Nombre: `+nombre+`</span>
              <span class="contact-details">Rut: `+rut+`, Banco: `+banco+`, Alias: `+alias+`</span>
            <button type="button" class="btn btn-sm btn-warning enviar-btn">Enviar dinero</button>
            <button type="button" class="btn btn-sm btn-danger delete-btn">Eliminar</button>
            </div>
            </li>
            `,
        )
                    .fadeIn("slow");            
        alert("Contacto "+alias+ " creado exitosamente")
        $("#agregarNombre").val("");
        $("#agregarRut").val("");
        $("#agregarBanco").val("");
        console.log("li creado")

      } 
      else {
            alert('Agrega los datos de nuevo contacto con (*). Inténtalo de nuevo.');
      }

    });

    $(".delete-btn").on("click", function () {
    if(confirm("desea eliminar contacto?")){
    console.log("clink en delete")
    $(this).parent().parent().remove()
    console.log("li eliminado")

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
  $('#ForgotForm').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();

    if (email != '') {
      alert('Contraseña enviada a su mail.');
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





//Sumar Dinero
$(document).ready(function() {
  let balance = parseFloat($('#balance').val());
  const ahora = new Date();

  function updateBalance() {
    $('#balance').text(balance.toFixed(0));
  }

  $('#sumarbtn').click(function() {
    var amount = parseFloat($('#monto').val());
    console.log(ahora.toLocaleTimeString()); 


    retirado = balance;
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      updateBalance();
      $('#monto').val('');
      $('#balance').val(balance);
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
              <p class="rounded mr-2">💰</p>
              <strong class="mr-auto">Recibo</strong>
              <small class="text-muted">${ahora.toLocaleTimeString("en-US")}</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body" id="">
              <strong><u>Deposito</u></strong><br>
              Cantidad Depositada: <strong> $${amount.toFixed(0)} </strong><br>
              Balance Anterior: <strong> $${retirado.toFixed(0)} </strong><br>
              Saldo Actualizado:<strong> $${balance.toFixed(0)} </strong>
            </div>

            `,
        )
        

        $('#toast1').toast('show');
            

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
    var amount = parseFloat($('#monto').val());
    retirado = balance;
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      balance -= amount;
      updateBalance();
      $('#monto').val('');
      $('#balance').val(balance);
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
              <p class="rounded mr-2">💰</p>
              <strong class="mr-auto">Recibo</strong>
              <small class="text-muted">${ahora.toLocaleTimeString("en-US")}</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body" id="">
              <strong><u>Retiro</u></strong><br>
              Cantidad Retirada: <strong> $${amount.toFixed(0)} </strong><br>
              Balance Anterior: <strong> $${retirado.toFixed(0)} </strong><br>
              Saldo Actualizado:<strong> $${balance.toFixed(0)} </strong>
            </div>

            `,
        )
        

        $('#toast1').toast('show');


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

