import React from 'react';
import '../estilos/Comunidad.css'; 

export function Footer() {
    return <>
    <div id="footer" role="contentinfo" className="">
          <div className="footer_content">
            <div className="rule"></div>
            <div id="footer_logo_steam">
              <img
                src="./Crear tu cuenta_files/logo_steam_footer.png"
                alt="Valve Software"
                border="0"
              />
            </div>

            <div id="footer_logo">
              <a href="http://www.valvesoftware.com/" target="_blank" rel=""
                ><img
                  src="./Crear tu cuenta_files/footerLogo_valve_new.png"
                  alt="Valve Software"
                  border="0"
              /></a>
            </div>
            <div id="footer_text" data-panel='{"flow-children":"row"}'>
              <div>
                © 2024 Valve Corporation. Todos los derechos reservados. Todas
                las marcas registradas pertenecen a sus respectivos dueños en
                EE. UU. y otros países.
              </div>
              <div>
                Todos los precios incluyen IVA (donde sea
                aplicable).&nbsp;&nbsp;

                <a
                  href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_"
                  target="_blank"
                  rel=""
                  >Política de Privacidad</a
                >
                &nbsp; <span aria-hidden="true">|</span> &nbsp;
                <a
                  href="https://store.steampowered.com/legal/?snr=1_44_44_"
                  target="_blank"
                  rel=""
                  >Información legal</a
                >
                &nbsp; <span aria-hidden="true">|</span> &nbsp;
                <a
                  href="https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_"
                  target="_blank"
                  rel=""
                  >Acuerdo de Suscriptor a Steam</a
                >
                &nbsp; <span aria-hidden="true">|</span> &nbsp;
                <a
                  href="https://store.steampowered.com/steam_refunds/?snr=1_44_44_"
                  target="_blank"
                  rel=""
                  >Reembolsos</a
                >
                &nbsp; <span aria-hidden="true">|</span> &nbsp;
                <a
                  href="https://store.steampowered.com/account/cookiepreferences/?snr=1_44_44_"
                  target="_blank"
                  rel=""
                  >Cookies</a
                >
              </div>
              <div className="responsive_optin_link">
                <div
                  className="btn_medium btnv6_grey_black"
                  onclick="Responsive_RequestMobileView()"
                >
                  <span>Ver versión para móviles</span>
                </div>
              </div>
            </div>

            <div></div>
            <br />

            <div className="rule"></div>

            <div className="valve_links" data-panel='{"flow-children":"row"}'>
              <a
                href="http://www.valvesoftware.com/about"
                target="_blank"
                rel=""
                >Acerca de Valve</a
              >
              &nbsp; <span aria-hidden="true">|</span> &nbsp;<a
                href="http://www.valvesoftware.com/"
                target="_blank"
                rel=""
                >Empleo</a
              >
              &nbsp; <span aria-hidden="true">|</span> &nbsp;<a
                href="http://www.steampowered.com/steamworks/"
                target="_blank"
                rel=""
                >Steamworks</a
              >
              &nbsp; <span aria-hidden="true">|</span> &nbsp;<a
                href="https://partner.steamgames.com/steamdirect"
                target="_blank"
                rel=""
                >Distribución de Steam</a
              >
              &nbsp; <span aria-hidden="true">|</span> &nbsp;<a
                href="https://help.steampowered.com/es-419/?snr=1_44_44_"
                >Soporte</a
              >
              &nbsp; <span aria-hidden="true">|</span> &nbsp;<a
                href="https://store.steampowered.com/digitalgiftcards/?snr=1_44_44_"
                target="_blank"
                rel=""
                >Tarjetas de regalo</a
              >
              &nbsp; <span aria-hidden="true">|</span> &nbsp;<a
                href="https://steamcommunity.com/linkfilter/?u=http%3A%2F%2Fwww.facebook.com%2FSteam"
                target="_blank"
                rel=" noopener"
                ><img
                  src="./Crear tu cuenta_files/ico_facebook.png"
                  alt="Facebook"
                />
                Steam</a
              >
              &nbsp; <span aria-hidden="true">|</span> &nbsp;<a
                href="http://twitter.com/steam"
                target="_blank"
                rel=""
                ><img src="./Crear tu cuenta_files/ico_twitter.png" alt="X" />
                @steam</a
              >
            </div>
            <div className="extra_space"></div>
          </div>
        </div>
        </>
}

export default Footer