import React, { useEffect, useState } from "react";
import { Editar } from "./Editar.js";

export const Listado = ({ listadoState, setListadoState }) => {
    const [editar, setEditar] = useState(0);

    useEffect(() => {
        console.log("useEffect");
        console.log("peliculas", conseguirPeliculas());
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("peliculas"));
        console.log("peliculas", peliculas);
        setListadoState(peliculas);
        return peliculas;
    };
    const borrarPelicula = (id) => {
        console.log("borrarPelicula", id);
        let peliculas_almacenadas = conseguirPeliculas();
        console.log("peliculas_almacenadas", peliculas_almacenadas);
        let nuevo_array_peliculas = peliculas_almacenadas.filter(
            (pelicula) => pelicula.id !== id
        );
        console.log("nuevo_array_peliculas", nuevo_array_peliculas);
        setListadoState(nuevo_array_peliculas);
        // localStorage.setItem(
        //     "peliculas",
        //     JSON.stringify(nuevo_array_peliculas)
        // );
        localStorage.setItem(
            "peliculas",
            JSON.stringify(nuevo_array_peliculas)
        );
    };

    return (
        <>
            {listadoState != null ? (
                listadoState.map((pelicula) => {
                    return (
                        <article key={pelicula.id} className="peli-item">
                            <h3 className="title">{pelicula.titulo}</h3>
                            <p className="description">
                                {pelicula.descripcion}
                            </p>
                            <button
                                className="edit"
                                onClick={() => setEditar(pelicula.id)}
                            >
                                Editar
                            </button>
                            <button
                                className="delete"
                                onClick={() => borrarPelicula(pelicula.id)}
                            >
                                Delete
                            </button>

                            {/* aparecer formulario de editar */}
                            {editar === pelicula.id && (
                                <Editar
                                    pelicula={pelicula}
                                    conseguirPeliculas={conseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}
                                />
                            )}
                        </article>
                    );
                })
            ) : (
                <h2>No hay peliculas</h2>
            )}
        </>
    );
};
