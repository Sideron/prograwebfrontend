import { Link } from "react-router-dom"
import { useState } from "react"
import "../estilos/EnlacesDeBarraDeNavegacion.css"

const EnlacesDeBarraDeNavegacion = () => {
    const [enlaceSeleccionado, setEnlaceSeleccionado] = useState("")

    return <>
        <div className="collapse navbar-collapse" id="div_colapsable">
            <div className="navbar-nav">
                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "tienda" ? " active" : "")}
                    to="/tienda" onClick={() => {setEnlaceSeleccionado("tienda")}}>Tienda</Link>

                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "biblioteca" ? " active" : "")}
                    to="/biblioteca" onClick={() => {setEnlaceSeleccionado("biblioteca")}}>Biblioteca</Link>

                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "comunidad" ? " active" : "")}
                    to="/comunidad" onClick={() => {setEnlaceSeleccionado("comunidad")}}>Comunidad</Link>

                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "perfil" ? " active" : "")}
                    to="/perfil" onClick={() => {setEnlaceSeleccionado("perfil")}}>Perfil</Link>
            </div>
        </div>
    </>
}

export default EnlacesDeBarraDeNavegacion