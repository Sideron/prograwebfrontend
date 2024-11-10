import React, { useState } from 'react';
import '../estilos/Tienda.css';

const productos = [
  { id: 1, nombre: "Cyberpunk 2077", precio: 59.99, categoria: ["Acción", "RPG"], calificacion: 4, imagen: "/Cyberpunk 2077.png" },
  { id: 2, nombre: "ELDEN RING", precio: 69.99, categoria: ["Acción", "Aventura", "RPG"], calificacion: 5, imagen: "/ELDEN RING.png" },
  { id: 3, nombre: "God of War", precio: 49.99, categoria: ["Acción", "Aventura"], calificacion: 5, imagen: "/GOW.png" },
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

  const productosFiltrados = productos.filter((producto) => producto.precio <= filtroPrecio);

  return (
    <div className="tienda-container">
      <div className="sidebar">
        <h4>Precio</h4>
        <input
          type="range"
          min="0"
          max="100"
          value={filtroPrecio}
          onChange={(e) => setFiltroPrecio(Number(e.target.value))}
        />
        <p>${filtroPrecio}</p>

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

      <div className="productos">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <div key={producto.id} className="producto-card">
              <div className="producto-imagen">
                <img src={producto.imagen} alt={producto.nombre} />
              </div>
              <div className="producto-detalles">
                <h5>{producto.nombre}</h5>
                <div className="producto-calificacion">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`star ${i < producto.calificacion ? "filled" : ""}`}>★</span>
                  ))}
                </div>
                <p>{producto.categoria.join("  ")}</p>
              </div>
              <div className="producto-precio">
                <h5>${producto.precio.toFixed(2)}</h5>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles para el precio seleccionado.</p>
        )}
      </div>
    </div>
  );
};

export default Tienda;
