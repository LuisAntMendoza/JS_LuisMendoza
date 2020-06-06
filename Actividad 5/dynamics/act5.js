let mensaje = prompt();
let regex1 = /<script>((.*(equisde).*){5,})<\/script>/;
let regex2 = /((<script>.*<\/script>)|(.*(equisde).*){5,})/;
let validacion = mensaje.search(regex1);
if(validacion>=0) {
    alert("Oso oso mentiroso, vete lejos antes de que te lanze mis calcetines olor a queso.");
}
else {
    let validacion2 = mensaje.search(regex2);
    if(validacion2 >= 0) {
        alert("¿Bob?\n ¿Wade?")
    }
}
