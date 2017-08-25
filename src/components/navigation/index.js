'use strict'

import hideViews from './hideViews'
import initHome from './initHome'
import showHome from './showHome'
import showView1 from './showView1'
import showView2 from './showView2'
import showView3 from './showView3'
import showView4 from './showView4'
import showView5 from './showView5'
import notFound from './notFound'
import page from 'page'

const baseUri = '/'

const id = 'view'

const NavItems = {
  items: {
    home: 'Inicio',
    item1: 'Quienes Somos',
    item2: 'Catálogo',
    item3: 'Contacto',
    nf: 'No Encontrado'
  },
  title: {
    home: 'Inicio',
    view1: 'Quienes Somos',
    view2: 'View 2',
    view3: 'Catálogo',
    view4: 'Contacto',
    nf: 'No Encontrado'
  },
  id: {
    home: 'home',
    id1: id + '1',
    id2: id + '2',
    id3: id + '3',
    id4: id + '4',
    id5: id + '5',
    nf: 'not-found'
  },
  links: {
    home: baseUri,
    link1: baseUri + id + '1',
    link2: baseUri + id + '2',
    link3: baseUri + id + '3',
    link4: baseUri + id + '4',
    link5: baseUri + id + '5',
    nf: '*'
  }
}

const Navigation = () => {
  hideViews()
  initHome()
  page(NavItems.links.home, showHome)
  page(NavItems.links.link1, showView1)
  page(NavItems.links.link2, showView2)
  page(NavItems.links.link3, showView3)
  page(NavItems.links.link4, showView4)
  page(NavItems.links.link5, showView5)
  page(NavItems.links.nf, notFound)
  page()
}

export {Navigation, NavItems}
