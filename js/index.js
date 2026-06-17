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


$(function () {
    $("#carouselExampleIndicators").on("mouseenter", function () {
    $(this).carousel("pause");
    });
});


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