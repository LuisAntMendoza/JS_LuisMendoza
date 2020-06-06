//recibimos el mensaje a validar
let mensaje = prompt();
//regex para buscar
let regex1 = /<script>((.*(equisde).*){5,})<\/script>/;
let regex2 = /((<script>.*<\/script>)|(.*(equisde).*){5,})/;
let validacion = mensaje.search(regex1);
//si es el malo
if(validacion>=0) {
    //muestra el mensaje
    alert("Oso oso mentiroso, vete lejos antes de que te lanze mis calcetines olor a queso.");
}
//si no
else {
    let validacion2 = mensaje.search(regex2);
    //si es un aliado
    if(validacion2 >= 0) {
        //muestra el mensaje
        alert("¿Bob?\n ¿Wade?")
    }
}
