'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'
import {backgroundImageContacto} from '../../components/background-images'

const elem = yo`
<section id="seccion-${NavItems.id.id3}">
  <div className="container grey lighten-5" id="${NavItems.id.id3}">
    <div className="row">
      <h3 className="col s12 handlee-fonts">Contacto</h3>
      <address>
        Calle Santiago  Nro 1  Local , 50180 Utego, Zaragoza.
        Telf.: <a href="tel:876034189">876034189</a>
      </address>
      <div className="s12 center-align">
        <iframe
          width="800"
          height="650"
          frameborder="0"
          style="border:0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDcxOoICiWQMHRKp8guwwf4RQ2xItWPXqw
          &q=Calle+Santiago+Número+1,Utego+Zaragoza"
          allowfullscreen>
        </iframe>
      </div>
    </div>
    ${backgroundImageContacto}
  </div>
</section>
`
module.exports = elem
