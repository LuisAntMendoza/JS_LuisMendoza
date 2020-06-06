//obtenemos body
let body = document.getElementsByTagName("body")[0];
//obtenemos las dimensiones del tablero
let dimension = prompt("Ingrese las dimensiones del tablero");

//creamos una tabla y la agregamos a body
let tabla = document.createElement("table");
body.appendChild(tabla);

//genera el tablero
for (let i = 0; i < dimension; i++) {
    //creamos una fila y la agregamos a la tabla
    let fila = document.createElement("tr");
    tabla.appendChild(fila);
    //si es par
    if (i % 2 == 0) {
        //llenamos de celdas
        for (let k = 0; k < dimension; k++) {
            //si es par
            if (k % 2 == 0) {
                //creamos una celda blanca y la añadimos a la fila
                let blanco = document.createElement("td");
                blanco.classList.add("blanco");
                fila.appendChild(blanco);
            }
            //si es non
            else {
                //creamos una celda negra y la añadimos a la fila
                let negro = document.createElement("td");
                negro.classList.add("negro");
                fila.appendChild(negro);
            }
        }
    }
    //si es non
    else {
        for (let k = 0; k < dimension; k++) {
            //si es par 
            if (k % 2 == 0) {
                //creamos una celda negra y la añadimos a la fila
                let negro = document.createElement("td");
                negro.classList.add("negro");
                fila.appendChild(negro);
            }
            //si es non
            else {
                //creamos una celda blanca y la añadimos a la fila
                let blanco = document.createElement("td");
                blanco.classList.add("blanco");
                fila.appendChild(blanco);
            }
        }
    }
}