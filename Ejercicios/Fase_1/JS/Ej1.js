function ej1() {
    let nombre = "Manuel Jesús García de Quirós Cánovas";
    let edad = 20;

    document.write("Nombre: " + nombre);
    document.write("<br/>");
    document.write("Edad: " + edad);

}

function ej2() {
    let nombre = "Manuel";
    let sueldo = 1000;

    /*Mostrado por pantalla.*/
    document.write("Nombre: " + nombre);
    document.write("<br/>");
    document.write("Sueldo: " + sueldo + "€")

    /*Mostrado por consola.*/
    console.log("Nombre: " + nombre);
    console.log("Sueldo: " + sueldo + "€");

}

function ej3() {
    let nombre = prompt("Introduzca su nombre, por favor.")
    let email = prompt("Introduzca su email, por favor.")

    document.write("Nombre: " + nombre);
    document.write("<br/>");
    document.write("Email: " + email);
    ("email1").innerHTML = email;

}

function ej4() {
    let lado = prompt("Introduzca el tamaño del lado.");
    let perimetro = lado * 4;

    document.write("Lado: " + lado + "cm");
    document.write("<br/>");
    document.write("Perímetro: " + perimetro + "cm");


}

function ej5() {
    let p1 = parseInt(prompt("Introduzca el valor del primer número."));
    let p2 = parseInt(prompt("Introduzca el valor del segundo número."));
    let p3 = prompt("Introduzca el valor del tercer número.");
    let p4 = prompt("Introduzca el valor del cuarto número.");

    document.write("Operación 1: " + p1 + " + " + p2 + " = " + (p1 + p2));
    document.write("<br/>");
    document.write("Operación 2: " + p3 + " x " + p4 + " = " + (p3 * p4));

}

function ej6() {
    let nota1 = parseInt(prompt("Introduzca la nota del primer trimestre."));
    let nota2 = parseInt(prompt("Introduzca la nota del segundo trimestre."));
    let nota3 = parseInt(prompt("Introduzca la nota del tercer trimestre."));
    let promedio = (nota1 + nota2 + nota3) / 3;


    if (promedio >= 7) {
        alert("Promocionado.");
    } else {
        alert("Repetir.")
    }
}

function ej7() {
    let clave1 = prompt("Introduzca la contraseña.");
    let clave2 = prompt("Introduzca de nuevo la contraseña");

    if (clave1 == clave2) {
        alert("Las contraseñas coinciden.")
    } else {
        alert("Las contraseñas no coinciden.")
    }
}