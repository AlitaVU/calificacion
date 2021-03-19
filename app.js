/*var buttonCapturar = document.getElementById("btnCapturar");*/

/*BANDERAS*/
var capturar = false;

/*VARIABLES GLOBALES*/
var alumnos = [];
var calificaciones = [];




/*ELEMENTOS*/

var buttonLimpiar = document.getElementById("btnLimpiar");
var buttonGuardar = document.getElementById("btnGuardar");

var infoBox = document.getElementById("info");

var txtNombre = document.getElementById("Nombre");
var txtCalificacion = document.getElementById("Calificacion");

var tableBody = document.getElementById("data");


/*EVENTOS GLOBALES*/
var buttonCapturar = document.getElementById("btnCapturar");
buttonCapturar.addEventListener("click", function() {
    capturar = !capturar;
    capturaInformacion();

});

/*function test() {
    alert("Funciona");

}
*/



/*FUNCIONES*/
function capturaInformacion() {
    /*VARIABLE AUXILIAR*/
    var posicion = 0;
    var tableData = "";

    if (capturar) {
        infoBox.classList.remove("d-none");
        infoBox.classList.add("d-block");
        buttonCapturar.classList.remove("btn-outline-primary");
        buttonCapturar.classList.add("btn-outline-danger");
        buttonCapturar.innerHTML = "Dejar de capturar";

    } else if (!capturar) {

        infoBox.classList.remove("d-block");
        infoBox.classList.add("d-none");
        buttonCapturar.classList.remove("btn-outline-danger");
        buttonCapturar.classList.add("btn-outline-primary");
        buttonCapturar.innerHTML = "Capturar";
    }

    buttonLimpiar.addEventListener("click", function() {
        txtNombre.value = ' ';
        txtCalificacion.value = ' ';
    });

    buttonGuardar.addEventListener("click", function() {


        alumnos[posicion] = txtNombre.value;
        calificaciones[posicion] = txtCalificacion.value;


        if (textCalificacion.value > 5) {
            tableData += `
        
    <tr>
    <td>${posicion +1}</td>
    <td>${alumnos[posicion]}</td>
    <td>${calificaciones[posicion]}</td>
    <td class="bg-danger">Reprobado</td>
    <tr>
    `;
        }
        if (textCalificacion.value > 6) {
            tableData += `
        
    <tr>
    <td>${posicion +1}</td>
    <td>${alumnos[posicion]}</td>
    <td>${calificaciones[posicion]}</td>
    <td class="bg-warning">Aprobado</td>
    <tr>
    `;
        }
        if (textCalificacion.value > 8) {
            tableData += `
        
    <tr>
    <td>${posicion +1}</td>
    <td>${alumnos[posicion]}</td>
    <td>${calificaciones[posicion]}</td>
    <td class="bg-success">Sobresaliente</td>
    <tr>
    `;
        }

        tableBody.innerHTML = tableData;

        txtNombre.value = '';
        txtCalificacion = '';
        posicion++;
        console.log(alumnos);
        console.log(calificaciones);

        /** (+=)el contenido que ya tiene mas el nnuevo  
        tableBody.innerHTML += tableData*/


    });


}



/*$(document).ready(function() {


    calif();




});

function calif() {
    var opcion = 0;
    var b = "si";
    var c;
    do {
        opcion = Number(prompt("1.Ingrese un numero"))
        switch (opcion) {
            case 1:
                console.log("reprobado");
                break;

            case 2:
                console.log("reprobado");
                break;

            case 3:
                console.log("reprobado");
                break;

            case 4:
                console.log("reprobado");
                break;

            case 5:
                console.log("reprobado");
                break;
            case 6:
                console.log("normal");
                break;
            case 7:
                console.log("normal");
                break;
            case 8:
                console.log("normal");
                break;

            case 9:
                console.log("exelnete");
                break;

            case 10:
                console.log("exelnete");
                break;


        }

        opcion = (prompt("2. Ingrese otro numero"))
    }
    while (b == "si") {

    }



}*/