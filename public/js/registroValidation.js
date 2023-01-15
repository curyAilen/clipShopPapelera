window.addEventListener('load', function () {
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let formularioRegistro = document.querySelector("#form-registro");

    let email = document.querySelector("#email-register");
    let errorEmail = document.querySelector(".errorEmail");

    let nombre = document.querySelector('#nombre-register');
    let errorNombre = document.querySelector(".errorNombre");

    let direccion = document.querySelector('#direccion-register');
    let errorDireccion = document.querySelector(".errorDireccion");
    
    let password = document.querySelector("#clave-register");
    let errorPassword = document.querySelector(".errorPassword");
    let reClave = document.querySelector("#re-clave-register");

    formularioRegistro.addEventListener('submit', (e) => {
        e.preventDefault();
        let errores = {};

        // ○ NOMBRE Y APELLIDO ■ Obligatorio. ■ Deberá tener al menos 2 caracteres.
        if (nombre.value.length <= 0){
            errores.nombre = 'Este campo es obligatorio';
        } else if (nombre.value.length <= 2) {
            errores.nombre = 'Este campo debe tener al menos 3 carácteres';
        };
        if (direccion.value.length <= 0) {
            errores.direccion = 'Este campo es obligatorio';
        }   else if (direccion.value.length <= 2) {
            errores.direccion = 'Este campo debe tener al menos 5 carácteres';
        };

        // ○ EMAIL ■ Obligatorio. ■ Debe ser valido

        if (email.value.length <= 0){
            errores.email = 'Este campo es obligatorio';
        } else if (!validEmail.test(email.value)) {
            errores.email = 'Este campo debe contener un email valido.'; 
        };

        // ○ CONTRASEÑA ■ Obligatorio. ■ Deberá tener al menos 8 caracteres.
        if (password.value.length <= 0) {
            errores.password = 'Debe ingresar una contraseña';
        } else if (password.value.length < 8) {
            errores.password = 'La contraseña debe tener al menos 8 caracteres';
        } else if (password.value !== reClave.value) {
            errores.password = "Las contraseñas no coinciden"
        }

        //Mostrar errores
        if (Object.keys(errores).length >= 1) {
            errorNombre.innerText = (errores.nombre) ? errores.nombre : '';
            errorDireccion.innerText = (errores.direccion) ? errores.direccion : '';
            errorEmail.innerText = (errores.email) ? errores.email : '';
            errorPassword.innerText = (errores.password) ? errores.password : '';
        } else {
            formularioRegistro.submit();
        }
    });
});
