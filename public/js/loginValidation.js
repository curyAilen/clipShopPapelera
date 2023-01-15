window.addEventListener("load", () => {
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    const formLogin = document.querySelector(".form-login");
    const email = document.querySelector("#email");
    const emailError = document.querySelector(".emailError");

    const password = document.querySelector("#login-password");
    const passwordError = document.querySelector(".passwordError");

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        let errores = {};
        
        if (email.value.length <= 0) {
            errores.email = "Debes ingresar un Email" 
        } else if (!validEmail.test(String(email.value))){
            errores.email = "Debes ingresar un formato de correo valido"
        };

        if (password.value.length <= 0) {
            errores.password = "Debes ingresar una contraseña"
        };

        if (Object.keys(errores).length >= 1) {
            emailError.innerText = (errores.email) ? errores.email : '';
            passwordError.innerText = (errores.password) ? errores.password : '';
        } else {
            formLogin.submit();
        }
    });
});