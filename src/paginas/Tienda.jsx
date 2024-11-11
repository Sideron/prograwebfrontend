import React, { useState } from 'react';
import '../estilos/Tienda.css';

const productos = [
  { id: 1, nombre: "Call of Duty Black Ops III", precio: "S/. 217.00", categoria: ["Acción", "Multijugador"], calificacion: 4, imagen: "Call of Duty Black Ops III.png" },
  { id: 2, nombre: "Among Us", precio: "S/.4.99", categoria: ["Acción", "Multijugador"], calificacion: 3, imagen: "Among Us.png" },
  { id: 3, nombre: "DRAGON BALL Sparking ZERO", precio: "S/.49.99", categoria: ["Acción", "Aventura"], calificacion: 5, imagen: "DRAGON BALL Sparking ZERO.png" },
  { id: 4, nombre: "Goat Simulator", precio: "S/.9.99", categoria: ["Acción", "Aventura"], calificacion: 4, imagen: "Goat Simulator.png" },
  { id: 5, nombre: "HADES", precio: "S/.19.99", categoria: ["Acción", "RPG"], calificacion: 5, imagen: "HADES.png" },
  { id: 6, nombre: "Metro Exodus", precio: "S/.75.00", categoria: ["Acción", "Aventura", "Terror"], calificacion: 4, imagen: "Metro Exodus.png" },
  { id: 7, nombre: "Cyberpunk 2077", precio: "S/.59.99", categoria: ["Acción", "RPG"], calificacion: 4, imagen: "Cyberpunk 2077.png" },
  { id: 8, nombre: "ELDEN RING", precio: "S/.69.99", categoria: ["Acción", "Aventura", "RPG"], calificacion: 5, imagen: "ELDEN RING.png" },
  { id: 9, nombre: "God of War", precio: "S/.49.99", categoria: ["Acción", "Aventura"], calificacion: 5, imagen: "GOW.png" }
];

const Tienda = () => {
  const [filtroPrecio, setFiltroPrecio] = useState(100);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

  const manejarCambioCategoria = (categoria) => {
    setCategoriasSeleccionadas((prev) =>
      prev.includes(categoria)
        ? prev.filter((cat) => cat !== categoria)
        : [...prev, categoria]
    );
  };

  const productosFiltrados = productos.filter((producto) => 
    parseFloat(producto.precio.replace('S/.', '')) <= filtroPrecio &&
    (categoriasSeleccionadas.length === 0 || 
      producto.categoria.some((cat) => categoriasSeleccionadas.includes(cat)))
  );

  return (
    <div className="tienda-container">
      <div className="sidebar">
        <h4>Menos de S/.{filtroPrecio}</h4>
        <input
          type="range"
          min="0"
          max="300"
          value={filtroPrecio}
          onChange={(e) => setFiltroPrecio(e.target.value)}
        />
        <h4>Categoría</h4>
        <div className="categorias">
          {["Acción", "Aventura", "Terror", "Multijugador", "Puzzle", "RPG"].map((categoria) => (
            <div key={categoria}>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes(categoria)}
                onChange={() => manejarCambioCategoria(categoria)}
              />
              <label>{categoria}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="productos-grid">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img
              src={`${process.env.PUBLIC_URL}/${producto.imagen}`}
              alt={producto.nombre}
              className="producto-imagen"
            />
            <div className="producto-detalles">
              <h5>{producto.nombre}</h5>
              <div className="producto-calificacion">
                {"★".repeat(producto.calificacion)}{"☆".repeat(5 - producto.calificacion)}
              </div>
              <p>{producto.categoria.join("  ")}</p>
            </div>
            <div className="producto-precio">
              <h5>{producto.precio}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tienda;
