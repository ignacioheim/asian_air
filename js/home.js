// CLASE TRIP

class Trip {
    constructor (cityOrigin, cityDest, dateBeg, dateFin, passengers, classChosen) {
        this.cityOrigin = cityOrigin;
        this.cityDest = cityDest;
        this.dateBeg = dateBeg;
        this.dateFin = dateFin;
        this.passengers = passengers;
        this.classChosen = classChosen;

    }
    discountRate() {
        if (this.passengers == 1) {
            this.discount = 1;
        }
        else if (this.passengers == 2) {
            this.discount = 0.95;
        }
        else if (this.passengers == 3) {
            this.discount = 0.90;
        } 
        else if (this.passengers == 4) {
            this.discount = 0.85
        }
    }
    claseType() {
        if (this.classChosen == "economica") {
            this.amount = 1 
        } 
        else if (this.classChosen == "ejecutiva") {
            this.amount = 1.2
        } 
        else if (this.classChosen == "primera") {
            this.amount = 1.3
        }
    }
 

    priceAir() {
        switch (this.cityDest) {
            case "Tokio":
              return Intl.NumberFormat().format(((this.passengers * 32000) * this.discount) * this.amount);
              break; // APLICO Intl.NumberFormat().format() para mostrar decimales
            case "Shangai":
               return Intl.NumberFormat().format(((this.passengers * 40000) * this.discount) * this.amount);
               break; // APLICO Intl.NumberFormat().format() para mostrar decimales
            case "Hong Kong":
               return Intl.NumberFormat().format(((this.passengers * 45000) * this.discount) * this.amount);
               break; // APLICO Intl.NumberFormat().format() para mostrar decimales
            case "Singapur":
               return Intl.NumberFormat().format(((this.passengers * 50000) * this.discount) * this.amount);
               break; // APLICO Intl.NumberFormat().format() para mostrar decimales
          }
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

$(document).ready(function(){
    $("#clean").mouseover(function(){
        $("#clean").css("background-color", "red");
    });
    $("#clean").mouseout(function(){
        $("#clean").css("background-color", "#fa503f")
    })
}) 

// FORMULARIO DE INGRESO DE VIAJE

let miFormulario = document.getElementById("formulario")

miFormulario.addEventListener("submit", validarFormulario)

function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target
    let cityOri = formulario.children[0].value;
    let cityChoosenOri = cityOri.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    let cityDes = formulario.children[1].value;
    let cityChoosenDes = cityDes.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    let dateBeg = formulario.children[2].value;
    let dateFIn = formulario.children[3].value;
    let passengers = formulario.children[4].value;
    let classChosen = document.getElementById("class").value;

    const tripOne = new Trip(cityChoosenOri, cityChoosenDes, dateBeg, dateFIn, passengers,classChosen);

    tripOne.discountRate();
    tripOne.claseType();   

    const enJSON = JSON.stringify({ trip: tripOne,
                                    discount: tripOne.discountRate(),
                                    price: tripOne.priceAir(),
                                    days: tripOne.cantidadDias()
                                });

    localStorage.setItem("Trip", enJSON);

    //console.log(tripOne) 
    $(".col-12").html(`
                    <h2>${tripOne.cityOrigin} a ${tripOne.cityDest}</h2>`)

    $("#col1").html(`<h5>Fecha de ida</h5>
                    <p>${tripOne.dateBeg}</p>
                    `) 
    $("#col2").html(`                   
                    <h5>Fecha de vuelta</h5>
                    <p>${tripOne.dateFin}</p>
                    `) 
    $("#col3").html( `
                    <h5>Pasajeros</h5>
                    <p>${tripOne.passengers}</p>
                    `)      
    $("#col4").html( `
                    <h5>Precio</h5>
                    <p>${tripOne.priceAir()}</p>
                    `)                                   
    $("#col5").html( `
                    <button id="btn1">Reservar</button>
                    `);                  
    document.getElementById("btn1").onclick = function () {
                location.href = "./buy.html";
                    };     
    $(".container").show()                                               
}
                $("#clean").click(function(){
                    $(".container").fadeOut(1000);
                            }); 