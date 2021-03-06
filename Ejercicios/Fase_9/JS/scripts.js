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
    aux = 0;
    $.ajax({
        method: "get",
        dataType: "json",
        //El 
        // url: "https://api.elpais.com/ws/LoteriaNavidadPremiados?n=resumen",
        url: "../JSON/elpais.json",
        success: resultado => {
            document.createElement("li")
            $.each(resultado, function(i, numero) {
                if (aux > 1 && aux < 15) {
                    auxLi = document.createElement("li");
                    auxLi.appendChild(document.createTextNode(numero))
                    $("#Lista").append(auxLi);
                    if (palindrome(numero.toString()) == true) {
                        $("#Palindromos").append(auxLi)
                        $("#cantPalindromos").text(parseInt($("#cantPalindromos").text()) + 1)
                    }
                    if (isPrime(numero) == true) {
                        $("#Primos").append(auxLi)
                        $("#cantPrimos").text(parseInt($("#cantPrimos").text()) + 1)
                    }
                    console.log(numero);
                }
                aux++;
            });
            console.log(resultado)
        },
        error: fallo => {
            alert("A fallado");
        }
    })


}

/**
 * Función que se encarga de buscar si una cadena de texto es palíndroma.
 * @param {Buscador de palíndromo} str 
 */
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
/**
 * Función que se encarga de buscar si un número es primo
 * @param {Número a buscar} num 
 */
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
        //Debido a que la API de codeforces bloquea las peticiones entrates, hemos cogido 
        //la petición y la hemos guardado en un fichero JSON 
        //para así proceder a su uso.
        // url: "../JSON/contest.json",
        url: "https://codeforces.com/api/contest.list?gym=true",
        success: resultado => {
            for (let i = 0; i < resultado.result.length; i++) {
                if (resultado.result[i].season == "2012-2013") {
                    auxLi = document.createElement("li");
                    auxLi.appendChild(document.createTextNode(resultado.result[i].name));
                    $("#Lista").append(auxLi);
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
 * 
 * Ejercicio 05
 * Usando https://www.omdbapi.com/ realiza una página que te permita elegir
entre películas o series y de ahí te permita buscar las películas/series de un año
concreto que introduzca el usuario.
 */

function callEjercicio05() {
    $("#Buscar").click(function() {
        $.ajax({
            method: "get",
            dataType: "json",
            // La URL necesita una API KEY. Para ello hemos utilizado un extracto de una busqueda en un archivo json (leon.json) debido a que la petición será denegada sin la Clave.
            url: "http://www.omdbapi.com/?apikey=95f1666a&t=" + $("#idNombre").val() + "&y=" + $("#idAnyo").val() + "&type=" + $("select option:selected").val(),
            // url: "../JSON/leon.json",
            success: resultado => {
                clean();
                $("#Caratula").attr("src", resultado.Poster)
                $("#Titulo").text(resultado.Title);
                $("#Anyo").text(resultado.Year);
                $("#Calificacion").text(resultado.Rated);
                $("#Fecha").text(resultado.Released);
                $("#Duracion").text(resultado.Runtime);
                resultado.Genre.split(", ").forEach(element => {
                    auxLi = document.createElement("li");
                    auxLi.appendChild(document.createTextNode(element));
                    $("#Generos").append(auxLi);
                });
                resultado.Actors.split(", ").forEach(element => {
                    auxLi = document.createElement("li");
                    auxLi.appendChild(document.createTextNode(element));
                    $("#Actores").append(auxLi);
                });
                $("#Trama").text(resultado.Plot);
                $("#Director").text(resultado.Director);
                $("#Escritor").text(resultado.Writer);
                $("#Idiomas").text(resultado.Language);
                $("#Pais").text(resultado.Country);


            },
            error: fallo => {
                alert("La serie o película que desea buscar no existe.");
            }
        })
    });

    function clean() {
        $("#Caratula").attr("src", "")
        $("#Titulo").empty();
        $("#Anyo").empty();
        $("#Calificacion").empty();
        $("#Fecha").empty();
        $("#Duracion").empty();
        $("#Generos").empty();
        $("#Actores").empty();
        $("#Trama").empty();
        $("#Director").empty();
        $("#Escritor").empty();
        $("#Idiomas").empty();
        $("#Pais").empty();
    }
}