import React, { useState } from "react";

export const Editar = ({
    pelicula,
    conseguirPeliculas,
    setEditar,
    setListadoState,
}) => {
    const [titulo, setTitulo] = useState(pelicula.titulo);
    const [descripcion, setDescripcion] = useState(pelicula.descripcion);

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        console.log("guardarEdicion", id);
        let target = e.target;
        console.log("target", target);
        // Buscar indice de la pelicula a actualizar
        const pelis_almacenadas = conseguirPeliculas();
        console.log("pelis_almacenadas", pelis_almacenadas);
        const indice = pelis_almacenadas.findIndex(
            (pelicula) => pelicula.id === id
        );

        console.log("indice", indice);

        let pelicula = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
        };
        console.log("pelicula", pelicula);
        pelis_almacenadas[indice] = pelicula;
        console.log("pelis_almacenadas", pelis_almacenadas);
        localStorage.setItem("peliculas", JSON.stringify(pelis_almacenadas));
        setListadoState(pelis_almacenadas);
        setEditar(0);
    };
    return (
        <div className="edit_form">
            <h3 className="title">Editar pelicula</h3>
            <form onSubmit={(e) => guardarEdicion(e, pelicula.id)}>
                <input
                    type="text"
                    name="titulo"
                    className="titulo_editado"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <textarea
                    name="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                ></textarea>
                <input type="submit" className="editar" value="Actualizar" />
            </form>
        </div>
    );
};
