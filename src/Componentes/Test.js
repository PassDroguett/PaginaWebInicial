import React from "react";
import '../Estilo/Test.css';

function Test (props){
    return(
        <div className="contenedorIM">
            <img className="imagentest"
            src={require(`../Imagenes/esperando-${props.imagen}.gif`)}
            alt="LogoTest"/>
            {/* <div className="espacio">              </div> */}

            <div className="ContenedorTexto">
                <p className="Nombre"> <strong> {props.nombre} </strong>  en {props.lugar}</p>
                <p className="Cargo"> Contiene Cargo En : {props.cargo}</p>
                <p className="TextoCompleto">   esta es una app de prueba                                             {props.testimonio}</p>
                
                
            </div>
            
        </div>
        
        
    );
}

export default Test;