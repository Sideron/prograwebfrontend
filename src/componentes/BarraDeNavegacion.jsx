import { useState } from "react"

import EnlacesDeBarraDeNavegacion from "./EnlacesDeBarraDeNavegacion"

import "../estilos/BarraDeNavegacion.css"

const BarraDeNavegacion = () => {
    const [enlaceSeleccionado, setEnlaceSeleccionado] = useState("")

    return <>
        <div className="d-flex justify-content-center bg-dark">
            <nav className="navbar navbar-expand-sm navbar-dark">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#div_colapsable" id="boton_de_despliegue">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand" href="/">
                    <img src="logo_steam.svg" alt="Logo de la página" width="176" height="44" />
                </a>

                <EnlacesDeBarraDeNavegacion enlaceSeleccionado = {enlaceSeleccionado}
                        setEnlaceSeleccionado = {setEnlaceSeleccionado} />
            </nav>
        </div>
    </>
}

export default BarraDeNavegacion
