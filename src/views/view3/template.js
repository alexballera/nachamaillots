'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.id3}">
  <div id="${NavItems.id.id3}">
    <h1>Contacto</h1>
  </div>
</section>
`
module.exports = elem
