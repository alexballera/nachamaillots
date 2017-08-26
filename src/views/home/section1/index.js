'use strict'
import yo from 'yo-yo'
import {home} from '../createHome'

const Section1 = yo`
<section className="container">
  <main className="row" >  
    <picture className="col hide-on-med-and-down l4">
      <img src="http://lorempixel.com/300/600/sports/" />
    </picture>
    <div className="col s12 l8">
      <div className="row content">
        <h2 className="col s12 center-align handlee-fonts">¿Sabías qué?</h2>
        <div className="col s12">
          <p className="right-align">El Maillot es una pieza textil usada en Gimnasia
          Rítmica y otras disciplinas tanto en presentaciones
          grupales como individuales.</p>
          <p className="right-align">Ésta malla (jersey) está elaborada en una tela ligera
          de tejido muy fino y confeccionada para aportar
          comodidad a la gimnasta, proporcionándole
          además estilo y personalidad.</p>
          <p className="right-align">Un Maillot brinda sentido gráfico, describe los
          movimientos y la temática de una presentación,
          que en conjunto con otros elementos acompañan a
          una gimnasta a la victoria dentro de su competencia.</p>
          <p className="right-align">A lo largo de los años los Maillots se han convertido en</p>
          <p className="center-align yellowtail-fonts obra-arte">Una Obra de Arte.</p>
        </div>
      </div>
    </div>
  </main>
</section>
`
export default () => {
  home.appendChild(Section1)
}
