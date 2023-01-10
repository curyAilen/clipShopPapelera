let carrito = [];
let products = [];

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
    }  
};

const mostrarCarrito = () => {
    let carritoProductos = document.querySelector(".carritodeproductos");
    carritoProductos.innerHTML = "";
    products = [];
    
    if (carrito.length === 0) {
        carritoProductos.innerHTML = `<h3 style="margin: 1em;"> Carrito vacio </h3>`;
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
    }); 
};

mostrarCarrito();

const botonComprar = document.querySelector(".botonComprar");

botonComprar.addEventListener("click", (e) => {
    console.log(products);

});
