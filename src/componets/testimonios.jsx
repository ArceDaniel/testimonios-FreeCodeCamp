import React from "react";
import '../styles/testimonio.css'

export function Testimonio(props){
  return (
    <div className="contenedor-testimonio" key={props.obj.id}>
      <img className="imagen-testimonio"
        src={require(`../img/testimonio-${props.obj.imagen}.png`)}
        alt={`imagen de ${props.obj.nombre}`} />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"><strong>{props.obj.nombre}</strong> en {props.obj.pais}</p>
          <p className="cargo-testimonio">{props.obj.cargo} en <strong>{props.obj.empresa}</strong></p>
          <p className="texto-testimonio">"{props.obj.testimonio}"</p>
        </div>
    </div>
  )
}
