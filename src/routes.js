import { lazy } from 'solid-js'

const index = lazy(() => import('/src/pages/index.jsx'))
const angka = lazy(() => import('/src/pages/angka.jsx'))
const dasar = lazy(() => import('/src/pages/dasar.jsx'))
const hello = lazy(() => import('/src/pages/hello.jsx'))
const method = lazy(() => import('/src/pages/method.jsx'))
const nilai = lazy(() => import('/src/pages/nilai.jsx'))
const perulangan = lazy(() => import('/src/pages/perulangan.jsx'))
const template = lazy(() => import('/src/pages/template.jsx'))

export default [
  {
    name: 'index',
    path: '/',
    component: index,
  },
  {
    name: 'angka',
    path: '/angka',
    component: angka,
  },
  {
    name: 'dasar',
    path: '/dasar',
    component: dasar,
  },
  {
    name: 'hello',
    path: '/hello',
    component: hello,
  },
  {
    name: 'method',
    path: '/method',
    component: method,
  },
  {
    name: 'nilai',
    path: '/nilai',
    component: nilai,
  },
  {
    name: 'perulangan',
    path: '/perulangan',
    component: perulangan,
  },
  {
    name: 'template',
    path: '/template',
    component: template,
  },
]
