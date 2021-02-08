/*Ejercicio 1*/
function Ejecucion1(){
    window.onmousedown = ReemplazarImagen;
    window.onmouseup = RestaurarImagen;
}

function ReemplazarImagen() {
    document.getElementById("Imagen").src = "../IMG/andromeda.jpg";
}

function RestaurarImagen() {
    document.getElementById("Imagen").src = "../IMG/vialactea.jpeg";
}

/*Ejercicio 2*/
function CambiarAzul() {
    document.getElementById("Cuerpo").setAttribute("bgcolor", "#CCE6FF");
}

function CambiarAmarillo() {
    document.getElementById("Cuerpo").setAttribute("bgcolor", "#FFFF00");
}

function CambiarBlanco() {
    document.getElementById("Cuerpo").setAttribute("bgcolor", "#FFFFFF");
}
/*Ejercicio 3*/
//document.oncontextmenu = function () { return false }
//Este ejercicio está comentado para poder realizar los demás ejercicios.

/*Ejercicio 4*/

function MostrarPosicion() {
    alert("Posición del ratón: X:" + event.clientX + " Y:" + event.clientY);
}

function Click(event) {

    switch (event.button) {
        case 0:
            alert("Has clicado con el click izquierdo.");
            break;
        case 1:
            alert("Has clicado con el botón central del ratón.");
            break;
        case 2:
            alert("Has clicado con el click derecho.");
            break;
    }


}

/*Ejercicio 5*/
function UbicacionArchivo(Figure) {
    let URL = document.createTextNode(Figure);
    let cont = document.getElementById("url");
    cont.innerText = "";
    cont.appendChild(URL);
}

function Texto() {
    document.getElementById("url").innerText = "La URL aparecerá aquí";
}

/*Ejercicio 6*/


function MostrarTecla(e) {
    let TeclaPulsada = "";
    if ((e.code == "ControlLeft") || (e.code == "ControlRight")) {
        TeclaPulsada += "Control + ";
    }
    if (e.code == 'Tab') {
        TeclaPulsada += "Tabulador";
    }
    TeclaPulsada += e.key;
    document.getElementById("tecla").innerText = TeclaPulsada;
}

function Ejecucion() {
    window.onkeydown = MostrarTecla;
}

/*Ejercicio 7*/
let margen_vertical = window.innerWidth;
let margen_horizontal = window.innerHeight;

let box_top = 0;
let box_left = 0;
let rotacion = 0;

function Desplazamiento(e) {
    margen_vertical = window.innerWidth;
    margen_horizontal = window.innerHeight;

    switch (e.code) {
        case "ArrowUp":
            if ((box_top - 10) > 0) {
                box_top -= 10;
                NaveEspacial.style.top = box_top + "px";
            } else {
                NaveEspacial.style.top = 0 + "px";
            }
            break;

        case "ArrowDown":
            if ((box_top + 110) < margen_horizontal) {
                box_top += 10;
                NaveEspacial.style.top = box_top + "px";
            } else {
                NaveEspacial.style.top = (margen_horizontal - 100) + "px";
            }
            break;

        case "ArrowLeft":
            if ((box_left - 10) > 0) {
                box_left -= 10;
                NaveEspacial.style.left = box_left + "px";
            } else {
                NaveEspacial.style.left = 0 + "px";
            }
            break;

        case "ArrowRight":
            if ((box_left + 110) < margen_horizontal) {
                box_left += 10;
                NaveEspacial.style.left = box_left + "px";
            } else {
                NaveEspacial.style.left = (margen_horizontal - 100) + "px";
            }

            break;

        case "ArrowLeft":
            if ((box_left - 10) > 0) {
                box_left -= 10;
                NaveEspacial.style.left = box_left + "px";
            } else {
                NaveEspacial.style.left = 0 + "px";
            }
            break;

        case "KeyE":
            rotacion += 10;
            document.getElementById("NaveEspacial").style.transform = "rotate(" + rotacion + "deg)";
            NaveEspacial.style.transform = "rotate(" + rotacion + "deg)";
            break;

        case "KeyQ":
            rotacion -= 10;
            document.getElementById("NaveEspacial").style.transform = "rotate(" + rotacion + "deg)";
            NaveEspacial.style.transform = "rotate(" + rotacion + "deg)";
            break;

        default:
            break;
    }
}

window.onkeydown = Desplazamiento;