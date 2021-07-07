 let data = JSON.parse(localStorage.getItem("Trip"))

 

 $("#title").html(`<h5>${data.trip["cityOrigin"]} a ${data.trip["cityDest"]}</h5>`)

 $("#description").html(`<li>Número de pasajeros: ${data.trip["passengers"]}</li>
                        <li>Clase elegida: ${data.trip["classChosen"]}</li>
                        <li>Cantidad de días: ${data.days}</li>
                        `)

 $("#price").html(`<p>Precio final: ${data.price}</p>`)

 const URLJSON = "db/imagenes.json"

 $("#btn").click( () => {
 $.getJSON(URLJSON, function (respuesta, estado) {   console.log(respuesta)
    if(estado === "success") {
        let misdatos = respuesta;
        for (const dato of misdatos) {
            if (data.trip["cityDest"] == dato.id) {
            $("#color").prepend(`<div>
                                <img src="${dato.image}" width="700" height="400">
                                </div>`)    }
                                    }
                            }
                                                }
        )  
    }  
    )

    console.log(respuesta)
                                    