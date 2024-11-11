import React from "react";
const MiComponente = () =>{
    const nombre="Mynor Escobar";
    const direccion="Zona 5";
    const telefono="12345";
    console.log(nombre);
    let datosJson = {
        nombre: "Inventado",
        direccion: "zona 3",
    }
    
    return (
        //debo retornar un contenedor para colocar varias etiquetas html
        <div>
            <h1>Ejemplo No. 1 de react</h1>
            <p>
                Nombre: {nombre}
                <br></br>
                Dirección: {direccion}        
            </p> 
            <h2>Datos de JSON</h2>
            <ul>
                <li>Nombre: <strong>{datosJson.nombre}</strong></li>
                <li>Direccion: <strong>{datosJson.direccion}</strong></li>

                <li>Objeto: {JSON.stringify(datosJson)}</li>
            </ul>
        </div>
        
    )
}
export default MiComponente;