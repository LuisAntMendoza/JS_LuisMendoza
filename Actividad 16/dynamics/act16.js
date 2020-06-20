//Dibuja un rectangulo
function dibujarRect(context, border, color) {
    context.clearRect(-width / 2, -height / 2, width, height);
    context.beginPath();
    context.rect(-100, -200, 200, 400);
    context.lineWidth = 5;
    context.strokeStyle = border;
    context.stroke();
    context.fillStyle = color;
    context.fill();
}

//Dibuja un circulo
function dibujarCirc(context, border, color) {
    context.clearRect(-width / 2, -height / 2, width, height);
    context.beginPath();
    context.arc(0, 0, 200, 0, Math.PI * 2);
    context.lineWidth = 5;
    context.strokeStyle = border;
    context.stroke();
    context.fillStyle = color;
    context.fill();
}

//Dibuja a Mickey Mouse
function dibujarMickey(context, border, color) {
    context.clearRect(-width / 2, -height / 2, width, height);
    context.arc(0, 0, 150, 0, Math.PI * 2)
    context.moveTo(125, -125);
    context.arc(125, -125, 100, 0, Math.PI * 2);
    context.moveTo(-125, -125);
    context.arc(-125, -125, 100, 0, Math.PI * 2);
    context.lineWidth = 5;
    context.strokeStyle = border;
    context.stroke();
    context.fillStyle = color;
    context.fill();
}

//Tamaño del canvas
const width = 500;
const height = 500;

//En la carga del documento
$(document).ready(() => {
    //obtenemos el canvas y le damos contexto
    let canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");
    //Lo movemos al centro del canvas
    ctx.translate(width / 2, height / 2);
    //Al dar clic en dibujar obtiene los colores y dibuja la figura solicitada
    $("#Dibujar").on("click", (e) => {
        e.preventDefault()
        let fondo = $("#fondo").val();
        let borde = $("#borde").val();
        if ($("#figura").val() == "r") {
            dibujarRect(ctx, borde, fondo);
        } else if ($("#figura").val() == "c") {
            dibujarCirc(ctx, borde, fondo);
        } else if ($("#figura").val() == "m") {
            dibujarMickey(ctx, borde, fondo);
        }
    })
})