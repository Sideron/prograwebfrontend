import Estrellas from "../componentes/Estrellas"
import { useParams } from "react-router-dom"
import foto_de_perfil from "../imagenes/foto_de_perfil.jpg"

import "../estilos/Perfil.css"
import { useEffect, useState } from "react"

const Perfil = () => {
    const {id} = useParams()
    const [nombreUsuario,setNombreUsuario] = useState('')
    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const miUsuario = await fetch(`http://localhost:3001/usuarios/${parseInt(id)}`,{
                    method: 'GET'
                })
                const datosUser = await miUsuario.json()
                setNombreUsuario(datosUser.nombre)
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
            
        }
        fetchUsuario()
    },[])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <div className="col-3 perfilIMG">
                            <img src={foto_de_perfil}/>
                        </div>
                        <div className="col perfilDescripcion">
                            <h1 className="ts-2">{nombreUsuario}</h1>
                            <p>usuario@gmail.com</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="mt-2">Reseñas</h3>
                        <div className="reviewUsuario mb-3">
                            <div className="row">
                                <div className="col-8">
                                    <h2>Portal 2</h2>
                                </div>
                                <div className="col estrellas">
                                    <Estrellas number={3}/>
                                </div>
                                <p>Este juego es una maravilla Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Dignissimos similique perferendis doloremque magnam earum officia! Alias, illo nihil 
                                    suscipit est ea tempore laudantium sapiente, ut ipsa nesciunt, quod illum recusandae.
                                </p>
                            </div>
                        </div>

                        <div className="reviewUsuario mb-3">
                            <div className="row">
                                <div className="col-8">
                                    <h2>Half life</h2>
                                </div>
                                <div className="col estrellas">
                                    <Estrellas number={4}/>
                                </div>
                                <p>Ta bueno</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <h4>Opciones</h4>
                    <button className="btn btn-primary">Añadir</button>
                    <button className="btn btn-danger">Reportar</button>
                </div>
            </div>
        </div>
    </>
}

export default Perfil
