let operacion = "no";

let numero1 = 0;

let numero2 = 0;

let proceso = "no"

let miLabel = document.getElementById('pantalla');

//parte 1

function calcularVelocidad() {
    var distanciaEnKm = parseFloat(document.getElementById('distancia').value);

    var tiempoEnMinutos = parseFloat(document.getElementById('tiempo').value);

    var velocidadEnMetrosPorSegundo = (distanciaEnKm * 1000) / (tiempoEnMinutos * 60);

    document.getElementById('resultado').innerHTML = "La velocidad es: " + velocidadEnMetrosPorSegundo.toFixed(2) + " m/s";
}

//parte 2
function clasificarTriangulo() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 === lado2 && lado2 === lado3) {
        document.getElementById('resultadoTriangulo').innerHTML = "El triángulo es equilátero.";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        document.getElementById('resultadoTriangulo').innerHTML = "El triángulo es isósceles.";
    } else {
        document.getElementById('resultadoTriangulo').innerHTML = "El triángulo es escaleno.";
    }
}



//calculadora
function boton1(){
    miLabel.textContent += '1';
}

function boton2(){
    miLabel.textContent += '2';
}

function boton3(){
    miLabel.textContent += '3';
}

function boton4(){
    miLabel.textContent += '4';
}

function boton5(){
    miLabel.textContent += '5';
}

function boton6(){
    miLabel.textContent += '6';
}

function boton7(){
    miLabel.textContent += '7';
}

function boton8(){
    miLabel.textContent += '8';
}

function boton9(){
    miLabel.textContent += '9';
}

function boton0(){
    miLabel.textContent += '0';
}

function suma(){
    operacion = "+";
    if(proceso == "no"){
        numero1 = Number(miLabel.textContent);
        miLabel.textContent = "";
        console.log("el numero: " + Number(numero1) +" Fue guardado correctamente");
        console.log(operacion);
        proceso = "si";
        }
        console.log("proceso actual: " + operacion);
   
}

function resta(){
    operacion = "-";
    if(proceso == "no"){
        numero1 = Number(miLabel.textContent);
        miLabel.textContent = "";
        console.log("el numero: " + Number(numero1) +" Fue guardado correctamente");
        console.log(operacion);
        proceso = "si";
        }
        console.log("proceso actual: " + operacion);
  
}

function divi(){
    operacion = "/";
    if(proceso == "no"){
        numero1 = Number(miLabel.textContent);
        miLabel.textContent = "";
        console.log("el numero: " + Number(numero1) +" Fue guardado correctamente");
        console.log(operacion);
        proceso = "si";
        }
        console.log("proceso actual: " + operacion);
    
}

function multi(){
    operacion = "*";
    if(proceso == "no"){
    numero1 = Number(miLabel.textContent);
    miLabel.textContent = "";
    console.log("el numero: " + Number(numero1) +" Fue guardado correctamente");
    console.log(operacion);
    proceso = "si";
    }
    console.log("proceso actual: " + operacion);
}


function borrar(){
    var contenidoActual = miLabel.textContent;

    var nuevoContenido = contenidoActual.slice(0, -1);

    miLabel.textContent = nuevoContenido;
}

function igual(){
    numero2 = Number(miLabel.textContent);
    switch (operacion){
        case "*":
            miLabel.textContent = numero1 * numero2;
            break;

        case "-":
            miLabel.textContent = numero1 - numero2;
            break;

        case "+":
            miLabel.textContent = numero1 + numero2;
            break;

        case "/":
            miLabel.textContent = numero1 / numero2;
            break;

    }
    operacion = "no"
    proceso = "no"
}

//parte 4

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function verificarPrimo() {
    var numero = parseInt(document.getElementById('numeroInput').value);

    if (isNaN(numero)) {
        alert("ingrese un número válido.");
    } else {
        var resultado = esPrimo(numero) ? "Es primo." : "No es primo.";
        alert(resultado);
    }
}