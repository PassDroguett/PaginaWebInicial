import React from "react";
import '../Estilo/Test.css';

function Test (props){
    return(
        <div className="contenedorIM">
            <img className="imagentest"
            src={require('../Imagenes/luluwpp.gif')}
            alt="LogoTest"/>

            <div className="ContenedorTexto">
                <p className="Nombre"> {props.nombre}  en {props.lugar}</p>
                <p className="Cargo">{props.cargo} en Elemento hhhhhhhhhggg hggggggggj</p>
                <p className="TextoCompleto">{props.testimonio}</p>
                <button>Boton</button>
            </div>
        </div>
    );
}

export default Test;