const GuardarEnStorage = (key, element) => {
    let elementos = JSON.parse(localStorage.getItem(key));
    console.log("elemento xxßßs", elementos);
    if (Array.isArray(elementos)) {
        elementos.push(element);
        localStorage.setItem(key, JSON.stringify(elementos));
    } else {
        localStorage.setItem(key, JSON.stringify([element]));
    }
    return element;
    // localStorage.setItem("peliculas", JSON.stringify([pelicula]));
};

export default GuardarEnStorage;
