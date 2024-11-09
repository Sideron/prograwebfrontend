import startH from "../imgs/star-hollow.png"
import startF from "../imgs/star-filled.png"
import "../estilos/Estrellas.css"
import { useEffect, useState } from "react"
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
            return <img src={x===1?startF:startH} className="starIMG"/>}
            )}
    </>
}

export default Estrellas