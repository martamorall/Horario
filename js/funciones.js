var profesor = document.getElementById("cNombre");
var asign = document.getElementById("cAsignatura");
var dia = document.getElementById("cDias");
var hora = document.getElementById("cHora");
var bGrabar = document.getElementById("bGrabar");
var td = document.querySelectorAll("td");

var fila = 1;
var columna = 1;
var horarioMap = new Map();

//Evento en el que al pulsar al botón grabar, se imprime la asignatura en la celda correspondiente según la hora y el dia
bGrabar.addEventListener("click", grabar, false);

function curso(profesor, asign, columna, fila) {
    this.profesor = profesor;
    this.asign = asign;
    this.columna = columna;
    this.fila = fila;
}

//Evento que guarda el valor del día seleccionado
dia.addEventListener("change", function () {
    var col = this.options[dia.selectedIndex];
    columna = col.value;
}, false);

//Evento que guarda el valor de la hora seleccionada
hora.addEventListener("change", function () {
    var fil = this.options[hora.selectedIndex];
    fila = fil.value;
}, false);

//Función que graba en la celda correspondiente el profesor y la asignatura que imparte
function grabar() {
    if ((profesor.value == "Fernando" && asign.value == "DWEC") || (profesor.value == "Marian" && asign.value == "DWES") || (profesor.value == "Daniel" && asign.value == "DES") || (profesor.value == "Ana Gloria" && asign.value == "DIW")) {
        var hProfAsign = new curso(profesor.value, asign.value, columna, fila);
        horarioMap.set("c" + fila + columna, hProfAsign);

        document.getElementById("c" + fila + columna).innerHTML = hProfAsign.asign;
        document.getElementById("c" + fila + columna).addEventListener("click", mostrarDatos, false);
    } else {
        alert("Has escrito mal el profesor o la asignatura");
    }
}

//Evento en el que al clicar sobre la celda donde se ha guardado la asignatura, muestra los datos correspondientes en los input y select
/*for (var i = 0; i < td.length; i++) {
    td[i].addEventListener("click", mostrarDatos, false);

}*/

//Función que muestra los datos de profesor, asignatura, día y hora cuando se clica sobre la celda donde previamente se ha grabado la asignatura
function mostrarDatos() {
    var key = this.id;
    var horarioCelda = horarioMap.get(key);
    if (horarioCelda.profesor != "" && horarioCelda.asign!="" && horarioCelda.fila!="" && horarioCelda.columna!="") {
        profesor.value = horarioCelda.profesor.charAt(0).toUpperCase() + horarioCelda.profesor.slice(1);
        asign.value = horarioCelda.asign.toUpperCase();
        hora.value = horarioCelda.fila;
        dia.value = horarioCelda.columna;
    }else{
        alert("Has hecho click en una celda vacía");
    }
}