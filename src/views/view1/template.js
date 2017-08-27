'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.id1}">
  <div id="${NavItems.id.id1}" className="container">
    <h2>¿Quiénes Somos?</h2>
    <div className="row">
      <div className="col s6"></div>
      <div className="col s6"></div>
    </div>
  </div>
</section>
`
module.exports = elem
