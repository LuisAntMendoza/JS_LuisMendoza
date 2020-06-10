//hace 5 veces la funcion recibida de manera sincronica
function jugar(callback) {
    setTimeout(() => {
        callback();
        jugadas++;
        setTimeout(() => {
            callback();
            jugadas++;
            setTimeout(() => {
                callback();
                jugadas++;
                setTimeout(() => {
                    callback();
                    jugadas++;
                    setTimeout(() => {
                        callback();
                        jugadas++;
                        //al final muestra si gano o perdio
                        if (fin === false) {
                            console.log("Ha ganado! Simón está orgulloso de usted");
                        } else {
                            console.log("Simón está triste, te has equivocado :c");
                        }
                    }, retardo)
                }, retardo)
            }, retardo)
        }, retardo)
    }, retardo);
}
//declaramos variables
let retardo = 100;
let fin = false;
let numeros = [];
let jugadas = 1;
for (var i = 0; i < 5; i++) {
    numeros.push(Math.round(Math.random() * 10));
}

jugar(() => {
    //Solo lo ejecuta si no se ha equivocado
    if (fin === false) {
        //muestra el nuevo numero
        alert("El numero " + jugadas + " es: " + numeros[jugadas - 1]);
        //pide todos los numeros hasta donde vamos
        for (var i = 0; i < jugadas; i++) {
            let recibir = prompt("Ingrese el numero " + (i + 1));
            if (recibir != numeros[i]) {
                fin = true;
            }
        }
    }
});