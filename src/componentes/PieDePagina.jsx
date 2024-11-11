import logo_de_valve from "../imagenes/logo_de_valve.png"
import logo_de_steam_footer from "../imagenes/logo_de_steam_footer.png"
import icono_de_facebook from "../imagenes/icono_de_facebook.png"
import icono_de_x from "../imagenes/icono_de_x.png"

import { Link } from "react-router-dom"

import "../estilos/PieDePagina.css"

const PieDePagina = () => {
    return <>
        <div id="contenedor_principal_pie_de_pagina">
            <div className="container">
                <div className="row pt-3" id="fila1_pie_de_pagina">
                    <div className="d-flex justify-content-around">
                        <img className="" src={logo_de_valve} alt="Logo de Valve" width={"88px"} height={"25px"} />
                        <img className="" src={logo_de_steam_footer} alt="Logo de Steam" width={"92px"} height={"25px"} />
                    </div>
                </div>

                <div className="row pt-3" id="fila2_pie_de_pagina">
                    <div className="text-center">
                        © 2024 Valve Corporation. Todos los derechos reservados. Todas las marcas 
                        registradas pertenecen a sus respectivos dueños en EE. UU. y otros países. 
                    </div>
                </div>

                <div className="row pb-3" id="fila3_pie_de_pagina">
                    <div className="text-center">
                        Todos los precios incluyen IVA (donde sea aplicable).
                        <Link className="enlace_pie_de_pagina" to="#">Política de Privacidad</Link>
                        <Link className="enlace_pie_de_pagina" to="#">Información legal</Link>
                        <Link className="enlace_pie_de_pagina" to="#">Acuerdo de Suscriptor a Steam</Link>
                        <Link className="enlace_pie_de_pagina" to="#">Reembolsos</Link>
                        <Link className="enlace_pie_de_pagina" to="#">Cookies</Link>
                    </div>
                </div>

                <div className="row pt-3" id="fila4_pie_de_pagina">
                    <div className="text-center">
                        <Link className="enlace_pie_de_pagina" to="#">Acerca de Valve</Link>
                        <Link className="enlace_pie_de_pagina" to="#">Empleo</Link>
                        <Link className="enlace_pie_de_pagina" to="#">Steamworks</Link>
                        <Link className="enlace_pie_de_pagina" to="#">Distribución de Steam</Link>
                        <Link className="enlace_pie_de_pagina" to="#">Soporte</Link>
                        <Link className="enlace_pie_de_pagina" to="#">Tarjetas de regalo</Link>
                        <Link className="enlace_pie_de_pagina" to="#">
                            <img className="me-1" src={icono_de_facebook} alt="Ícono de Facebook" />Steam
                        </Link>
                        <Link className="enlace_pie_de_pagina" to="#">
                            <img className="me-1" src={icono_de_x} alt="Ícono de X" />@steam
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PieDePagina