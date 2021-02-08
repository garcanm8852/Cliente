let Correciones = 0;

document.getElementById("F5-1").addEventListener("click", function () {
    this.classList.remove("btn-dark");
    this.classList.add("btn-success");
    Correcion()
}, false)

document.getElementById("F5-2").addEventListener("click", function () {
    this.classList.remove("btn-dark");
    this.classList.add("btn-success");
    Correcion()
}, false)

document.getElementById("F5-3").addEventListener("click", function () {
    this.classList.remove("btn-dark");
    this.classList.add("btn-success");
    Correcion()
}, false)

document.getElementById("F5-4").addEventListener("click", function () {
    this.classList.remove("btn-dark");
    this.classList.add("btn-success");
    Correcion()
}, false)

document.getElementById("F6-1").addEventListener("click", function () {
    this.classList.remove("btn-dark");
    this.classList.add("btn-success");
    Correcion()
}, false)

document.getElementById("F6-2").addEventListener("click", function () {
    this.classList.remove("btn-dark");
    this.classList.add("btn-success");
    Correcion()
}, false)

document.getElementById("F6-3").addEventListener("click", function () {
    this.classList.remove("btn-dark");
    this.classList.add("btn-success");
    Correcion()
}, false)

document.getElementById("F6-4").addEventListener("click", function () {
    this.classList.remove("btn-dark");
    this.classList.add("btn-success");
    Correcion()
}, false)

function Correcion() {
    Correciones++;
    if(Correciones < 9){
    if (Correciones < 8) {
        document.getElementById("idCorreciones").innerText = Correciones;
    } else {
        document.getElementById("idCorreciones").innerText = Correciones + " ejercicios .Todos los ejercicios han sido corregidos";

    }}
}