const formContacto = document.querySelector(".formContacto");

formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.querySelector(".nombreContacto").value
    let mail = document.querySelector(".mailContacto").value
    let asunto = document.querySelector(".asuntoContacto").value
    let mensaje = document.querySelector(".mensajeContacto").value

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

});


