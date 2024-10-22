import "../estilos/BarraVertical.css"

const BarraVertical = () => {
    return <>
        <img src="tarjetas_de_regalo.png" id="imagen-tarjeta-regalo"/>
        <h1 className="nav-titulo-vertical" id="titulo-tarjeta-regalo">TARJETAS DE REGALO DE STEAM</h1>
        <div>
            <a className="nav-link nav-enlace-vertical" href="#" id="cuerpo-tarjeta-regalo">Regala diversion</a>
        </div>
        
        <h1 className="nav-titulo-vertical">RECOMENDADOS</h1>
        <div>
            <a className="nav-link nav-enlace-vertical" href="#">Amigos</a>
            <a className="nav-link nav-enlace-vertical" href="#">Mentores</a>
            <a className="nav-link nav-enlace-vertical" href="#">Etiquetas</a>
        </div>

        <h1 className="nav-titulo-vertical">EXPLORAR CATEGORÍAS</h1>
        <div>
            <a className="nav-link nav-enlace-vertical" href="#">Lo más vendido</a>
            <a className="nav-link nav-enlace-vertical" href="#">Novedades</a>
            <a className="nav-link nav-enlace-vertical" href="#">Próximamente</a>
            <a className="nav-link nav-enlace-vertical" href="#">Promociones</a>
            <a className="nav-link nav-enlace-vertical" href="#">Títulos de RV</a>
            <a className="nav-link nav-enlace-vertical" href="#">Compatibles con controles</a>
            <a className="nav-link nav-enlace-vertical" href="#">Perfecto para Deck</a>
        </div>

        <h1 className="nav-titulo-vertical">EXPLORAR POR GÉNERO</h1>
        <div>
            <a className="nav-link nav-enlace-vertical" href="#">Free to Play</a>
            <a className="nav-link nav-enlace-vertical" href="#">Acceso anticipado</a>
            <a className="nav-link nav-enlace-vertical" href="#">Acción</a>
            <a className="nav-link nav-enlace-vertical" href="#">Aventura</a>
            <a className="nav-link nav-enlace-vertical" href="#">Carreras</a>
            <a className="nav-link nav-enlace-vertical" href="#">Casuales</a>
            <a className="nav-link nav-enlace-vertical" href="#">Deportes</a>
            <a className="nav-link nav-enlace-vertical" href="#">Estrategia</a>
            <a className="nav-link nav-enlace-vertical" href="#">Indie</a>
            <a className="nav-link nav-enlace-vertical" href="#">Multijugador masivo</a>
            <a className="nav-link nav-enlace-vertical" href="#">Rol</a>
            <a className="nav-link nav-enlace-vertical" href="#">Simuladores</a>
        </div>
    </>
}

export default BarraVertical
