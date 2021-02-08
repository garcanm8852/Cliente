function buclefor() {
    inicio = performance.now();
    let i = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 2 == 0) {
            console.log("Número impar: " + i);
        }
    }
    fin = performance.now();
    tiempo = fin - inicio;
    console.log(tiempo);
}

function bucledowhile() {
    let i = 0;
    do {
        console.log("Número impar: " + i);
    }
    while (i < 1000) { i + 2 }

}

function reduce() {
    const array1 = [1, 2, 3, 4];
    const reducer = (acummulator, currentValue) => acummulator + currentValue;
    console.log(array1.reduce(reducer));
}

function map() {
    let nombres = ["Pedro", "Juan", "Elena"];
    console.log(nombres.map(nom => nom.length));

    let sumanombre = nombres.reduce((acumlador, elmento) => { return acumlador + Element.length; }, 0);
    console.log(sumanombre);
}

class punto {

    constructor(px, py) {
        this.px = px;
        this.py = py;
    }

    static distancia(a, b){
        const dx = a.px - b.px;
        const dy = a.py - b.py;
        return Math.sqrt(dx * dx + dy * dy);
    }

    get coordX(){
        return this.px;
    }

    devuelveYporX(){
        return this.px * this.py;
    }
}

let p1 = new punto(5,5);
let p2 = new punto(10,10);

console.log(punto.distancia(p1,p2));
console.log(p1.devuelveYporX());
console.log(p1.coordX);

