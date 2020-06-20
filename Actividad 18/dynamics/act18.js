//Crea la fila de datos
function agregarDato() {
    //Crea el div con clase dato
    let dato = $("<div>");
    $(dato).addClass("dato");
    //Crea el input del dato
    let data = $("<input>");
    $(data).attr("type", "text");
    $(data).attr("placeholder", "Dato");
    $(data).addClass("dato-input");
    //Crea el input del valor
    let valor = $("<input>");
    $(valor).attr("type", "text");
    $(valor).attr("placeholder", "Valor");
    $(valor).addClass("valor");
    //Crea el input del color
    let color = $("<input>");
    $(color).attr("type", "color");
    $(color).addClass("color");
    //Crea el boton de eliminacion
    let eliminar = $("<button>");
    $(eliminar).text("Eliminar");
    $(eliminar).on("click", (e) => {
        e.preventDefault();
        if ($(".dato").length > 1) {
            $($(e.target).parent()).remove();
        }
    });
    //Agregamos los inputs y el boton al div
    $(dato).append(data, valor, color, eliminar);
    //Agregamos el div a #datos
    $("#datos").append(dato);
}

//genera una grafica
function generarTabla() {
    //reiniciamos los valores
    datos = [];
    valores = [];
    colores = [];
    titulo = "";
    $("#mensaje").text("");
    //obtenemos los datos de los inputs
    llenarDatos();
    //validamos que esten completos
    let graficar = validarDatos();
    if (graficar == true) {
        //borra la grafica previamente creada
        if (grafica != undefined) {
            grafica.destroy();
        }
        //crea una grafica segun el tipo seleccionado
        if ($("#tipo").val() == "b") {
            crearBarras();
        } else if ($("#tipo").val() == "p") {
            crearPolar();
        } else if ($("#tipo").val() == "past") {
            crearPastel();
        }
    } else {
        //si no estan los datos completos lo mostramos
        $("#mensaje").text("Favor de insertar los datos y valores completos");
    }

}

//Valida que no haya datos vacios
function validarDatos() {
    let regreso = true;
    //Itera por todo el arreglo
    for (let i = 0; i < datos.length; i++) {
        if (datos[i] == "" || valores[i] == "") {
            //Si en algun indice esta vacio, cambiamos la variable a falso
            regreso = false;
        }
    }
    return regreso;
}

//Obtiene los datos de los inputs
function llenarDatos() {
    $(".dato-input").each((ind, elem) => {
        datos.push($(elem).val());

    });
    $(".valor").each((ind, elem) => {
        valores.push($(elem).val());

    });
    $(".color").each((ind, elem) => {
        colores.push($(elem).val());

    });
    if ($("#nombre").val() == "") {
        titulo = "Gráfica";
    } else {
        titulo = $("#nombre").val();
    }
}

//Crea una grafica polar
function crearPolar() {
    grafica = new Chart(ctx, {
        type: "polarArea",
        data: {
            labels: datos,
            datasets: [{
                data: valores,
                backgroundColor: colores
            }]
        },
        options: {
            title: {
                display: true,
                text: titulo
            }
        }
    });
}

//Crea una grafica de pastel
function crearPastel() {
    grafica = new Chart(ctx, {
        type: "pie",
        data: {
            labels: datos,
            datasets: [{
                data: valores,
                backgroundColor: colores
            }]
        },
        options: {
            title: {
                display: true,
                text: titulo
            }
        }
    });
}

//Crea una grafica de barras
function crearBarras() {
    grafica = new Chart(ctx, {
        type: "bar",
        data: {
            labels: datos,
            datasets: [{
                data: valores,
                backgroundColor: colores
            }]
        },
        options: {
            title: {
                display: true,
                text: titulo
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

//definimos las variables a usar
let canvas = document.getElementById('canvasGrafica');
let ctx = canvas.getContext("2d");
let datos = [];
let valores = [];
let colores = [];
let titulo = undefined;
let grafica = undefined;
//Esperamos a que cargue el documento
$(document).ready(() => {
    //Creamos una fila de datos
    agregarDato();
    //Al dar clic en agregar corre la funcion para agregar una fila
    $("#agregar").on("click", (e) => {
        e.preventDefault();
        agregarDato();
    });
    //Al dar clic en generar corre la funcion de generar una grafica
    $("#generar").on("click", (e) => {
        e.preventDefault();
        generarTabla();
    });
});