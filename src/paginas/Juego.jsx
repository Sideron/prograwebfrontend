import React from "react";
import { useParams } from "react-router-dom";
import '../estilos/Juego.css';

const Juego = () => {
    const {id} = useParams()

    const backgroundStyle = {
        backgroundImage: `url('https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1608230/page_bg_generated_v6b.jpg?t=1731334666')`,
        backgroundSize: "cover", // Ajusta la imagen para que cubra todo el área
        backgroundPosition: "center", // Centra la imagen
        backgroundRepeat: "no-repeat", // Evita que se repita
        height: "100vh", // Altura de toda la ventana
      };

    return <>
    <div style={backgroundStyle}>
        <div className="container">
            <div className="mb-0">.</div>
            <h1 className="mb-3">Este es el juego con id {id}</h1>
            <div className="row">
                <div className="col-8">
                    <video width={840} height={480} controls>
                        <source src="https://video.cloudflare.steamstatic.com/store_trailers/256948506/movie480_vp9.webm?t=1684853784"/>
                        El navegador no sporta el video
                    </video>
                    <div className="mt-3"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate minima repudiandae. Modi eum tempore quod, assumenda voluptates officiis? Excepturi sed magni adipisci autem, delectus laudantium? Eveniet error totam voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis numquam quos maxime laborum. Officia voluptate voluptatibus id quisquam deleniti sit odit, eum labore quibusdam aliquid praesentium? Dolores excepturi consectetur placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta at consequatur recusandae dicta iste non sunt ad voluptatibus deleniti iure, eius possimus distinctio dolore tenetur aperiam ratione. Reprehenderit, porro deleniti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab numquam atque cum soluta modi quaerat, eos a dolorum consectetur exercitationem sed vel! Totam id error provident nobis optio corporis dignissimos? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem laborum illo inventore facere maiores asperiores quaerat voluptatum sed mollitia, illum temporibus libero, reprehenderit, minima perferendis! Quasi, quas sapiente! Quod, rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aspernatur aperiam sapiente vero atque ratione blanditiis esse deleniti veniam fugit quia doloribus labore, vitae adipisci inventore quaerat, laudantium nulla molestiae.</p>
                </div>
                <div className="col-4">
                    <div className="details">
                        <img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1608230/header.jpg?t=1731334666"/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis esse consectetur similique unde harum maxime laboriosam hic consequuntur enim omnis nulla neque, accusantium expedita!</p>
                        <p className="devName"><b>Developer:</b> Wishfully</p>
                        <p><b>Tags:</b></p>
                        <div className="tags">
                            <a href="#">Action</a><a href="#">Puzzle</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Juego