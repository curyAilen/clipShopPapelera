window.addEventListener("load", () => {
    let evento = new Event('change');
    categorias.dispatchEvent(evento);
});

const embalaje = [{ valor: "film stretch", texto: "Film stretch" }, { valor: "film con mango", texto: "Film con mango" }, { valor: "film alimenticio", texto: "Film alimenticio" }];
const ordenadores = [{ valor: "rollos de numeros x 1000", texto: "Rollos de numeros x 1000" }, { valor: "rollos de numeros x2000", texto: "Rollos de numeros x 2000" }, { valor: "expendedora sin barral", texto: "Expendedora sin barral" }, { valor: "expendedora con barral", texto: "Expendedora con barral" }];
const etiquetas = [{valor: "etiquetadoras", texto: "Etiquetadoras"}, {valor: "etiquetadoras etintadores", texto: "Etiquetadoras etintadores"}];

const filtros = document.querySelector("div.filtros");
const filtrosSelect = document.querySelector("select.filtrosselect");
const categorias = document.querySelector("select.categorias");

filtros.style.display = "none";
let optionPredeterminada = document.createElement("option");
optionPredeterminada.value = "";
optionPredeterminada.text = "Elija un filtro";
optionPredeterminada.selected = true;

const filtrosFunction = (e) => {
    for (let i = filtrosSelect.options.length; i >= 0; i--) {
        filtrosSelect.remove(i);
      }

    if (!e.target.value || e.target.value == 3 || e.target.value == 0) {
        filtros.style.display = "none";
    } else {
        filtros.style.display = "block";
        filtrosSelect.appendChild(optionPredeterminada);
    };

    if (e.target.value == 1) {
        embalaje.forEach((filtro) => {
            let option = document.createElement("option");
            option.value = filtro.valor;
            option.text = filtro.texto;
            filtrosSelect.appendChild(option);
        });
    } else if (e.target.value == 2) {
        ordenadores.forEach((filtro) => {
            let option = document.createElement("option");
            option.value = filtro.valor;
            option.text = filtro.texto;
            filtrosSelect.appendChild(option);
        });
    } else if (e.target.value == 4) {
        etiquetas.forEach((filtro) => {
            let option = document.createElement("option");
            option.value = filtro.valor;
            option.text = filtro.texto;
            filtrosSelect.appendChild(option);
        });
    }
};

categorias.addEventListener("change", filtrosFunction);