window.addEventListener("load", function() {
    let misDatos = $("#misDatos");
    let misCompras = $("#misCompras");
    let historialCompras = $("#comprasHistorial");
    let datosUsuarios = $("#datosUsuarios");
    let accionesAdmin = $("#accionesAdmin");
    let adminProductos = $("#adminProductos");
    let contacto = $("#contacto");
    let formularioContacto = $("#formularioContacto");

    misCompras.click(function() {
        historialCompras.removeClass("ocultar");
        historialCompras.addClass("mostar");
        datosUsuarios.addClass("ocultar");
        datosUsuarios.removeClass("mostrar");
        adminProductos.addClass("ocultar");

    });
    misDatos.click(function() {
        datosUsuarios.removeClass("ocultar");
        datosUsuarios.addClass("mostar");
        historialCompras.addClass("ocultar");
        adminProductos.addClass("ocultar");
    });
    accionesAdmin.click(function() {
        adminProductos.removeClass("ocultar");
        adminProductos.addClass("mostar");
        historialCompras.addClass("ocultar");
        datosUsuarios.addClass("ocultar");
        datosUsuarios.removeClass("mostrar");

    });
    contacto.click(function() {
        formularioContacto.removeClass("ocultar");
        formularioContacto.addClass("mostar");

    });

    let buscadorEmbalaje = $(".buscadorEmbalaje");
    let buscadorEtiquetas = $(".buscadorEtiquetas");
    let buscadorRollos = $(".buscadorRollos");
    let buscadorOrdenadores = $(".buscadorOrdenadores");

    buscadorEmbalaje.addClass("ocultar");
    buscadorEtiquetas.addClass("ocultar");
    buscadorRollos.addClass("ocultar");
    buscadorOrdenadores.addClass("ocultar");



});