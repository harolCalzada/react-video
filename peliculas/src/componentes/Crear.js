import React, { useState } from "react";
import GuardarEnStorage from "../helpers/GuardarEnStorage";

export const Crear = ({ setListadoState }) => {
    const tituloComponente = "Anadir peliculas";
    const [peliculaState, setPeliculaState] = useState({
        titulo: "",
        descripcion: "",
    });
    const { titulo, descripcion } = peliculaState;

    const conseguirDatosForm = (e) => {
        e.preventDefault();
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        console.log(titulo, descripcion);
        let pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion,
        };
        console.log(pelicula);
        // setPeliculaState(pelicula);
        setListadoState((listadoState) => [...listadoState, pelicula]);
        console.log("peliculaState", peliculaState);
        GuardarEnStorage("peliculas", pelicula);
    };

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
                {" "}
                {titulo && descripcion && "has creado la pelicula: " + titulo}
            </strong>
            <form onSubmit={conseguirDatosForm}>
                <input
                    id="titulo"
                    type="text"
                    placeholder="titulo"
                    name="titulo"
                />
                <textarea
                    id="descripcion"
                    placeholder="descripcion"
                    name="descripcion"
                />
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    );
};
