import { useState } from "react"
import { Link } from "react-router-dom"
import EnlacesDeBarraDeNavegacion from "./EnlacesDeBarraDeNavegacion"

const BarraDeNavegacion = (propiedades) => {
    const [enlaceSeleccionado, setEnlaceSeleccionado] = useState("")

    return <>
        <div className="d-flex justify-content-center" style={{backgroundColor : "rgb(23, 29, 37)"}}>
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler mx-4" type="button"
                        data-bs-toggle="collapse" data-bs-target="#contenedor_de_enlaces_barra">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link className="navbar-brand mx-4" to="/" onClick={() => {setEnlaceSeleccionado("/")}}>
                    <img src="logo_steam.svg" alt="Logo de la página" height="44" />
                </Link>

                <EnlacesDeBarraDeNavegacion sesionIniciada = {propiedades.sesionIniciada}
                                            enlaceSeleccionado = {enlaceSeleccionado}
                                            setEnlaceSeleccionado = {setEnlaceSeleccionado} />
            </nav>
        </div>
    </>
}

export default BarraDeNavegacion
