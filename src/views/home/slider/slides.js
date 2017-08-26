'use strict'
import yo from 'yo-yo'

const data = {
  class: {
    div: 'caption center-align',
    h3: 'light grey-text text-lighten-3'
  },
  slide1: {
    img: {
      src: 'images/banner-vintage.jpg',
      alt: 'Vintage'
    },
    title: 'Vintage',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis.'
  },
  slide2: {
    img: {
      src: 'images/banner-animal-print.jpg',
      alt: 'Animal Print'
    },
    title: 'Animal Print',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis.'
  },
  slide3: {
    img: {
      src: 'images/banner-abstracto.jpg',
      alt: 'Alenta'
    },
    title: 'Abstracto',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis.'
  }
}

const Slide1 = yo`
<li>
  <img src=${data.slide1.img.src} alt=${data.slide1.img.alt} />
  <div className=${data.class.div}>
    <h3 className=${data.class.h3}>${data.slide1.title}</h3>
    <p>${data.slide1.text}</p>
  </div>
</li>
`
const Slide2 = yo`
<li>
  <img src=${data.slide2.img.src} alt=${data.slide2.img.alt} />
  <div className=${data.class.div}>
    <h3 className=${data.class.h3}>${data.slide2.title}</h3>
    <p>${data.slide2.text}</p>
  </div>
</li>
`
const Slide3 = yo`
<li>
  <img src=${data.slide3.img.src} alt=${data.slide3.img.alt} />
  <div className=${data.class.div}>
    <h3 className=${data.class.h3}>${data.slide3.title}</h3>
    <p>${data.slide3.text}</p>
  </div>
</li>
`
export {Slide1, Slide2, Slide3}
