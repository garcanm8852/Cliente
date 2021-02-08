var $ = "jquery";
window.jQuery = $;
window.$ = $;
/**
 * Ejercicio 1
 * Obtén mediante AJAX los votos de restaurantes de una fuente (par, usuariorestaurante). Los votos se recogerán por AJAX recibiendo un objeto JSON con un array de objetos con los atributos usuario y restaurante (que significan que el usuario X votó
        como bueno el restaurante Y).
 */
function callEjercicio01() {
    $.ajax({
        method: "get",
        dataType: "json",
        url: "https://apuntesfpinformatica.es/DWEC/EjemploUD9-3-1Restaurante.php",
        success: resultado => {
            for (let i = 0; i < resultado.length; i++) {
                let usuario = document.createElement("li");
                usuario.appendChild(document.createTextNode(resultado[i].usuario + " - " + resultado[i].restaurante));
                $("#lista").append(usuario);
            }
            console.log(resultado);
        },
        error: fallo => {
            alert("A fallado");
        }
    })

    $.ajax({
        method: "get",
        dataType: "json",
        url: "https://apuntesfpinformatica.es/DWEC/EjemploUD9-3-1Baneados.php",
        success: resultado => {
            for (let j = 0; j < resultado.length; j++) {
                let usuarioBaneado = document.createElement("li");
                usuarioBaneado.appendChild(document.createTextNode(resultado[j]));
                $("#baneado").append(usuarioBaneado);
            }
        },
        error: fallo => {
            alert("A fallado");
        }
    })
}

/**Ejercicio 2
 *Nuestra misión es realizar un programa que reciba por AJAX una configuración de cada
        amigo que hace, nos muestre el resumen del saldo final de cada amigo.
 */
function callEjercicio02() {
    $.ajax({
        method: "get",
        dataType: "json",
        url: "https://apuntesfpinformatica.es/DWEC/EjemploUD9-3-2Amigos.php",
        success: resultado => {

            for (let i = 0; i < resultado.length; i++) {
                let nombre = resultado[i].nombre;
                let euros = parseInt(resultado[i].euros);
                let reparto = resultado[i].arrayReparto;
                let eurosPorPersona = euros / parseInt(resultado[i].arrayReparto.length);
                let dineroActual = parseInt($("#" + nombre).text());
                $("#" + nombre).text(dineroActual - euros);

                for (let j = 0; j < reparto.length; j++) {
                    let dineroEntrante = parseInt($("#" + reparto[j]).text());
                    dineroEntrante += eurosPorPersona;
                    $("#" + reparto[j]).text(dineroEntrante);;
                    console.log(dineroEntrante);
                }

            }
            console.log(resultado);
        },
        error: fallo => {
            alert("A fallado");
        }
    })
}

/**
 * Ejercicio 3
 * Para ello se realizará una consulta para obtener:
● Suma de cantidad de premios al décimo para números primos.
● Suma de cantidad de premios al décimo para números palíndromos.
● Suma de cantidad de premios de una lista de números dados por el
usuario, separados por coma
https://servicios.elpais.com/sorteos/loteria-navidad/api/
 */
function callEjercicio03() {
    palindrome("")
    $.ajax({
        method: "get",
        dataType: "json",
        url: "https://api.elpais.com/ws/LoteriaNavidadPremiados?n=resumen[0].numero1",
        success: resultado => {
            for (let i = 0; i < 13; i++) {

            }
        },
        error: fallo => {
            alert("A fallado");
        }
    })
}

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

/**
 * Ejercicio 4
 * Usando https://codeforces.com/apiHelp/methods#contest.list de la API de
Codeforces.com. Obtener la lista de concursos de Codeforces disponibles, pero
solo mostrar aquellos que se hicieron en mes de mayo y posteriormente la
temporada 2012-2013
 */

function callEjercicio04() {
    $.ajax({
        method: "get",
        dataType: "json",
        url: "../JSON/contest.json",
        success: resultado => {
            console.log(resultado);
        },
        error: fallo => {
            alert("A fallado");
        }
    })
}

/**
 * 
 * Ejercicio 04
 */