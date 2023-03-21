const productosEnElCarrito = () => {
    return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0
};

const contador = document.querySelector("#contadorCarrito");
contador.innerText = productosEnElCarrito();
const botones = document.querySelectorAll(".botonAgregarCarrito");

botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();

        if (e.target.dataset.id) {
            if (localStorage.carrito) {
                let carrito = JSON.parse(localStorage.carrito);

                let index = carrito.findIndex(prod => prod.id == e.target.dataset.id);

                if (index === -1) {
                    carrito.push({ id: e.target.dataset.id, cantidad: 1 });
                    VanillaToasts.create({
                        title: 'Se agrego un producto al carrito',
                        type: "success",
                        timeout: 2000
                    });
                } else {
                    carrito[index].cantidad++;
                    VanillaToasts.create({
                        title: 'Aumentaste la cantidad de este producto',
                        type: "success",
                        timeout: 2000
                    });
                };

                localStorage.setItem("carrito", JSON.stringify(carrito));

            } else {
                localStorage.setItem("carrito",
                    JSON.stringify([{ id: e.target.dataset.id, cantidad: 1 }])
                );
            }
            contador.innerText = productosEnElCarrito();
        }
    });
});