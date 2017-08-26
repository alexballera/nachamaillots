'use strict'
import yo from 'yo-yo'

const elem = yo`
<footer class="page-footer">
  <div class="container">
    <div class="row valign-wrapper">
      <div class="col l4 s12">
        <picture>
          <img src="images/logo.jpg" />
        </picture>
      </div>
      <div class="col l6 offset-l2 s12">
        <h2 class="white-text yellowtail-fonts">Maillots Que Impresionan!</h2>
      </div>
    </div>
  </div>
  <div class="footer-copyright">
    <div class="container">
      © 2017 Copyright Nacha Maillots
    </div>
  </div>
</footer>
`
module.exports = elem
