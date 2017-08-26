'use strict'
import yo from 'yo-yo'
import {home} from '../createHome'

const Section1 = yo`
<section className="container">
  <div className="row" >  
    <div className="col hide-on-med-and-down l4">
      <img src="http://lorempixel.com/300/600/sports/" />
    </div>
    <div className="col s12 l8">
      <div className="row">
        <h2 className="col s12">Sabías qué?</h2>
        <div className="col s12">
          <p>El Maillot es una pieza textil usada en Gimnasia
          Rítmica y otras disciplinas tanto en presentaciones
          grupales como individuales.</p>
          <p>Ésta malla (jersey) está elaborada en una tela ligera
          de tejido muy fino y confeccionada para aportar
          comodidad a la gimnasta, proporcionándole
          además estilo y personalidad.</p>
          <p>Un Maillot brinda sentido gráfico, describe los
          movimientos y la temática de una presentación,
          que en conjunto con otros elementos acompañan a
          una gimnasta a la victoria dentro de su competencia.</p>
          <p>A lo largo de los años los Maillots se han convertido en</p>
          <p><span>Una Obra de Arte.</span></p>
        </div>
      </div>
    </div>
  </div>
</section>
`
export default () => {
  home.appendChild(Section1)
}
