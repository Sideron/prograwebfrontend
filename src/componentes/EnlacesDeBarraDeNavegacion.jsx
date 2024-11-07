import { Link } from "react-router-dom"
import { useState } from "react"
import "../estilos/EnlacesDeBarraDeNavegacion.css"

const EnlacesDeBarraDeNavegacion = (propiedades) => {
    const [enlaceSeleccionado, setEnlaceSeleccionado] = useState("")

    return <>
        <div className="collapse navbar-collapse" id="div_colapsable">
            <div className="navbar-nav">
                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "tienda" ? " active" : "")}
                    to="/tienda" onClick={() => {setEnlaceSeleccionado("tienda")}}>Tienda</Link>

                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "comunidad" ? " active" : "")}
                    to="/comunidad" onClick={() => {setEnlaceSeleccionado("comunidad")}}>Comunidad</Link>

                {propiedades.sesionIniciada
                    ?
                    <>
                        <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "perfil" ? " active" : "")}
                            to="/perfil" onClick={() => {setEnlaceSeleccionado("perfil")}}>Perfil</Link>
                
                        <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "biblioteca" ? " active" : "")}
                            to="/biblioteca" onClick={() => {setEnlaceSeleccionado("biblioteca")}}>Biblioteca</Link>
                    </>
                    :
                    <>
                        <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "ingreso" ? " active" : "")}
                            to="/ingreso" onClick={() => {setEnlaceSeleccionado("perfil")}}>Iniciar sesión</Link>
                
                        <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "registro" ? " active" : "")}
                            to="/registro" onClick={() => {setEnlaceSeleccionado("registro")}}>Registrarse</Link>
                    </>
                }
            </div>
        </div>
    </>
}

export default EnlacesDeBarraDeNavegacion