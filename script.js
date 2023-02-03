//funcion que le da el estilo a la opcion seleccionada en el menu y saca la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Desaparece el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//funcion que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";        
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function() {
    efectoHabilidades()
};

//Animacion de la barra de habilidades
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("ps").classList.add("barra-progreso3");
        document.getElementById("illus").classList.add("barra-progreso4");
        document.getElementById("pr").classList.add("barra-progreso5");
        document.getElementById("af").classList.add("barra-progreso6");
        document.getElementById("fig").classList.add("barra-progreso7");
    }
}
