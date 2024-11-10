import React from 'react';
import '../estilos/Comunidad.css'; 

const Comunidad = () => {
    const juegosRecientes = [
        { nombre: 'Elden Ring', tipo: 'Guía', cantidad: 25, categoria: 'Guía(s)', semana: 'esta semana', img: '/ELDEN RING.png' },
        { nombre: 'Cyberpunk 2077', tipo: 'Arte de Workshop', cantidad: 14, categoria: 'Arte', semana: 'esta semana', img: '/Cyberpunk 2077.png' },
        { nombre: 'Hades', tipo: 'Captura', cantidad: 8, categoria: 'Captura(s)', semana: 'esta semana', img: '/HADES.png' },
        { nombre: 'God of War', tipo: 'Video', cantidad: 12, categoria: 'Video(s)', semana: 'esta semana', img: '/GOW.png' },
    ];

    const guiasPopulares = [
        { nombre: 'Elden Ring', titulo: 'Cómo derrotar a los jefes principales', valoraciones: 1023, comentarios: 34, img: '/ELDEN RING.png' },
        { nombre: 'Cyberpunk 2077', titulo: 'Guía de mejoras y mods', valoraciones: 854, comentarios: 27, img: '/Cyberpunk 2077.png' },
        { nombre: 'Hades', titulo: 'Estrategias para cada arma', valoraciones: 645, comentarios: 19, img: '/HADES.png' },
        { nombre: 'God of War', titulo: 'Secretos y estrategias', valoraciones: 512, comentarios: 22, img: '/GOW.png' },
    ];

    return (
        <div className="comunidad-container">
            <h2 className="comunidad-titulo">Actividad de la Comunidad</h2>
            <p className="comunidad-subtitulo">Contenido de la comunidad sobre juegos populares.</p>

            <div className="seccion-recientes">
                <h3>Vistos Recientemente</h3>
                <div className="recientes-grid">
                    {juegosRecientes.map((juego, index) => (
                        <div key={index} className="juego-card">
                            <img src={juego.img} alt={juego.nombre} className="juego-imagen" />
                            <div className="juego-info">
                                <strong>{juego.nombre}</strong>
                                <p>{juego.cantidad} nueva(s) {juego.categoria} {juego.semana}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="seccion-guias">
                <h3>Guías Populares</h3>
                <div className="guias-grid">
                    {guiasPopulares.map((guia, index) => (
                        <div key={index} className="guia-card">
                            <img src={guia.img} alt={guia.nombre} className="guia-imagen" />
                            <div className="guia-info">
                                <h4>{guia.nombre}</h4>
                                <p>{guia.titulo}</p>
                                <div className="guia-reacciones">
                                    <span>⭐ {guia.valoraciones} valoraciones</span>
                                    <span>💬 {guia.comentarios} comentarios</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



export default Comunidad;
