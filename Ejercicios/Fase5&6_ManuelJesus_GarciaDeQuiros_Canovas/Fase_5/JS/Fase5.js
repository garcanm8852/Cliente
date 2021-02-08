/**Ejercicio 1 */
function callEjercicio1() {
    document.getElementById("btnNuevoNumero").addEventListener("click", ejercicio1);
}

function ejercicio1() {
    let NumAlea = Math.round(Math.random() * 100 + 1);
    let lista = document.createElement("li");
    let texto = document.createTextNode(NumAlea);
    lista.appendChild(texto);
    document.getElementById("ListaDesordenada").appendChild(lista);
}
/**Ejercicio 2 */
function callEjercicio2() {
    document.getElementById("CalcularCasiPrimos").addEventListener("click", ejercicio2);
}
function ejercicio2() {
    let numero;
    let fila;
    let elemento;
    let contador = 1;

    for (let i = 0; i <= 100; i++) {
        fila = document.createElement("tr");
        for (let j = 0; j <= 100; j++) {

            if (contador % 1 == 0 && contador % contador == 0 && contador % Math.round(contador / 2) == 0) {
                numero = document.createTextNode(contador);
                elemento = document.createElement("td");
                elemento.appendChild(numero);
                elemento.style.backgroundColor = "yellow";
                fila.appendChild(elemento);
            } else {
                numero = document.createTextNode(contador);
                elemento = document.createElement("td");
                elemento.appendChild(numero);
                fila.appendChild(elemento);
            }

            contador++;
        }
        document.getElementById("Tabla").appendChild(fila);
    }

}
/**Ejercicio 3 */
function callEjercicio3() {
    document.getElementById("GenerarCheckBox").addEventListener("click", ejercicio3Generar);
    document.getElementById("MarcarTodos").addEventListener("click", ejercicio3Marcar);
    document.getElementById("DesmarcarTodos").addEventListener("click", ejercicio3DesMarcar);

}

function ejercicio3Generar() {
    let elemento;
    let numero;
    let label;
    contadorId = 0;
    let contenedor = document.getElementById("container");
    while(contenedor.lastElementChild){
        contenedor.removeChild(contenedor.lastElementChild);

    }
    for (let i = 0; i <= 100; i++) {
        numero = Math.round((Math.random() * 100 + 1));
        //
        elemento = document.createElement("input");
        elemento.setAttribute("type", "checkbox");
        elemento.setAttribute("name", contadorId);
        elemento.setAttribute("id", contadorId);
        document.getElementById("container").appendChild(elemento);
        //
        label = document.createElement("label");
        label.setAttribute("for", contadorId);
        label.innerText = numero;
        document.getElementById("container").appendChild(label);

        contadorId++;
    }
}

function ejercicio3Marcar() {
    let elemento;

    for (let i = 0; i <= 100; i++) {
        document.getElementById(i + "").checked = true;
    }

}

function ejercicio3DesMarcar() {
    for (let i = 0; i <= 100; i++) {
        document.getElementById(i + "").checked = false;
    }

}


/**Ejercicio 4 */
let elementos = document.getElementsByClassName("parrafo");
Array.from(elementos).forEach(function (elementos) {
    elementos.addEventListener('click', Desaparecer);
});
function Desaparecer() {
    let elemento = document.getElementsByClassName("parrafo");
    for (let i = 0; i <= 2; i++) {
        elemento[i].setAttribute("style", "display:none;");
    }
}

let elementos2 = document.getElementsByClassName("parrafo2");
Array.from(elementos2).forEach(function (elementos2) {
    elementos2.addEventListener('dblclick', Eliminar);
});

function Eliminar() {
    let elemento2 = document.getElementById("containerBorrado");

    while (elemento2.lastElementChild) {
        elemento2.removeChild(elemento2.lastElementChild);
    }
}
