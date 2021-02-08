/**
 * EJERCICIO 2
 */
function callEjercicio2() {
    Ejercicio2();
}

function Ejercicio2() {
    window.addEventListener("load", Contador);
    document.getElementById("Eliminar").addEventListener("click", Eliminar);

}

function Contador() {

    count = document.getElementById("cookie");
    if (getCookie("cargas") == "") {
        setCookie("cargas", 1, 30);
        count.innerText = 1;
    } else {
        setCookie("cargas", parseInt(getCookie("cargas")) + 1, 30);
        count.innerText = getCookie("cargas");
    }

}

function Eliminar() {
    delCookie("cargas");
}


/**
 * EJERCICIO 3
 */

function callEjercicio3() {
    Ejercicio3();
}

function Ejercicio3() {
    window.addEventListener("load", lContador);
    document.getElementById("Eliminar").addEventListener("click", lEliminar);

}

function lContador() {
    count = document.getElementById("local");

    if (localStorage.getItem("lcargas") == "NaN") {
        localStorage.setItem("lcargas", 1);
        count.innerText = localStorage.getItem("lcargas");
    } else {
        localStorage.setItem("lcargas", parseInt(localStorage.getItem("lcargas")) + 1);
        count.innerText = localStorage.getItem("lcargas");
    }
}

function lEliminar() {
    localStorage.removeItem("lcargas");
    location.reload();
}

/**
 * EJERCICIO 4
 */

function callEjercicio4() {
    Ejercicio4();
}

function Ejercicio4() {
    document.getElementById("Anadir").addEventListener("click", AnadirPelicula);
    document.getElementById("Eliminar").addEventListener("click", EliminarListaPeliculas);
    window.addEventListener("load", CargarPeliculas);


}

function AnadirPelicula() {
    listaPadre = document.getElementById("PeliculaSeleccionada");
    pelicula = document.getElementById("listaPelicula");
    pelicula = pelicula.options[pelicula.selectedIndex].text;
    if (getCookie("lista") == "") {
        setCookie("lista", pelicula, 30);

    } else {
        setCookie("lista", getCookie("lista") + "," + pelicula, 30);
    }
    textopelicula = document.createTextNode(pelicula);
    li = document.createElement("li");
    li.appendChild(textopelicula);
    listaPadre.appendChild(li);
    alert("Se han añadido las siguientes películas: \n" + getCookie("lista"));
}

function CargarPeliculas() {
    listaPadre = document.getElementById("PeliculaSeleccionada");
    cookie = getCookie("lista");
    if (cookie != "") {
        cookie = cookie.split(",");
        for (let i = 0; i < cookie.length; i++) {
            li = document.createElement("li");
            litext = document.createTextNode(cookie[i]);
            li.appendChild(litext);
            listaPadre.appendChild(li);
        }
    }
}

function EliminarListaPeliculas() {
    delCookie("lista")
}


/**
 * Funciones comunes
 */

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function delCookie(cname) {
    document.cookie = cname + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    location.reload();
}