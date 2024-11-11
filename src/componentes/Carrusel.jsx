import React from "react";
import "../estilos/Carrusel.css";

const Carrusel = () => {
  const featuredGames = [
    { title: "Game 1", image: "image1.jpg" },
    { title: "Game 2", image: "image2.jpg" },
    { title: "Game 3", image: "image3.jpg" },
  ];

  return (
    <div className="carousel">
      {featuredGames.map((game, index) => (
        <div key={index} className="carousel-item">
          <img src={game.image} alt={game.title} />
          <h2>{game.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Carrusel;
