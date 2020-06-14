let arrTablero = [];
let cartasMost = 0;
let valCarta1 = undefined;
let valCarta2 = undefined;
let paresRest = undefined;
let paresEnc = undefined;
let vidas = undefined;

function buscarCookie(nombre) {
    let regreso = undefined;
    let cookies = document.cookie;
    let arrCookies = cookies.split("; ");
    let arrCookies2 = [];
    for (let i = 0; i < arrCookies.length; i++) {
        arrCookies2.push(arrCookies[i].split("=")[0]);
        arrCookies2.push(arrCookies[i].split("=")[1]);
    }
    let indice = arrCookies2.indexOf(nombre);
    console.log(arrCookies2)
    if (indice == -1) {
        regreso = null;
    } else {
        regreso = arrCookies2[indice + 1]
    }
    console.log(regreso)
    return regreso;
}

function validarCartas() {
    let regreso = undefined;
    if (valCarta1 == valCarta2) {
        regreso = true;
    } else {
        regreso = false;
    }
    return regreso;
}

function voltearCarta(card) {
    $(card).data("Volteada", true);
    $(card).css("transform", "rotateY(180deg)");
    $(card).addClass("alzada");
    $($($(card).children()[1]).children()[0]).css("transform", "rotateY(0deg)")
}

function cambiarCabecera() {
    $("#nuevoJuego").css("box-shadow", "3px 3px #1C253A");
    $("#nuevoJuego").css("margin", "0");
    $("#cartasEnc").text(`Pares encontrados: ${paresEnc}`);
    $("#cartasRes").text(`Pares restantes: ${paresRest}`);
    $("#vidas").text(`Vidas restantes: ${vidas}`);
}

function crearFichas(card) {
    card.addClass("carta");
    card.data("Volteada", false);
    card.html('<div class="fichadelante"><img src="../statics/media/img/chrome.svg"></div><div class="fichaatras"></div>');
}

function endGame() {
    if (paresRest == 0) {
        let score = $("<h3>");
        score.text("Su puntuación es: " + (parseInt(vidas) * 7) + (parseInt(paresEnc) * 5));
        setTimeout(() => {
            $("#tablero").remove();
            $("#end").css("display", "block");
            $($("#end").children()[0]).text("Felicidades! Has ganado!");
            $("#end").append(score);
            borrarCookies();
        }, 1000)
    } else if (vidas == 0) {
        let score = $("<h3>");
        score.text("Su puntuación es: " + (vidas * 7) + (paresEnc * 5));
        setTimeout(() => {
            $("#tablero").remove();
            $("#end").css("display", "block");
            $($("#end").children()[0]).text("Suerte la próxima vez :(");
            $("#end").append(score);
            borrarCookies();
        }, 1000)
    }
}

function borrarCookies() {
    let time = new Date();
    time.setTime(time.getTime() - 1)
    document.cookie = "arrTablero=0;expires=" + time.toGMTString();
    document.cookie = "vidas=0;expires=" + time.toGMTString();
    document.cookie = "paresEnc=0;expires=" + time.toGMTString();
    document.cookie = "paresRest=0;expires=" + time.toGMTString();
}

function generarTablero() {
    for (let i = 0; i < 30; i++) {
        arrTablero[i] = undefined;
    }
    for (let i = 0; i < 15; i++) {
        for (let k = 0; k < 2; k++) {
            let explorarIndice = 0;
            let validar = 0;
            while (validar < 1) {
                let indice = Math.floor(Math.random() * 30);
                if (arrTablero[indice] == undefined) {
                    validar++;
                    arrTablero[indice] = i;
                }
            }
        }
    }
}

function mostrarTablero() {
    for (let i = 0; i < 30; i++) {
        if (arrTablero[i] != "") {
            $($("#tablero").children()[i]).data("noCarta", arrTablero[i]);
            let img = new Image();
            if ($($("#tablero").children()[i]).data("noCarta") == 0) {
                img.src = "../statics/media/img/angular.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 1) {
                img.src = "../statics/media/img/apple.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 2) {
                img.src = "../statics/media/img/atom.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 3) {
                img.src = "../statics/media/img/bootstrap.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 4) {
                img.src = "../statics/media/img/c.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 5) {
                img.src = "../statics/media/img/css.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 6) {
                img.src = "../statics/media/img/html.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 7) {
                img.src = "../statics/media/img/java.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 8) {
                img.src = "../statics/media/img/javascript.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 9) {
                img.src = "../statics/media/img/jquery.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 10) {
                img.src = "../statics/media/img/linux.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 11) {
                img.src = "../statics/media/img/mysql.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 12) {
                img.src = "../statics/media/img/php.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 13) {
                img.src = "../statics/media/img/python.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 14) {
                img.src = "../statics/media/img/windows.svg";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            $($("#tablero").children()[i]).css("visibility", "visible");
        } else {
            $($("#tablero").children()[i]).css("visibility", "hidden");
        }
    }
}


function generarFichas() {
    for (let i = 0; i < 30; i++) {
        let carta = $("<div>");
        crearFichas(carta);
        carta.click(() => {
            if ($(carta).data("noCarta") != undefined && cartasMost < 2 && $(carta).data("Volteada") == false) {
                cartasMost++;
                if (cartasMost == 1) {
                    valCarta1 = $(carta).data("noCarta");
                    voltearCarta(carta);
                } else {
                    valCarta2 = $(carta).data("noCarta");
                    voltearCarta(carta);
                    let valCartas = validarCartas();
                    if (valCartas == true) {
                        console.log("Par menos")
                        paresEnc++;
                        document.cookie = "paresEnc=" + paresEnc;
                        paresRest--;
                        document.cookie = "paresRest=" + paresRest;
                        $($("#tablero").children()).each((ind, elem) => {
                            if ($(elem).data("noCarta") == valCarta1) {
                                $(elem).removeData("noCarta");
                                setTimeout(() => {
                                    $(elem).css("visibility", "hidden");
                                }, 1000);
                            }
                        })
                        for (let i = 0; i < 30; i++) {
                            if (arrTablero[i] == valCarta1) {
                                arrTablero[i] = undefined;
                            }
                        }
                        document.cookie = "arrTablero=" + arrTablero;
                        console.log(arrTablero);
                    } else {
                        console.log("Vida menos");
                        vidas--;
                        document.cookie = "vidas=" + vidas;
                    }
                    cambiarCabecera();
                    endGame();
                    setTimeout(() => {
                        cartasMost = 0;
                        valCarta1 = undefined;
                        valCarta2 = undefined;
                        $($("#tablero").children()).css("transform", "rotateY(0deg)");
                        $($("#tablero").children()).removeClass("alzada");
                        $($("#tablero").children()).data("Volteada", false);
                        $($($($("#tablero").children()).children()[1]).children()).css("transform", "rotateY(180deg)")
                    }, 1000);
                }
                console.log($(carta).data())
            }
        })
        $("#tablero").append(carta);

    }
}

function nuevoJuego() {
    $("#end").css("display", "none");
    arrTablero = buscarCookie("arrTablero");
    arrTablero = arrTablero.split(",");
    paresRest = buscarCookie("paresRest");
    paresEnc = buscarCookie("paresEnc");
    vidas = buscarCookie("vidas");
    cartasMost = 0;
    valCarta1 = undefined;
    valCarta2 = undefined;
    $($("#tablero").children()).css("transform", "rotateY(0deg)");
    $($("#tablero").children()).removeClass("alzada");
    $($("#tablero").children()).data("Volteada", false);
    $($($($("#tablero").children()).children()[1]).children()).css("transform", "rotateY(180deg)")
    console.log(arrTablero);
}
if (buscarCookie("arrTablero") == null) {
    generarTablero();
    document.cookie = "arrTablero=" + arrTablero;
    document.cookie = "paresRest=15";
    document.cookie = "paresEnc=0";
    document.cookie = "vidas=10";
    console.log("nulo")
}
$("#nuevoJuego").click((e) => {
    e.preventDefault();
    $("#nuevoJuego").css("box-shadow", "0px 0px");
    $("#nuevoJuego").css("margin-top", "3px");
    $("#nuevoJuego").css("margin-left", "3px");
    setTimeout(() => {
        $("#tablero").html("");
        generarTablero();
        console.log(arrTablero);
        document.cookie = "arrTablero=" + arrTablero;
        document.cookie = "paresRest=15";
        document.cookie = "paresEnc=0";
        document.cookie = "vidas=10";
        nuevoJuego();
        generarFichas();
        mostrarTablero();
        cambiarCabecera();
    }, 1000)

})
nuevoJuego();
generarFichas();
mostrarTablero();
cambiarCabecera();