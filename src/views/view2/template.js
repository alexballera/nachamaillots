'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'
import {backgroundImageCatalogo} from '../../components/background-images'
import data from './data.js'

const elem = yo`
<section id="seccion-${NavItems.id.id2}" className="container pink lighten-5">
  <div id="${NavItems.id.id2}">
    <h2 className="handlee-fonts">Diseños</h2>
    <div class="divider"></div>
    <div className="section">
      <h3 className="col s12 yellowtail-fonts">${data.section1.title}</h3>
      <div className="row images-container">
        <div className="col s12 l4">
          <img className="materialboxed" data-caption=${data.section1.images.img1.dataCaption} src=${data.section1.images.img1.src} />
        </div>
        <div className="col s12 l4">
          <img className="materialboxed" data-caption=${data.section1.images.img2.dataCaption} src=${data.section1.images.img2.src} />
        </div>
      </div>
    </div>
    <div class="divider"></div>

    <div className="section">
      <h3 className="col s12 yellowtail-fonts">${data.section2.title}</h3>
      <div className="row images-container">
        <div className="col s12 l4">
          <img className="materialboxed" data-caption=${data.section2.images.img1.dataCaption} src=${data.section2.images.img1.src} />
        </div>
        <div className="col s12 l4">
          <img className="materialboxed" data-caption=${data.section2.images.img2.dataCaption} src=${data.section2.images.img2.src} />
        </div>
      </div>
    </div>
    <div class="divider"></div>

    <div className="section">
      <h3 className="col s12 yellowtail-fonts">${data.section3.title}</h3>
      <div className="row images-container">
        <div className="col s12 l4">
          <img className="materialboxed" data-caption=${data.section3.images.img1.dataCaption} src=${data.section3.images.img1.src} />
        </div>
        <div className="col s12 l4">
          <img className="materialboxed" data-caption=${data.section3.images.img2.dataCaption} src=${data.section3.images.img2.src} />
        </div>
      </div>
    </div>
    ${backgroundImageCatalogo}
  </div>
</section>
`
module.exports = elem
