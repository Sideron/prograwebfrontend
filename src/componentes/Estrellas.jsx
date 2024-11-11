import estrella_llena from "../imagenes/estrella_llena.png"
import estrella_vacia from "../imagenes/estrella_vacia.png"

import { useEffect, useState } from "react"

import "../estilos/Estrellas.css"

const Estrellas = (props) => {
    const [filled, setFilled] = useState(new Array(5).fill(0));

    useEffect(() => {
        const newFilled = [...filled];
        for (let i = 0; i < props.number; i++) {
            newFilled[i] = 1;
        }
        setFilled(newFilled);
    }, [props.number]);
    
    return <>
        {filled.map((x) => { 
            return <img src={x===1 ? estrella_llena : estrella_vacia} className="starIMG"/>}
        )}
    </>
}

export default Estrellas