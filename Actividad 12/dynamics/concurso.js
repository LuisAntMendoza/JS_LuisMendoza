//Definimos variables y preparamos el campo
let campo = document.getElementById("campo");
let largo = 20;
campo.style.width = (largo * 20) + "px";
let serpiente = document.createElement("div");
serpiente.classList.add("serpiente");
let arraySerpiente = [0];
let posicion = 0;
let fila = 0;
let direccion = 2;
let velocidad = 500;
let manzana = null;
let cuadroManzana = document.createElement("div");
cuadroManzana.classList.add("fruta");
let body = document.getElementsByTagName("body")[0];

//Cambia la direccion hacia arriba de la serpiente
let arriba = document.getElementById("arriba");
arriba.addEventListener("click", () => {
    if (direccion != 3) {
        direccion = 1;
    }
});

//Cambia la direccion hacia abajo de la serpiente
let abajo = document.getElementById("abajo");
abajo.addEventListener("click", () => {
    if (direccion != 1) {
        direccion = 3;
    }
});

//Cambia la direccion hacia la izquierda de la serpiente
let izquierda = document.getElementById("izquierda");
izquierda.addEventListener("click", () => {
    if (direccion != 2) {
        direccion = 4;
    }
});

//Cambia la direccion hacia la derecha de la serpiente
let derecha = document.getElementById("derecha");
derecha.addEventListener("click", () => {
    if (direccion != 4) {
        direccion = 2;
    }
});
generar();

//Genera el tablero
function generar() {
    //Si hay un tablero lo borra
    if (campo.getElementsByTagName("div").length != 0) {
        for (let i = 0; i < largo * largo; i++) {
            campo.removeChild(campo.childNodes[0])
        }
    }
    //Añade las celdas
    for (let i = 0; i < largo * largo; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        campo.appendChild(pixel);
    }
    //Añade las serpientes
    for (valor of arraySerpiente) {
        let serpiente = document.createElement("div");
        serpiente.classList.add("serpiente");
        campo.replaceChild(serpiente, campo.getElementsByTagName("div")[valor]);
    }
    //Añade la manzana
    if (manzana != null) {
        campo.replaceChild(cuadroManzana, campo.getElementsByTagName("div")[manzana]);
    }
}

//Valida si la serpiente come
function comer() {
    if (manzana === posicion) {
        arraySerpiente.push(posicion);
        manzana = null;
        velocidad = velocidad * 0.98;
    }
}

//Valida si la serpiente choca con su cola
function validarEndGame() {
    if (arraySerpiente.length > 1) {
        for (let i = 1; i < arraySerpiente.length; i++) {
            if (posicion == arraySerpiente[i]) {
                endGame();
            }
        }
    }
}

//Muestra un mensaje de que perdio
function endGame() {
    clearInterval(jugar);
    let go = document.createElement("div");
    go.classList.add("gameover");
    go.innerText = "¡Game Over!";
    body.removeChild(campo);
    body.appendChild(go);
    body.removeChild(body.getElementsByClassName("botones")[0]);
}

//Mueve la serpiente en la direccion indicada
function mover(dir) {
    let cant = undefined;
    if (dir == 1) {
        if (fila == 0) {
            cant = largo * (largo - 1);
            fila = largo - 1;
            posicion = (largo * (largo - 1)) + posicion;
        } else {
            cant = largo * -1;
            fila--;
            posicion = posicion - (largo * 1);
        }
        arraySerpiente.unshift(posicion);
        arraySerpiente.pop();
    } else if (dir == 2) {
        if (posicion == (fila * largo) + (largo - 1)) {
            cant = -1 * (largo - 1);
            posicion = posicion - (largo - 1);
        } else {
            cant = 1;
            posicion = posicion + 1;
        }
        arraySerpiente.unshift(posicion);
        arraySerpiente.pop();
    } else if (dir == 3) {
        if (fila == largo - 1) {
            cant = -1 * (largo * (largo - 1));
            posicion = posicion - largo * (largo - 1);
            fila = 0;
        } else {
            cant = largo;
            fila++;
            posicion = posicion + largo;
        }
        arraySerpiente.unshift(posicion);
        arraySerpiente.pop();
    } else if (dir == 4) {
        if (posicion % largo == 0 || posicion == 0) {
            cant = largo - 1;
            posicion = posicion + (largo - 1)
        } else {
            cant = -1;
            posicion = posicion - 1;
        }
        arraySerpiente.unshift(posicion);
        arraySerpiente.pop();
    }
    return cant;
}

//Crea el intervalo del juego
let jugar = setInterval(juego, velocidad);

//Mueve la serpiente, valida que no haya perdido, come, y genera el estatus del tablero
function juego() {
    mover(direccion);
    validarEndGame();
    comer();
    generar();
}

//Genera las manzanas
setTimeout(() => {
    manzana = Math.floor(Math.random() * (largo * largo));
    let fruta = setInterval(() => {
        if (manzana == null) {
            console.log("manzana")
            manzana = Math.floor(Math.random() * (largo * largo));
        }
    }, 30000);
}, 10000);