const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const { buscar, buscarCategoria: categoria } = params;

const buscadortitulo = document.querySelector(".buscadortitulo");
const selectCategoria = document.querySelector("select.categorias");

if (buscar && buscar.length > 0 ) {
    buscadortitulo.value = buscar;
};

const num = Number(categoria);
if (categoria && ( num === 1 || num === 2 || num === 3 || num === 4 )) {
    selectCategoria.options[Number(categoria)].selected = true;
};
