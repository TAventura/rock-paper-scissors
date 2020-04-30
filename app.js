let vector = ["piedra", "papel", "tijera"]
let puntajeTuyo = 0;
let puntajeMio = 0;

function empezar() {
    document.getElementById("seccion").style.display = "block";
    document.getElementById("btnEmpezar").style.display = "none";
}


//voy a hacer que las imagenes se oculten despues de dos segundos de haber sido mostradas con setTimeout()
function ocultar() {
    document.getElementById("imagenJugador").src= "";
    document.getElementById("imagenJugador").alt= "";
    document.getElementById("imagenPc").src= "";
    document.getElementById("imagenPc").alt= "";
}

function jugar(tuEleccion) {
    //tuEleccion es la del jugador, miEleccion es la de la máquina
    let miEleccion = Math.floor(Math.random() * vector.length);
    //elijo aleatoriamente uno de los 3 elementos del vector y lo redondeo hacia abajo con math.floor
    //console.log(vector[miEleccion]);

    document.getElementById("imagenPc").src="images/" + vector[miEleccion] + ".jpg";
    document.getElementById("imagenPc").alt=vector[miEleccion];

    document.getElementById("imagenJugador").src="images/" + tuEleccion + ".jpg";
    document.getElementById("imagenJugador").alt=tuEleccion;


    //COMPARACION DE RESULTADOS-----------------------------------------------
    if (tuEleccion === vector[miEleccion]) {
        document.getElementById("resultados").innerHTML = 
        `¡Es un Empate!!!<br>Resultados:<br>Vos: `+ puntajeTuyo +`pts vs Yo:`+ puntajeMio +`pts.`        
    } else {
        if (tuEleccion==="piedra") {
            if (vector[miEleccion] === "tijera") {
                puntajeTuyo = puntajeTuyo + 1;
                document.getElementById("resultados").innerHTML = 
                `¡Ganaste!!!<br>Resultados:<br>Vos: `+ puntajeTuyo +`pts vs Yo:`+ puntajeMio +`pts.`
                document.getElementById("resultados").style.color = "green";
            } else {
                puntajeMio = puntajeMio + 1;
                document.getElementById("resultados").innerHTML = 
                `Perdiste, qué sad :(<br>Resultados:<br>Vos: `+ puntajeTuyo +`pts vs Yo:`+ puntajeMio +`pts.`
                document.getElementById("resultados").style.color = "red";
            }
        }
    
        if (tuEleccion==="papel") {
            if (vector[miEleccion] === "piedra") {
                puntajeTuyo = puntajeTuyo + 1;
                document.getElementById("resultados").innerHTML = 
                `¡Ganaste!!!<br>Resultados:<br>Vos: `+ puntajeTuyo +`pts vs Yo:`+ puntajeMio +`pts.`
                document.getElementById("resultados").style.color = "green";
            } else {
                puntajeMio = puntajeMio + 1;
                document.getElementById("resultados").innerHTML = 
                `Perdiste, qué sad :(<br>Resultados:<br>Vos: `+ puntajeTuyo +`pts vs Yo:`+ puntajeMio +`pts.`
                document.getElementById("resultados").style.color = "red";
            }
        }
    
        if (tuEleccion==="tijera") {
            if (vector[miEleccion] === "papel") {
                puntajeTuyo = puntajeTuyo + 1;
                document.getElementById("resultados").innerHTML = 
                `¡Ganaste!!!<br>Resultados:<br>Vos: `+ puntajeTuyo +`pts vs Yo:`+ puntajeMio +`pts.`
                document.getElementById("resultados").style.color = "green";
            } else {
                puntajeMio = puntajeMio + 1;
                document.getElementById("resultados").innerHTML = 
                `Perdiste, qué sad :(<br>Resultados:<br>Vos: `+ puntajeTuyo +`pts vs Yo:`+ puntajeMio +`pts.`
                document.getElementById("resultados").style.color = "red";
            }
        }
    }
    setTimeout(ocultar, 2000); //llamammos a la funcion ocultar luego de dos segundos de haberse mostrado las imagenes
}
