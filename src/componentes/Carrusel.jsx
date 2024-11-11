import React from "react";
import "../estilos/Carrusel.css";

const GameLibr = () => {
    const games = [
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
        <div className="game-library">
            <h2>Your Library</h2>
            <div className="game-grid">
                {games.map((game, index) => (
                    <div key={index} className="game-card">
                        <img src={game.imagen} alt={game.imagen} />
                        <div className="tittle">
                            {game.nombre}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
};

export default GameLibr;
