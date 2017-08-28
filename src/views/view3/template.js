'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.id3}">
  <div className="container" id="${NavItems.id.id3}">
    <div className="row">
      <h3 className="col s12 yellowtail-fonts white-text">Contacto</h3>
      <address className="white-text">
        Calle Santiago  Nro 1  Local , 50180 Utego, Zaragoza.
        Telf.: <a href="tel:876034189">876034189</a>
      </address>
      <div className="s12">
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
  </div>
</section>
`
module.exports = elem
