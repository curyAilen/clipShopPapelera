let carrito = [];
let products = [];
let descuentoPorcentaje = 0;
let costoEnvio = 600;


if (localStorage.carrito) {
    carrito = JSON.parse(localStorage.carrito);
};

const borrarProducto = (id) => {
    carrito = carrito.filter((prod) => prod.id != id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    contador.innerText = productosEnElCarrito();
    mostrarCarrito();
};

const aumentar = (id) => {
    let index = carrito.findIndex(prod => prod.id == id);
    carrito[index].cantidad++;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};

const restar = (id) => {
    let index = carrito.findIndex(prod => prod.id == id);

    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();
    };
};

const subtotalPrecios = (productos) => {
    return productos.reduce(
        (acum, value) => acum + (value.precio * value.cantidad)
        , 0);
};

const totalPrecios = (productos, descuento) => {
    let subtotal = subtotalPrecios(productos);
    let total = subtotal - (subtotal * (descuento / 100));
    return Math.floor(total);
};

const mostrarCarrito = () => {
    let carritoProductos = document.querySelector(".carritodeproductos");
    carritoProductos.innerHTML = "";
    products = [];
    document.querySelector(".costoEnvio").innerText = costoEnvio;
    if (carrito.length === 0) {
        carritoProductos.innerHTML = `<h3 style="margin: 1em;"> Carrito vacio </h3>`;
        document.querySelector(".montoSubTotal").innerText = `$0`;
        document.querySelector(".montoTotal").innerText = "$0";
        
    }

    carrito.forEach((item, index) => {
        fetch(`/carrito/producto/${item.id}`)
            .then(res => res.json())
            .then(product => {
                if (product) {
                    carritoProductos.innerHTML += `
                <article class="row">
                <h5 class="col-lg-4 col-sm-6 titulos">
                    ${product.nombre}
                </h5>
                <div class="contieneDetalleProducto col-lg-4 col-sm-6">
                    <h4>
                        ${product.precio}
                    </h4>
                    <p>
                        ${product.categoria.nombreCategoria}
                    </p>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="botonesCarrito">
                        <button onclick="restar(${item.id})" class="resta  btn botones ">-</button>
                        <p class="cantidad h5">${item.cantidad}</p>
                        <button onclick="aumentar(${item.id})" class="suma   btn botones ">+</button>
                        <button onclick="borrarProducto(${item.id})" class="remover btn botones removerboton">X</button>
                    </div>
                </div>
            </article>
            <hr>`;

                    products.push({
                        idProductos: product.idProductos,
                        nombre: product.nombre,
                        precio: Number(product.precio),
                        cantidad: item.cantidad
                    });

                } else {
                    carrito.splice(index, 1);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                };
            })
            .then(() => {
                document.querySelector(".montoSubTotal").innerText = `$${subtotalPrecios(products)}`;
                document.querySelector(".montoTotal").innerText = `$${totalPrecios(products, descuentoPorcentaje)}`;
            })
    });
};

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    document.querySelector(".inputVoucher").value = "";
    carrito = [];
    contador.innerText = productosEnElCarrito();
    mostrarCarrito();
};

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if (params.status && params.status == "approved") {
    vaciarCarrito();
    location.replace('localhost:3000/carrito');
};

mostrarCarrito();


// ---------- VERIFICAR VOUCHER -----------------
const botonVerificarVoucher = document.querySelector(".verificarVoucher");
botonVerificarVoucher.addEventListener("click", (e) => {
    e.preventDefault();

    let input = document.querySelector(".inputVoucher");
    let descuento = document.querySelector("span.descuento");
    let voucherIngresado = String(input.value);

    fetch(`/carrito/voucher/${voucherIngresado}`)
        .then((res) => res.json())
        .then((voucher) => {
            if (voucher) {
                descuento.innerText = `${voucher}% de DESCUENTO`
                descuento.classList.add("valido");
                descuento.classList.remove("invalido");
                descuentoPorcentaje = Number(voucher);

            } else {
                descuento.innerText = "VOUCHER INVALIDO";
                descuento.classList.add("invalido");
                descuento.classList.remove("valido");
                descuentoPorcentaje = 0;
            };
            mostrarCarrito();
        })

});

const botonComprar = document.querySelector(".botonComprar");

const mostrarPago = (products, total, descuento) => {
    let pieCarrito = document.querySelector("#pieCarrito");
    pieCarrito.innerHTML = `
        <div class="cuenta">
            <button class="button-volver" onClick="refresh()">Volver</button>
            <h4 class="mt-4">Cantidad de productos: ${products.length}</h4>
            ${descuento ? `<h4>Descuento: ${descuento}%</h4>` : ""}
            <p>Consultar por costo de envio fuera de CABA, antes de comprar.</p>
            <h3>Total: $${total + costoEnvio}</h3>
            <div class="cho-container"></div>
        </div>
    `
};

botonComprar.addEventListener("click", (e) => {
    e.preventDefault();

    if (products.length > 0) {
        let input = document.querySelector(".inputVoucher");
        let voucher = String(input.value);

        let data = {
            products
        };

        if (voucher) data.voucher = voucher;

        fetch("/carrito/preferencia", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then(preference => {
                const mp = new MercadoPago('APP_USR-fc1abf29-6c18-45f9-9c3c-e04248810247', {
                    locale: 'es-AR'
                });

                mp.checkout({
                    preference: {
                        id: preference.global
                    },
                    render: {
                        container: '.cho-container',
                        label: 'Pagar con MercadoPago',
                    }
                });

                mostrarPago(products, preference.data.total, preference.data.descuento);
            })
            .then(() => {
                fetch("/carrito/comprar", {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(() => {
                        console.log("Compra registrada");
                    })
                    .catch(error => console.error('Error:', error))
            })
    } else {
        VanillaToasts.create({
            title: 'Tu carrito esta vacio!',
            type: "error",
            timeout: 5000
        })
    };
});

const refresh = () => {
    document.location.reload();
}
