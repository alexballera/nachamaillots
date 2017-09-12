'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'
import {backgroundImageCatalogo} from '../../components/background-images'

const elem = yo`
<section id="seccion-${NavItems.id.id2}" className="container pink lighten-5">
  <div id="${NavItems.id.id2}">
    <h2 className="handlee-fonts">Diseños</h2>
    <div class="divider"></div>
    <div className="row section">
      <h3 className="col s12 yellowtail-fonts">Maillots Vintage</h3>
      <div className="col s12 l3">
        <img className="materialboxed" data-caption="Maillot" src="images/modelo-maillots-1.png" />
      </div>
      <div className="col s12 l3">
        <img className="materialboxed" data-caption="Maillot" src="images/modelo-maillots-1.png" />
      </div>
    </div>
    <div class="divider"></div>
    <div className="row section">
      <h3 className="col s12 yellowtail-fonts">Maillots Animal Print</h3>
      <div className="col s12 l3">
        <img className="materialboxed" data-caption="Maillot Animal" src="images/modelo-maillots-2.png" />
      </div>
      <div className="col s12 l3">
        <img className="materialboxed" data-caption="Maillot Animal" src="images/modelo-maillots-2.png" />
      </div>
    </div>
    <div class="divider"></div>
    <div className="row section">
      <h3 className="col s12 yellowtail-fonts">Maillots Abstracto</h3>
      <div className="col s12 l3">
        <img className="materialboxed" data-caption="Maillot Abstracto" src="images/modelo-maillots-3.png" />
      </div>
      <div className="col s12 l3">
        <img className="materialboxed" data-caption="Maillot Abstracto" src="images/modelo-maillots-3.png" />
      </div>
    </div>
    <div class="divider"></div>
    ${backgroundImageCatalogo}
  </div>
</section>
`
module.exports = elem
