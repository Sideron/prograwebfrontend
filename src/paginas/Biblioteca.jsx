import React from "react";
import GameLibr from "../componentes/GameLibr"
import Carrusel from "../componentes/Carrusel"
import "../estilos/Biblioteca.css"

const Biblioteca = () => {
    const productos = [
        { id: 1, nombre: "Call of Duty Black Ops III", precio: "S/. 217.00", categoria: ["Acción", "Multijugador"], calificacion: 4, imagen: "Call of Duty Black Ops III.png" },
        { id: 2, nombre: "Among Us", precio: "S/.11.59", categoria: ["Acción", "Multijugador"], calificacion: 3, imagen: "Among Us.png" },
        { id: 3, nombre: "DRAGON BALL Sparking ZERO", precio: "S/.207.50", categoria: ["Acción", "Aventura"], calificacion: 5, imagen: "DRAGON BALL Sparking ZERO.png" },
        { id: 4, nombre: "Goat Simulator", precio: "S/.23.00", categoria: ["Acción", "Aventura"], calificacion: 4, imagen: "Goat Simulator.png" },
        { id: 5, nombre: "HADES", precio: "S/.53.00", categoria: ["Acción", "RPG"], calificacion: 5, imagen: "HADES.png" },
        { id: 6, nombre: "Metro Exodus", precio: "S/.75.00", categoria: ["Acción", "Aventura", "Terror"], calificacion: 4, imagen: "Metro Exodus.png" },
        { id: 7, nombre: "Cyberpunk 2077", precio: "S/.199.00", categoria: ["Acción", "RPG"], calificacion: 4, imagen: "Cyberpunk 2077.png" },
        { id: 8, nombre: "ELDEN RING", precio: "S/.172.50", categoria: ["Acción", "Aventura", "RPG"], calificacion: 5, imagen: "ELDEN RING.png" },
        { id: 9, nombre: "God of War", precio: "S/.199.99", categoria: ["Acción", "Aventura"], calificacion: 5, imagen: "GOW.png" }
    ];

    return <>
    <div className="main-container">
        <div className="carrusel-section">
            <Carrusel/>
        </div>
        <div className="library-section">
            <GameLibr/>
        </div>
    </div>
        </>
}

export default Biblioteca
