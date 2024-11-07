import { Link } from "react-router-dom"
import EnlacesDeBarraDeNavegacion from "./EnlacesDeBarraDeNavegacion"

import "../estilos/BarraDeNavegacion.css"

const BarraDeNavegacion = (propiedades) => {
    return <>
        <div className="d-flex justify-content-center" style={{minHeight : "104px", backgroundColor : "rgb(23, 29, 37)"}}>
            <nav className="navbar navbar-expand-md navbar-dark">
                <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse"
                        data-bs-target="#div_colapsable">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link className="navbar-brand" to="/">
                    <img src="logo_steam.svg" alt="Logo de la página" width="176" height="44" />
                </Link>

                <EnlacesDeBarraDeNavegacion sesionIniciada = {propiedades.sesionIniciada} />
            </nav>
        </div>
    </>
}

export default BarraDeNavegacion
