

//function encender() {
//document.getElementById('bombilla').src = "imagenes/bombilla-on.gif";
//}
//}
console.log("hola");
let imgBombilla;
imgBombilla = document.getElementById("bombilla");
imgBombilla.addEventListener("mouseover", encender, false);
imgBombilla.addEventListener("mouseout", apagar, false);
alert("hola");
function encender() {
    imgBombilla.src = "imagenes/bombilla-on.gif";
}

function apagar() {
    imgBombilla.src = "imagenes/bombilla-off.gif";
}

   