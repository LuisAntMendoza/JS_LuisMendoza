//numeros de fibonacci
var fib = [0,1];

//declaramos un largo y un ancho para el caracol
var largo = 3;
var ancho = 4;

//calculamos el numero de numeros que utilizaremos
var total = largo * ancho;

//variables para guiarse por el espiral
var filaArriba = 1;
var filaAbajo = largo;
var colDerecha = ancho;
var colIzquierda = -1;
let fila = 0;
let col = 0;

//creamos los numeros
let tablero = new Array();
for (let i = 0; i < total; i++) {
    if(i != 1 && i != 0) {
        fib[i] = fib[i-1]+fib[i-2];
    }
}

//creamos el tablero
for (let i = 0; i < largo; i++) {
    tablero[i] = new Array();
    for (let k = 0; k < ancho; k++) {
        tablero[i][k] = 0;
    }
}

//rellenamos el tablero
let i = 0;
for (let k = 0; i < total; k++) {
    //si esta arriba a la derecha rellena hacia abajo
    if(col == colDerecha && fila == filaArriba) {
        while(fila < filaAbajo) {
            tablero[fila][col] = fib[i];
            i++;
            fila++;

        }
        col--;
        fila--;
        filaAbajo--;
    }
    //si esta abajo a la derecha rellena hacia la izquierda
    else if(col == colDerecha-1 && fila == filaAbajo) {
        while(col > colIzquierda) {
            tablero[fila][col] = fib[i];
            i++;
            col--;

        }
        col++;
        fila--;
        colIzquierda++;
    }
    //si esta abajo a la izquierda rellena hacia arriba
    else if (col == colIzquierda && fila == filaAbajo-1) {
        while(fila >= filaArriba) {
            tablero[fila][col] = fib[i];
            i++;
            fila--;
        }
        fila++;
        col++;
        filaArriba++;
    }
    //si esta arriba a la izquierda rellena hacia la derecha
    else {
        while(col < colDerecha) {
            tablero[fila][col] = fib[i];
            i++;
            col++;

        }
        fila++;
        col--;
        colDerecha--;
    }
}
//imprimimos nuestro tablero
console.log(tablero);
