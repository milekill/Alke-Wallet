
//efectos
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



//calculo credito
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
    } else {
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
            <strong>Cuota mensual:</strong> $${totalPagar.toFixed(2)} <br>
            <strong>Cuota mensual:</strong> $${totalIntereses.toFixed(2)}
            `,
        )
            .fadeIn("slow");
            $("#monto").val("")
            $("#tasa").val("")
            $("#plazo").val("")

    });
});



//carrusel stop on hover
$(function () {
    $("#carouselExampleIndicators").on("mouseenter", function () {
    $(this).carousel("pause");
    });
});




//crear y borrar tarea
$(function () {

    $("#btnAlerta").on("click", function () {
        let tarea = $("#agregartarea").val();
        $("#caja").append("<li> " + tarea + "</li>");
        $("#agregartarea").val("");
    });


    $("ul").on("click","li", function () {
    $(this).remove()
    console.log("hola")
    });

});





//login
$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    if (username === 'admin' && password === '123456') {

      window.location.href = './menu.html';
    } else {
      alert('Usuario o contraseña invalido. Inténtalo de nuevo.');
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
      alert('Ingrese su mail para reenviar su contraseña . Inténtalo de nuevo.');
    }
  });
});


//Crear usuario
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


//Sumar y restar dinero
$(document).ready(function() {
  var balance = 0;

  function updateBalance() {
    $('#balance').text(balance.toFixed(0));
  }

  $('#sumarbtn').click(function() {
    var amount = parseFloat($('#monto').val());
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      updateBalance();
      $('#monto').val('');
      alert('Deposit realizado!');
    } else {
      alert('Monto invalido. Por favor ingrese un número mayor a 0.');
    }
  });

  $('#restarbtn').click(function() {
    var amount = parseFloat($('#monto').val());
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      balance -= amount;
      updateBalance();
      $('#monto').val('');
      alert('Retiro exitoso!');
    } else {
      alert('Cantidad no válida. Ingrese un número válido dentro de su saldo.');
    }
  });
});