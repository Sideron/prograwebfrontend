import React, { useEffect, useState } from 'react';
import '../estilos/Tienda.css';

/*const productos = [
    { id: 1, nombre: "Call of Duty Black Ops III", precio: "S/. 217.00", categorias: ["Acción", "Multijugador"], calificacion: 4, imagen: "https://store-images.s-microsoft.com/image/apps.552.66777443557046310.abf0f423-a960-4f91-982f-7c0e898cf325.a2d1f0d5-3fa3-4494-a092-dab2e95ec3ee?q=90&w=177&h=265" },
    { id: 2, nombre: "Among Us", precio: "S/.11.59", categorias: ["Acción", "Multijugador"], calificacion: 3, imagen: "Among Us.png" },
    { id: 3, nombre: "DRAGON BALL Sparking ZERO", precio: "S/.207.50", categorias: ["Acción", "Aventura", "Multijugador"], calificacion: 5, imagen: "DRAGON BALL Sparking ZERO.png" },
    { id: 4, nombre: "Goat Simulator", precio: "S/.23.00", categorias: ["Acción", "Aventura"], calificacion: 4, imagen: "Goat Simulator.png" },
    { id: 5, nombre: "HADES", precio: "S/.53.00", categorias: ["Acción", "RPG"], calificacion: 5, imagen: "HADES.png" },
    { id: 6, nombre: "Metro Exodus", precio: "S/.75.00", categorias: ["Acción", "Aventura", "Terror"], calificacion: 4, imagen: "Metro Exodus.png" },
    { id: 7, nombre: "Cyberpunk 2077", precio: "S/.199.00", categorias: ["Acción", "RPG"], calificacion: 4, imagen: "Cyberpunk 2077.png" },
    { id: 8, nombre: "ELDEN RING", precio: "S/.172.50", categorias: ["Acción", "Aventura", "RPG"], calificacion: 5, imagen: "ELDEN RING.png" },
    { id: 9, nombre: "God of War", precio: "S/.199.99", categorias: ["Acción", "Aventura"], calificacion: 5, imagen: "GOW.png" }
];*/

const Tienda = () => {
    const [filtroPrecio, setFiltroPrecio] = useState(100);
    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [productos, setProductos] = useState([])

    const manejarCambioCategoria = (categoria) => {
        setCategoriasSeleccionadas((prev) =>
            prev.includes(categoria)
                ? prev.filter((cat) => cat !== categoria)
                : [...prev, categoria]
        );
    };

    useEffect(() => {
        const fetchearJuegos = async () => {
            try {
                const fprod = await fetch('http://localhost:3001/juegos',{
                    method: 'GET'
                })
                const result = await fprod.json()
                result.forEach(element => {
                    productos.push(element)
                });
                console.log(productos)
            } catch (error) {
                console.log(error)
            }
            
        }
        fetchearJuegos()
    }, [])

    /*useEffect(() => {
        console.log(productos);
    }, [productos]);*/


    // Filtra productos por precio y categoría
    const productosFiltrados = productos.filter((producto) => {
        return (parseFloat(producto.precio_actual.replace('S/.', '')) <= filtroPrecio)
                    && 
                    (categoriasSeleccionadas.length === 0 
                        || 
                        producto.generos.some((cat) => {
                            return categoriasSeleccionadas.includes(cat.nombre)
                        })
                    )
    });

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => [...prevCarrito, producto]);
    };

    return <>
        <div className="container">
            <div className='row'>
            <div className="col-3">
                <h4>Menos de S/.{filtroPrecio}</h4>
                <input type="range" min="0" max="300" value={filtroPrecio}
                    onChange={(e) => setFiltroPrecio(e.target.value)} />


                <h4>Categoría</h4>
                <div className="categorias">
                    {["Acción", "Aventura", "Free to Play", "Multijugador", "Casual", "Rol"].map((categoria) => (
                        <div key={categoria}>
                            <input type="checkbox"
                                checked={categoriasSeleccionadas.includes(categoria)}
                                onChange={() => manejarCambioCategoria(categoria)} />
                            <label>{categoria}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="col-9">
                <div className='productos-grid'>
                {productosFiltrados.map((producto) => (
                    <div key={producto.id} className="producto-card">
                        <img src={producto.imagen_url}
                            alt={producto.nombre} className="producto-imagen" />

                        <div className="producto-detalles">
                            <a href={`juego#${producto.id}`}>{producto.nombre}</a>
                            {/*<div className="producto-calificacion">
                                {"★".repeat(producto.calificacion)}{"☆".repeat(5 - producto.calificacion)}
                            </div>*/}
                            <p>{producto.generos.map((x) => {return x.nombre}).join("  ")}</p>
                        </div>

                        <div className="producto-precio">
                            <h5>{producto.precio_actual}</h5>
                            <button className="agregar-carrito-btn" onClick={() => agregarAlCarrito(producto)}>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
    </>
};

export default Tienda;
