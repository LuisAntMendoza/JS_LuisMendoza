const width = 500;
const height = 500;
let canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
let context = canvas.getContext("2d");
context.translate(width / 2, height / 2);
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let minutesInt = 0;
let secondsInt = 0;
let milisecondsInt = 0;
let reloj = undefined;
let lapsos = 0;
context.beginPath();
context.arc(0, 0, 230, 0, Math.PI * 2);
context.stroke()
minutos(0);
segundos(0);
milisegundos(0);
manecillas();

function dibujarReloj() {
    context.clearRect(-width / 2, -height / 2, width, height);
    context.beginPath();
    context.arc(0, 0, 230, 0, Math.PI * 2);
    context.strokeStyle = "black";
    context.stroke()
    manecillas();
    minutos(minutes);
    segundos(seconds);
    milisegundos(miliseconds);
    requestAnimationFrame(dibujarReloj);
}

function manecillas() {
    context.beginPath();
    context.strokeStyle = "black";
    for (let i = 0; i < 6; i++) {
        context.rotate(i * Math.PI / 6);
        context.moveTo(0, -230);
        context.lineTo(0, -200);
        context.stroke();
        context.moveTo(0, 230);
        context.lineTo(0, 200);
        context.stroke();
        context.rotate(-i * Math.PI / 6);
    }
}

function minutos(min) {
    context.beginPath()
    context.moveTo(0, 0);
    context.rotate(min * Math.PI / 30);
    context.lineTo(0, -150);
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
    context.rotate(-min * Math.PI / 30);
}

function segundos(sec) {
    context.beginPath()
    context.moveTo(0, 0);
    context.rotate(sec * Math.PI / 30);
    context.lineTo(0, -170);
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    context.rotate(-sec * Math.PI / 30);
}

function milisegundos(mil) {
    context.beginPath()
    context.moveTo(0, 0);
    context.rotate(mil * Math.PI / 500);
    context.lineTo(0, -190);
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.stroke();
    context.rotate(-mil * Math.PI / 500);
}

$("#iniciar").on("click", (e) => {
    e.preventDefault()
    reloj = setInterval(() => {
        miliseconds += 10;
        seconds += 1 / 100;
        minutes += 1 / 6000;
        milisecondsInt += 10;
        secondsInt += 1 / 100;
        minutesInt += 1 / 6000;
        if (miliseconds >= 1000) {
            miliseconds = 0;
        }
        if (seconds >= 60) {
            seconds = 0;
        }
        if (milisecondsInt >= 1000) {
            milisecondsInt = 0;
        }
        if (secondsInt >= 60) {
            secondsInt = 0;
        }
    }, 10);
    requestAnimationFrame(dibujarReloj)
});
$("#pausar").on("click", (e) => {
    e.preventDefault()
    clearInterval(reloj);
});
$("#parar").on("click", (e) => {
    e.preventDefault()
    clearInterval(reloj)
    let inter = $("<h3>");
    minutes = Math.floor(minutes);
    seconds = Math.floor(seconds);
    $(inter).text(`Tiempo final: ${minutes}:${seconds}:${miliseconds}`);
    $("#intervalos").append(inter);
    miliseconds = 0;
    minutes = 0;
    seconds = 0;
    lapsos = 0;
});
$("#intervalo").on("click", (e) => {
    e.preventDefault();
    lapsos++;
    minutesInt = Math.floor(minutesInt);
    secondsInt = Math.floor(secondsInt);
    let inter = $("<h4>");
    $(inter).text(`Lapso ${lapsos}: ${minutesInt}:${secondsInt}:${milisecondsInt}`);
    $("#intervalos").append(inter);
    minutesInt = 0;
    secondsInt = 0;
    milisecondsInt = 0;
})