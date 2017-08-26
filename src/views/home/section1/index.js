'use strict'
import yo from 'yo-yo'
import {home} from '../createHome'

const Section1 = yo`
<section>
  <h2>Sabías qué?</h2>
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
</section>
`
export default () => {
  home.appendChild(Section1)
}
