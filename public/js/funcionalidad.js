window.addEventListener("load", function() { 
    let misDatos = $("#misDatos");
    let misCompras = $("#misCompras");
    let historialCompras = $("#comprasHistorial");
    let datosUsuarios = $("#datosUsuarios");
    let accionesAdmin = $("#accionesAdmin");
    let adminProductos = $("#adminProductos");
    let contacto = $("#contacto");
    let formularioContacto = $("#formularioContacto");

    function mostrarPassword(){
		var cambio = document.getElementById("login-password");
		if(cambio.type == "password"){
			cambio.type = "text";
			$('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
		}else{
			cambio.type = "password";
			$('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
		}
	} 
	
	$(document).ready(function () {
	//CheckBox mostrar contraseña
	$('#ShowPassword').click(function () {
		$('#login-password').attr('type', $(this).is(':checked') ? 'text' : 'password');
	});
});
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