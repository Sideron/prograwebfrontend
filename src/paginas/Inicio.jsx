import "./Inicio.css"

const Inicio = () => {
    return <>
        <header className="hero">
        <h1>Bienvenido a Steam</h1>
        <p>Descubre los juegos más emocionantes y adéntrate en un mundo de aventuras.</p>
        <a href="/tienda" className="btn-primary">Explorar Juegos</a>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="feature">
          <h3>Variedad de Juegos</h3>
          <p>Encuentra desde clásicos hasta los últimos lanzamientos.</p>
        </div>
        <div className="feature">
          <h3>Comunidad</h3>
          <p>Conecta con otros jugadores y comparte tus experiencias.</p>
        </div>
        <div className="feature">
          <h3>Ranking Global</h3>
          <p>Compite para ser el mejor en la clasificación mundial.</p>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="games">
        <h2>Nuestros Juegos</h2>
        <div className="game-list">
          <div className="game-card">
            <h4>Juego 1</h4>
            <p>Aventura épica en un mundo desconocido.</p>
          </div>
          <div className="game-card">
            <h4>Juego 2</h4>
            <p>Enfréntate a otros jugadores en combate.</p>
          </div>
          <div className="game-card">
            <h4>Juego 3</h4>
            <p>Descubre misterios en un ambiente de suspenso.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <p>¿Tienes preguntas? ¡Contáctanos!</p>
        <a href="#contact-form" className="btn-outline">Enviar Mensaje</a>
      </section>
    </>
}

export default Inicio
