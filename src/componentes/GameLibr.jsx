import React from "react";
import "../estilos/GameLibr.css";

const GameLibr = () => {
  const games = [
    { title: "Game A", genre: "Action", image: "gameA.jpg" },
    { title: "Game B", genre: "Adventure", image: "gameB.jpg" },
    { title: "Game C", genre: "RPG", image: "gameC.jpg" },
  ];

  return (
    <div className="game-library">
      <h2>Your Library</h2>
      <div className="game-grid">
        {games.map((game, index) => (
          <div key={index} className="game-card">
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameLibr;
