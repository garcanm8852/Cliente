/*Ejercicio 2*/
function ejercicio2() {
    let listaServidores = ["terra.es", "google.com", "marca.es", "yahoo.es"];
    let Correo = document.getElementById("idEmail").value;
    let Dominio = Correo.split("@")[1];
    let verificacion = false;
    let Formulario = document.getElementById("idFormulario");
    ;

    for (let i = 0; i < listaServidores.length; i++) {
        if (Dominio === listaServidores[i]) {
            verificacion = true;
        }
    }

    if (verificacion == true) {
        Formulario.submit();
    } else {
        if (document.getElementsByTagName("h5")[0] == null) {
            let Error = document.createTextNode("Este formulario solo acepta los siguientes dominios: terra.es, google.com, marca.es, yahoo.es");
            let BError = document.createElement("h5");
            BError.appendChild(Error);
            Formulario.appendChild(BError);

        }
    }
}

/*Ejercicio 3*/
function ejercicio3() {
    let Formulario = document.getElementById("idFormulario");
    let Palabra1 = document.getElementById("idPalabra1").value;
    let Palabra2 = document.getElementById("idPalabra2").value;

    let Orden1 = Palabra1.split("").sort().join("").toLowerCase();
    let Orden2 = Palabra2.split("").sort().join("").toLowerCase();

    if (Orden1 === Orden2) {
        let TextoAnagrama = document.createTextNode("Las dos cadenas son anagramas");
        let Anagrama = document.createElement("h5");
        Anagrama.appendChild(TextoAnagrama);
        Formulario.appendChild(Anagrama);
    } else {
        let TextoAnagrama = document.createTextNode("Las dos cadenas no son anagramas");
        let Anagrama = document.createElement("h5");
        Anagrama.appendChild(TextoAnagrama);
        Formulario.appendChild(Anagrama);

    }
}

/*Ejercicio 4*/
function ejercicio4() {
    let Formulario = document.getElementById("idFormulario");
    let ProvinciaSeleccioanda = document.getElementById("idProvincia").value;
    let CiudadSeleccioanda = document.getElementById("idCiudades").value;

    if (ProvinciaSeleccioanda == "null" && CiudadSeleccioanda == "null") {
        if (document.getElementsByTagName("h5")[0] == null) {
            let TextoError = document.createTextNode("Por favor seleccione los datos correctamente");
            let Error = document.createElement("h5");
            Error.appendChild(TextoError);
            Formulario.appendChild(TextoError);
        }
    } else {
        Formulario.submit();
    }
}

function CargarSelect() {

    let CiudadesAlicante = ["Alicante Capital", "Elche", "Orihuela"];
    let CiudadesCastellon = ["Castellon Capital", "Oropesa", "Vinaroz"]
    let CiudadesValencia = ["Valencia Capital", "Torrent", "Mistala"]
    let Lista = document.getElementById("idCiudades");

    document.getElementById("idProvincia").onchange = function (e) {
        let ProvinciaActual = document.getElementById("idProvincia").value;
        switch (ProvinciaActual) {
            case "null":
                /*Eliminar Datos*/
                while (Lista.lastElementChild) {
                    Lista.removeChild(Lista.lastElementChild);
                }

                let textOpcion = document.createTextNode("Select no seleccionado");
                let Opcion = document.createElement("option");
                Opcion.appendChild(textOpcion);
                Opcion.setAttribute("value", "null")
                Lista.appendChild(Opcion);

                break;

            case "Alicante":
                /*Eliminar Datos*/
                while (Lista.lastElementChild) {
                    Lista.removeChild(Lista.lastElementChild);
                }
                /*Añadir Datos*/
                for (let a = 0; a < CiudadesAlicante.length; a++) {
                    let textOpcion = document.createTextNode(CiudadesAlicante[a]);
                    let Opcion = document.createElement("option");
                    Opcion.appendChild(textOpcion);
                    Opcion.setAttribute("value", CiudadesAlicante[a])
                    Lista.appendChild(Opcion);
                }
                break;
            case "Castellon":
                /*Eliminar Datos*/
                while (Lista.lastElementChild) {
                    Lista.removeChild(Lista.lastElementChild);
                }
                /*Añadir Datos*/
                for (let b = 0; b < CiudadesCastellon.length; b++) {
                    let textOpcion = document.createTextNode(CiudadesCastellon[b]);
                    let Opcion = document.createElement("option");
                    Opcion.appendChild(textOpcion);
                    Opcion.setAttribute("value", CiudadesCastellon[b])
                    Lista.appendChild(Opcion);
                }
                break;

            case "Valencia":
                /*Eliminar Datos*/
                while (Lista.lastElementChild) {
                    Lista.removeChild(Lista.lastElementChild);
                }
                /*Añadir Datos*/
                for (let c = 0; c < CiudadesValencia.length; c++) {
                    let textOpcion = document.createTextNode(CiudadesValencia[c]);
                    let Opcion = document.createElement("option");
                    Opcion.appendChild(textOpcion);
                    if (CiudadesValencia[c] == "Mistala") {
                        Opcion.selected = true;
                    }
                    Opcion.setAttribute("value", CiudadesValencia[c])
                    Lista.appendChild(Opcion);
                }
                break;

            default:
                break;
        }

    };
}