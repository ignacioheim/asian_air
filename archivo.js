// CLASE TRIP

class Trip {
    constructor (cityOrigin, cityDest, dateBeg, dateFin, passengers) {
        this.cityOrigin = cityOrigin;
        this.cityDest = cityDest;
        this.dateBeg = dateBeg;
        this.dateFin = dateFin;
        this.passengers = passengers;
    }
    cantidadDias(){
        if(this.dateBeg > this.dateFin){
            alert("Elige una fecha correcta.")
        } else {
            let dateOne = new Date(this.dateBeg);
            let dateTwo = new Date(this.dateFin);
            let differenceInTimes = dateTwo.getTime() - dateOne.getTime();
            let differenceInDays = differenceInTimes / (1000 * 3600 * 24);
            return differenceInDays;
        }
    }
}


// FUNCIÓN PARA DESACTIVAR DIAS ANTERIORES A HOY EN INPUT DE FECHA-INICIO
$(document).ready (function () {
$(function(){
    let dtToday = new Date();
    
    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    let year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    let maxDate = year + '-' + month + '-' + day;
    $('#dateIni').attr('min', maxDate);
    })
});

// FUNCIÓN PARA CAMBIAR EL COLOR DE FONDO DEL BOTÓN BUSCAR
$(document).ready(function(){
    $("#btn-1").mouseover(function(){
        $("#btn-1").css("background-color", "red");
    });
    $("#btn-1").mouseout(function(){
        $("#btn-1").css("background-color", "#fa503f")
    })
}) 


// FORMULARIO DE INGRESO DE VIAJE
let miFormulario = document.getElementById("formulario")

miFormulario.addEventListener("submit", validarFormulario)

function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target
    let cityOri = formulario.children[0].value;
    let cityDes = formulario.children[1].value;
    let dateBeg = formulario.children[2].value;
    let dateFIn = formulario.children[3].value;
    let passengers = formulario.children[4].value;

    const tripOne = new Trip(cityOri, cityDes, dateBeg, dateFIn, passengers);

    //console.log(tripOne)
    $("#section").append(`
                    <p>${tripOne.cityOrigin}</p>
                    <p>${tripOne.cityDest}</p>                    
                    <p>${tripOne.dateBeg}</p>
                    <p>${tripOne.dateFin}</p>
                    <p>${tripOne.passengers}</p>
                    `)
                      

}

