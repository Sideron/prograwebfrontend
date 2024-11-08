import "../estilos/Ingreso.css"

const Ingreso = () => {
    return <>
        <div className="container-fluid" id="contenedor_principal_ingreso">
            <div className="row">
                <div className="col-3"></div>

                <div className="col-6">
                    <div className="row" id="contenedor_secundario1_ingreso">
                        <div className="col-8 p-4">
                            <h3 className="fw-bolder text-center">Ingreso</h3>
                        </div>
                        <div className="col-4 p-4"></div>
                    </div>

                    <div className="row" id="contenedor_secundario2_ingreso">
                        <div className="col-8 p-4">
                            <div className="mb-3 text-center">
                                <label htmlFor="cuadro_texto_usuario" className="form-label">
                                    Usuario:
                                </label>
                                <input type="text" className="form-control" id="cuadro_texto_usuario" />
                            </div>

                            <div className="mb-3 text-center">
                                <label htmlFor="cuadro_texto_contrasenia" className="form-label">
                                    Contraseña:
                                </label>
                                <input type="password" className="form-control" id="cuadro_texto_contrasenia" />
                            </div>

                            <div className="mb-3 form-check d-flex justify-content-center">
                                <input type="checkbox" className="form-check-input me-2" id="cuadro_verificacion_ver_contrasenia" />
                                <label className="form-check-label" htmlFor="cuadro_verificacion_ver_contrasenia">Mostrar contraseña</label>
                            </div>

                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
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
    </>
}

export default Ingreso