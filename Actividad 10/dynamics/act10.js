function jugar() {
    //muestra el nuevo numero
    alert("El numero " + jugadas + " es: " + numeros[jugadas - 1]);
    //pide todos los numeros hasta donde vamos
    for (var i = 0; i < jugadas; i++) {
        let recibir = prompt("Ingrese el numero " + (i + 1));
        if (recibir != numeros[i]) {
            fin = true;
        }
    }
    //nos mueve al siguiente numero
    jugadas++;
    //si escribio uno mal manda error
    if (fin === true) {
        reject();
    }
};

//declaramos variables
let numeros = [];
for (var i = 0; i < 5; i++) {
    numeros.push(Math.round(Math.random() * 10));
}
let jugadas = 1;
let fin = false;
let juego = new Promise((resolve, reject) => {
    //if (numeros.length == 5) {
    if (fin === false) {
        resolve();
    } else {
        reject();
    }
});

//Resolvemos la promesa o cachamos su error
juego.then(() => {
    jugar();
}).then(() => {
    jugar();
}).then(() => {
    jugar();
}).then(() => {
    jugar();
}).then(() => {
    jugar();
}).then(() => {
    console.log("Ha ganado! Simón está orgulloso de usted");
}).catch(() => {
    console.log("Simón está triste, te has equivocado :c")
})