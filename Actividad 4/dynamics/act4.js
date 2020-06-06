//recibimos el valor
let entrada = prompt();

//validamos que sea mayor a 0
if(entrada > 0) {
    //arreglo con los numeros primos
    let primos = [];
    //arreglo con los divisores primos
    let factores = [];

    //hallamos los numeros primos desde 2 hasta el numero ingresado
    for (let i = 2; i <= entrada; i++) {
        let a = 0;
        for (let k = 2; k < i; k++) {
            if(i%k===0) {
                a++;
            }
        }
        if(a===0) {
            primos.push(i);
        }
    }

    //encontramos los divisores primos del numero
    for (var i = 0; i < primos.length; i++) {
        if(entrada%primos[i]===0) {
            factores.push(primos[i]);
        }
    }

    //mostramos resultados
    console.log(`Su número es: ${entrada}`);
    console.log(factores);
}
else {
    //muestra el error
    console.log("Ingrese un número mayor a 0");
}
