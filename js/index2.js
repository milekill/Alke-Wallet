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