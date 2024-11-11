import React from "react";
export const EventosComponentes = () =>{
    const hasDadoClick=(e)=>{
        alert("has dado un clic en boton2");
    } 
    const hasDadoDobleClick=(e)=>{
        alert("has dado doble click");
    }
    const entrar=(e)=>{
        console.log("has entrado");
    }
    const salir=(e)=>{
        console.log("has salido");
    }
    return (     
        <div>
            <h1>Eventos en react</h1>
            <button onClick={() =>{
                console.log("hola a todos");
            }}>
                da un clic aquí
            </button>
            <button onClick={hasDadoClick}>Boton 2</button>
            <button onDoubleClick={hasDadoDobleClick}>Doble click</button>
            <div id="caja" onMouseEnter={entrar} onMouseLeave={salir}>
                pasa por encima
            </div>
        </div>
    )

};