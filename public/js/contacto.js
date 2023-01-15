const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const formContacto = document.querySelector(".formContacto");

const erroresNombre = document.querySelector("#erroresNombre");
const erroresMail = document.querySelector("#erroresMail");
const erroresAsunto = document.querySelector("#erroresAsunto");
const erroresMensaje = document.querySelector("#erroresMensaje");

formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.querySelector(".nombreContacto").value;
    let mail = document.querySelector(".mailContacto").value;
    let asunto = document.querySelector(".asuntoContacto").value;
    let mensaje = document.querySelector(".mensajeContacto").value;
    let errores = {};

    // Validaciones

    if (nombre.length <= 0) {
        errores.nombre = "Debes ingresar un nombre"
    }

    if (mail.length <= 0) {
        errores.mail = "Debes ingresar un email";
    } else if (!validEmail.test(String(mail))) {
        errores.mail = "Debes ingresar un email valido";
    };

    if (asunto.length <= 0) {
        errores.asunto = "Debes ingresar un asunto"
    };

    if (mensaje.length <= 0) {
        errores.mensaje = "Debes escribir un mensaje"
    };

    if (Object.keys(errores).length >= 1) {
        erroresNombre.innerText = (errores.nombre) ? errores.nombre : '';
        erroresMail.innerText = (errores.mail) ? errores.mail : '';
        erroresAsunto.innerText = (errores.asunto) ? errores.asunto : '';
        erroresMensaje.innerText = (errores.mensaje) ? errores.mensaje : '';
    } else {

        let data = {
            nombre, mail, asunto, mensaje
        }

        fetch("/contacto", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((response) => {
                if (response) {
                    location.reload();
                } else {
                    VanillaToasts.create({
                        title: 'Error',
                        text: "El mensaje no pudo enviarse",
                        type: "error",
                        timeout: 3000
                    });
                }
            })
            .catch((err) => console.error(err));
    }
});


