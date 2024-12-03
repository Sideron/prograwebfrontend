import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Registro = (props) => {
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [show, setShow] = useState(false)

    const cambiarNombre = (evt) => {
        setName(evt.target.value)
    }

    const cambiarContra = (evt) => {
        setPassword(evt.target.value)
    }

    const cambiarContra2 = (evt) => {
        setPassword2(evt.target.value)
    }

    const mostrarContra = (evt) => {
        console.log(evt)
        setShow(!show)
    }

    const Registrar = () => {
        if(password === password2){
            setError("")
            enviarRegistro(name,password)
        }else{
            setError("Usuario o contraseña invalido")
        }
    }

    const enviarRegistro = async (nom, contra) => {
        try {
            const solicitud = await fetch('http://localhost:3001/clientes',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuario: nom, contrasenia: contra })
            })
            const logeo = await solicitud.json()
            if(logeo.error === ""){
                setError("")
                navigate('/ingreso')
            }else{
                setError(logeo.error)
            }
                console.log(logeo)
        } catch (error) {
            console.log(error)
        }
    }

    return <>
        <div className="container-fluid" id="contenedor_principal_ingreso">
            <div className="row">
                <div className="col-3"></div>

                <div className="col-6">
                    <div className="row" id="contenedor_secundario1_ingreso">
                        <div className="p-4">
                            <h3 className="fw-bolder text-center">Registro</h3>
                        </div>
                    </div>

                    <div className="row" id="contenedor_secundario2_ingreso">
                        <div className="p-4">

                            <div className="mb-3 text-center">
                                <label htmlFor="cuadro_texto_usuario" className="form-label">
                                    Usuario:
                                </label>
                                <input type="text" className="form-control" value={name} onChange={cambiarNombre} id="cuadro_texto_usuario" />
                            </div>

                            <div className="mb-3 text-center">
                                <label htmlFor="cuadro_texto_contrasenia" className="form-label">
                                    Crea una contraseña:
                                </label>
                                <input type={show?"text":"password"} className="form-control" value={password} onChange={cambiarContra} id="cuadro_texto_contrasenia" />
                            </div>

                            <div className="mb-3 text-center">
                                <label htmlFor="cuadro_texto_contrasenia" className="form-label">
                                    Confirma la contraseña:
                                </label>
                                <input type={show?"text":"password"} className="form-control" value={password2} onChange={cambiarContra2} id="cuadro_texto_contrasenia" />
                            </div>

                            {error === ""
                                ?
                                <></>
                                :
                                <div className="alert alert-danger p-1">
                                    {error}
                                </div>
                            }

                            <div className="mb-3 form-check d-flex justify-content-center">
                                <input type="checkbox" checked={show} onChange={mostrarContra} className="form-check-input me-2" id="cuadro_verificacion_ver_contrasenia" />
                                <label className="form-check-label" htmlFor="cuadro_verificacion_ver_contrasenia">Mostrar contraseña</label>
                            </div>

                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-primary" onClick={() => {Registrar()}}>Registrarse</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3"></div>
            </div>
        </div>
    </>
}

export default Registro
