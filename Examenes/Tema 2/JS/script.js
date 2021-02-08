/**
 * Función lanzadora del ejercicio Opción 2
 */
function callOpcion1() {
    document.getElementById("idContrasena").addEventListener("focusout", ComprobarContrasena);
    document.getElementById("idRepita").addEventListener("focusout", ComprobarIguales);
    document.getElementById("idIndicio").addEventListener("focusout", ComprobarContiene);
    document.getElementById("idModificar").addEventListener("click", ComprobacionCompleta);
}
function ComprobarContrasena() {
    let patron = new RegExp("/.{7}");
    let Contrasena = document.getElementById("idContrasena").value;
    let check = true;
    if (Contrasena.match(patron) != true) {
        alert("La contraseña debe empezar por una letra mayúscula, tene como mínimo 6 caracteres y al menos un dígito");
        document.getElementById("idContrasena").focus();
        document.getElementById("idContrasena").onselect;
        check = false;
    }
    return check;
}

function ComprobarIguales() {
    let Contrasena = document.getElementById("idContrasena").value;
    let Repita = document.getElementById("idRepita").value;
    let check = true;

    if (Contrasena != Repita) {
        alert("Las contraseñas escritas no coinciden.Vuelva a Intentarlo")
        document.getElementById("idContrasena").focus();
        check = false;
    }
    return check;
}

function ComprobarContiene() {
    let Indicio = document.getElementById("idIndicio").value;
    let Contrasena = document.getElementById("idContrasena").value;
    let check = true;
    if (Indicio.includes(Contrasena) == true) {
        alert("El indicio de contraseña no puede contener la contraseña");
        check = false;
    }
    return check;
}

function ComprobacionCompleta() {
    if (ComprobarContrasena == true && ComprobarIguales == true && ComprobarContiene == true) {
        document.getElementById("idFormulario").submit();
    }
}
/**
 * Función lanzadora del ejercicio Opción 2
 */
let Palabras = ["hola", "jamon", "adversario", "inercia"];
function callOpcion2() {
    document.getElementById("NuevaPalabra").addEventListener("click", GenerarPalabra);
    document.getElementById("Solucion").addEventListener("click", Solucion);
    document.getElementById("Finalizar").addEventListener("click", Finalizar);
}

function GenerarPalabra() {
    let CampoNPalabra = document.getElementById("PalabraOculta");
    let indice = parseInt(Math.random() * 3);
    let Palabra = Palabras[indice];
    Palabra = Palabra.split("").sort().join("").toLowerCase();
    CampoNPalabra.setAttribute("value", Palabra);

}

function Solucion() {
    let PalabraIntroducida = document.getElementById("PalabraOculta").value;
    let aux = 0;
    for (let i = 0; i < Palabras.length; i++) {
        if(Palabras[i].split("").sort().join("").toLowerCase() == PalabraIntroducida){
            aux = i;
        }
    }
    alert("La palabra era " + Palabras[aux]);
}

function Finalizar(){
    let CampoNPalabra = document.getElementById("PalabraIntroducida");
    let check = false;
    for (let i = 0; i < Palabras.length; i++) {
        if(Palabras[i] == CampoNPalabra){
            check == true;
        }       
    }
    if(check == true){
        alert("Buen trabajo");
    }else{
        alert("Palabra Incorrecta");
    }
}