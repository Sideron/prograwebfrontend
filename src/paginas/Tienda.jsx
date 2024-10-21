import BarraVertical from "../componentes/BarraVertical"

const Tienda = () => {
    return <>
        <video src="video_promocional.mp4" autoPlay="true" loop="true" width={"100%"} height={"auto"}></video>
        <div className="container mt-3">
            <div className="row">
                <div className="col-2 pt-5">
                    <BarraVertical />
                </div>
                <div className="col-10">
                    Cuerpo bajo poster
                </div>
            </div>
        </div>
    </>
}

export default Tienda