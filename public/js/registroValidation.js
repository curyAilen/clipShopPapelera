window.addEventListener('load', function () {

    let formularioRegistro = document.querySelector(".form_registro");
    let enviar = document.querySelector(".enviar");

    let nombre = document.querySelector('#nombre');
    let errorNombre = document.querySelector(".errorNombre");

    let direccion = document.querySelector('#direccion');
    let errorDireccion = document.querySelector(".errorDireccion");


    let email = document.querySelector("#email");
    let errorEmail = document.querySelector(".errorEmail");

    let password = document.querySelector("#clave");
    let errorPassword = document.querySelector(".errorPassword");
    let reClave = document.querySelector("#re-clave");



    formularioRegistro.addEventListener('submit', function (e) {
        e.preventDefault();
        let errores = {};

        // ○ NOMBRE Y APELLIDO ■ Obligatorio. ■ Deberá tener al menos 2 caracteres.
        if (nombre.value.length <= 2) {
            errores.nombre = 'Este campo es obligatorio y debe ingresar al menos 3 carácteres.';
            
        };
        if (direccion.value.length <= 5) {
            errores.direccion = 'Este campo es obligatorio y debe ingresar al menos 3 carácteres.';
           

        };
        // ○ EMAIL ■ Obligatorio. ■ Debe ser valido
        if (!email.value.includes("@")) {
            errores.email = 'Este campo debe contener un email valido.';
         
        };
        // ○ CONTRASEÑA ■ Obligatorio. ■ Deberá tener al menos 8 caracteres.
        if (!password.value || !userReClave.value) {
            errores.password = 'Debe ingresar una contraseña de almenos 8 caracteres';
            

        } else if (password.value !== reClave.value) {
            errores.password = 'La contraseña no coincide.';
            console.log("error contraseña no coincide");
        }
       



        //Mostrar errores
        if (Object.keys(errores).length >= 1) {
            errorNombre.innerText = (errores.nombre) ? errores.nombre : '';
            errorDireccion.innerText = (errores.apellido) ? errores.apellido : '';
            errorEmail.innerText = (errores.email) ? errores.email : '';
            errorPassword.innerText = (errores.password) ? errores.password : '';
        } else {
            formularioRegistro.submit();
        }
    });
});
