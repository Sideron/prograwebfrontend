import "../estilos/BarraDeNavegacion.css"

const BarraDeNavegacion = () => {
    return <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid" id="div-contenedor">
                {/* Logo de Steam */}
                <a className="navbar-brand" href="/">
                    <img src="logo_steam.svg" alt="Enlace a la página Steam" width="176" height="44" />
                </a>

                {/* Boton que aparecerá al colapsar el div posterior*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Div colapsable*/}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <a className="nav-link" href="/">Tienda</a>
                        <a className="nav-link" href="/comunidad">Comunidad</a>
                        <a className="nav-link" href="/acerca_de">Acerca de</a>
                        <a className="nav-link" href="/soporte">Soporte</a>
                        <a className="nav-link" href="/iniciar_sesion">Iniciar sesion</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default BarraDeNavegacion