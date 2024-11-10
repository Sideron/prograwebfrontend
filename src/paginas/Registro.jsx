import { useState } from "react"
import "../estilos/Ingreso.css"
import { useNavigate } from "react-router-dom"
import Footer from "../componentes/Footer"

const Registro = (props) => {
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const cambiarNombre = (evt) => {
        setName(evt.target.value)
    }

    const cambiarContra = (evt) => {
        setPassword(evt.target.value)
    }

    const mostrarContra = (evt) => {
        console.log(evt)
        setShow(!show)
    }

    const Registrar = () => {
        if(name === "user" && password === "password"){
            setError("")
            props.iniciarSesion(true)
            navigate("/perfil")
        }else{
            setError("Usuario o contraseña invalido")
        }
    }
    return <>
        <div className="container-fluid" id="contenedor_principal_ingreso">
            <div className="row">
                <div className="col-3"></div>

                <div className="col-6">
                    <div className="row" id="contenedor_secundario1_ingreso">
                        <div className="col-8 p-4">
                            <h3 className="fw-bolder text-center">Registrarse</h3>
                        </div>
                        <div className="col-4 p-4"></div>
                    </div>

                    <div className="row" id="contenedor_secundario2_ingreso">
                        <div className="col-8 p-4">
                            <div className="mb-3 text-center">
                                <label htmlFor="cuadro_texto_usuario" className="form-label">
                                    Ingresa tu Correo:
                                </label>
                                <input type="text" className="form-control" value={name} onChange={cambiarNombre} id="cuadro_texto_usuario" />
                            </div>

                            <div className="mb-3 text-center">
                                <label htmlFor="cuadro_texto_usuario" className="form-label">
                                    Confima tu Correo:
                                </label>
                                <input type="text" className="form-control" value={name} onChange={cambiarNombre} id="cuadro_texto_usuario" />
                            </div>

                            <div className="mb-3 text-center">
                                <label htmlFor="cuadro_texto_contrasenia" className="form-label">
                                    País de Residencia:
                                </label>
                                <input type={show?"text":"password"} className="form-control" value={password} onChange={cambiarContra} id="cuadro_texto_contrasenia" />
                            </div>
                            {error===""?<></>:<div className="alert alert-danger p-1">{error}</div>}

                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-primary" onClick={() => {Registrar()}}>Iniciar sesión</button>
                            </div>
                        </div>

                        <div className="col-4 p-4" style={{alignContent : "center"}}>
                            <img src="placeholder.png" alt="imagen temporal" width={"100%"}/>
                        </div>
                    </div>
                </div>

                <div className="col-3"></div>
            </div>
        </div>
        <Footer/>
    </>
}

export default Registro