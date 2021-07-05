import { lazy } from 'solid-js'

const index = lazy(() => import('/src/pages/index.jsx'))
const dasar = lazy(() => import('/src/pages/dasar.jsx'))

export default [
  {
    name: 'index',
    path: '/',
    component: index,
  },
  {
    name: 'dasar',
    path: '/dasar',
    component: dasar,
  },
]
