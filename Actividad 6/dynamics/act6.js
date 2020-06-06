//obtenemos body
let body = document.getElementsByTagName("body")[0];
//creamos nuestro contenedor
let contenedor = document.createElement("div");
//creamos nuestros elementos
let grande = document.createElement("h1");
let cursoWeb = document.createElement("h3");
let mediano = document.createElement("h3");
let italicas = document.createElement("i");
let jelou = document.createElement("h4");
let chiquito = document.createElement("h4");
//les asignamos clases a los elementos
contenedor.classList.add("contenedor");
grande.classList.add("azul");
mediano.classList.add("azul");
jelou.classList.add("rojo");
//les ponemos texto a los elementos
grande.innerText = "Soy el más grande...";
cursoWeb.innerText = "Curso Web 2020";
italicas.innerText = "Mediano";
jelou.innerText = "Jelou";
chiquito.innerText = "Estoy medio chiquito :(";
//agregamos el contenedor a body
body.appendChild(contenedor);
//agregamos las italicas al h3
mediano.appendChild(italicas);
//agregamos todo al contenedor
contenedor.prepend(grande, cursoWeb, mediano, jelou, chiquito);
