//recibimos los valores
let a = prompt("Ingrese el elevador A");
let b = prompt("Ingrese el elevador B");
let gama = prompt("Ingrese la posición de Gama");
//los pasamos a numero
a = parseInt(a);
b = parseInt(b);
gama = parseInt(gama);
//checamos que sean numeros
if(Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(gama)) {
    //muestra error si no son numeros
    alert("Favor de ingesar números");
}
else {
    //calculamos la diferencia entre ambos elevadores
    let dif1 = 0;
    let dif2 = 0;
    if(gama>a) {
        dif1 = gama-a;
    }
    else {
        dif1 = a-gama;
    }
    if(gama>b) {
        dif2 = gama-b;
    }
    else {
        dif2 = b-gama;
    }
    //muestra que elevador esta mas cerca
    if(dif1 > dif2) {
        alert("El elevador B está mas cerca de Gama");
    }
    else if (dif1 < dif2) {
        alert("El elevador A está mas cerca de Gama");
    }
    else {
        alert("Ambos elevadores están a la misma distancia de Gama");
    }
}
