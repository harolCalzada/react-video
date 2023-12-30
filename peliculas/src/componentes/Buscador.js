import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
    const [busqueda, setBusquedaState] = useState("");
    const [noEncontrado, setNoEncontrado] = useState(false);
    const buscarPelicula = (e) => {
        console.log(busqueda);
        setBusquedaState(e.target.value);
        let peliculas_encontradas = listadoState.filter((pelicula) => {
            return pelicula.titulo
                .toLowerCase()
                .includes(busqueda.toLowerCase());
        });
        console.log("peliculas_encontradas", peliculas_encontradas);

        if (busqueda.length <= 1 || peliculas_encontradas.length <= 0) {
            peliculas_encontradas = JSON.parse(
                localStorage.getItem("peliculas")
            );
            setNoEncontrado(true);
        } else {
            setNoEncontrado(false);
        }

        setListadoState(peliculas_encontradas);
    };
    return (
        <div className="search">
            <h3 className="title"> Buscador : {busqueda}</h3>
            {noEncontrado == true && busqueda.length > 1 && (
                <span className="no-encontrado">
                    No se ha encontrado ninguna coincidencia
                </span>
            )}

            <form action="#" method="get">
                <input
                    type="text"
                    id="search"
                    name="busqueda"
                    placeholder="Buscar"
                    autoComplete="off"
                    onChange={buscarPelicula}
                ></input>
                <button> Buscar</button>
            </form>
        </div>
    );
};
