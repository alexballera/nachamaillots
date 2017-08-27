'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.id2}">
  <div className="container" id="${NavItems.id.id2}">
    <h2 className="handlee-fonts">Catálogo</h2>
    <div class="divider"></div>
    <div className="row section">
      <h3 className="col s12 yellowtail-fonts">Maillots Vintage</h3>
      <div className="col s6 l2">
        <img src="images/maillot-vintage1.jpg" />
      </div>
      <div className="col s6 l2">
        <img src="images/maillot-vintage2.jpg" />
      </div>
    </div>
    <div class="divider"></div>
    <div className="row section">
      <h3 className="col s12 yellowtail-fonts">Maillots Animal Print</h3>
      <div className="col s6 l2">
        <img src="images/maillot-animal1.jpg" />
      </div>
      <div className="col s6 l2">
        <img src="images/maillot-animal2.jpg" />
      </div>
    </div>
    <div class="divider"></div>
    <div className="row section">
      <h3 className="col s12 yellowtail-fonts">Maillots Abstracto</h3>
      <div className="col s6 l2">
        <img src="images/maillot-abstracto1.jpg" />
      </div>
      <div className="col s6 l2">
        <img src="images/maillot-abstracto2.jpg" />
      </div>
    </div>
    <div class="divider"></div>
  </div>
</section>
`
module.exports = elem
