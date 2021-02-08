function ejercicio4a() {
    /**
     * 4a. Escriba un programa JavaScript para calcular la suma de una matriz de números enteros.
     */

    let suma = 0;
    let numeros = [];
    let n = parseInt(prompt("Introduzca el numero de cifras a sumar"));
    for (let i = 0; i < n; i++) numeros[i] = parseInt(prompt("Introduzca una cifra"));
    for (let j = 0; j < n; j++) suma = suma + numeros[j];
    alert(suma);
}

function ejercicio4b() {
    /**
     * 4b. Escriba una función de JavaScript para obtener el nombre del mes a partir de una fecha en particular. 
     */
    let mesIntroducido = prompt("Introduzca el mes").toLowerCase();
    let aux = 0;
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    for (let mes = 0; mes < meses.length; mes++) {
        if (mesIntroducido == meses[mes]) {
            aux = mes;
        }
    }

    switch (aux) {
        case 0, 2, 4, 6, 7, 9, 11:
            alert("El mes tiene 31 días");
            break;
        case 1:
            alert("El mes tiene 28 días");
            break;

        case 3, 5, 8, 10:
            alert("El mes tiene 30 días");
            break;
    }

}

function ejercicio5() {
    /**
     * 5. Escriba un programa JavaScript simple para unir todos los elementos de una matriz en una cadena
    */

    let numeros = [];
    let n = parseInt(prompt("Introduzca el numero de elementos a introducir"));
    for (let i = 0; i < n; i++) numeros[i] = prompt("Introduzca una cadena");
    alert(numeros.join(", "));


}

function ejercicio6() {
    /** 
     * 6. Escriba una función de JavaScript para encontrar el valor más alto en una matriz. funcion[11,3,16,90] Devuelve 90
    */

    let superior = 0;
    let numeros = [];
    let n = parseInt(prompt("Introduzca el numero de cifras a sumar"));
    for (let i = 0; i < n; i++) numeros[i] = parseInt(prompt("Introduzca una cifra"));
    for (let j = 0; j < n; j++) if (superior < numeros[j]) superior = numeros[j];
    alert("El número más alto del Array es: " + superior);
}

function ejercicio8a() {
    /**
     * 8a. Escriba una función de JavaScript para obtener la diferencia entre dos fechas endías.
     */
    
    let dial = parseInt(prompt("Introduce el día de la fecha más lejana").trim());
    let mesl = parseInt(prompt("Introduce el mes de la fecha más lenjana").trim());
    let aniol = parseInt(prompt("Introduce el año de la fecha más lejana").trim());
    let fechaPosterior = new Date(aniol+"-"+mesl+"-"+dial);
    let diac = parseInt(prompt("Introduce el día de la fecha más cercana").trim());
    let mesc = parseInt(prompt("Introduce el mes de la fecha más cercana").trim());
    let anioc = parseInt(prompt("Introduce el año de la fecha más cercana").trim());
    let fechaActual = new Date(anioc+"-"+mesc+"-"+diac);
    
    let diferencia;

    fechaActual.getTime;

    diferencia = Math.abs(Math.round((fechaPosterior - fechaActual) / (1000 * 60 * 60 * 24)));
    alert("Quedan " + diferencia + " días");

}

function ejercicio8b() {
    /**
     * 8b. Escriba un programa JavaScript para encontrar el elemento más frecuente de una matriz.
     */
    let elementos = [];
    let repetidos = [];

    let n = parseInt(prompt("Introduzca el numero de elementos a introducir"));

    for (let i = 0; i < n; i++) elementos[i] = prompt("Introduzca una cadena");

    elementos.forEach(element => {
        let repeticion = 0;
        for (let j = 0; j < n; j++) {
            if (element == elementos[j]) {
                repeticion++;
            }

        }
        repetidos.push(repeticion);
    });

    let max = repetidos.indexOf(Math.max.apply(null, repetidos));
    alert("El elemento más repetido es " + elementos[max]);

}

function ejercicio18() {
    /**
     * 18. Escriba una función de JavaScript para calcular el producto de valores en una matriz.
    */

    let producto = 0;
    let numeros = [];
    let n = parseInt(prompt("Introduzca el numero de cifras a multiplicar"));
    for (let i = 0; i < n; i++) numeros[i] = parseInt(prompt("Introduzca una cifra"));
    producto = numeros[0];
    for (let j = 1; j < n; j++) producto = producto * numeros[j];
    alert(producto);
}

function ejercicio31a() {
    /**
     * 31a. Escriba una función de JavaScript para obtener el número más alto de tres números diferentes. 
     */
    let numeros = [];
    let n = parseInt(prompt("Introduzca el numero de cifras a comparar"));
    for (let i = 0; i < n; i++) numeros[i] = parseInt(prompt("Introduzca una cifra"));
    alert("El número más alto es " + Math.max.apply(null, numeros));

}

function ejercicio31b() {
    /**
     * 32b. Escriba una función de JavaScript para eliminar un elemento específico de una
    matriz.
     */
    let elementos = [];
    let lista = "";
    let borrado;
    let n = parseInt(prompt("Introduzca el numero de elementos a introducir"));

    for (let i = 0; i < n; i++) elementos[i] = prompt("Introduzca una cadena");
    for (let j = 0; j < n; j++) lista = lista + "\nPosición: " + j + " Elemento: " + elementos[j];

    borrado = prompt("Introduzca el elemento a eliminar" + lista);
    elementos.splice(borrado, 1);

    alert("Contenido del array: " + elementos.join(", "));

}