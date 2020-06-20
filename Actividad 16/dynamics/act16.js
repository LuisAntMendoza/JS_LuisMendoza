const width = 500;
const height = 500;

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

$(document).ready(() => {
    let canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");
    ctx.translate(width / 2, height / 2);
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