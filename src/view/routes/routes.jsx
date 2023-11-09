import { createHashRouter } from 'react-router-dom'
import { Home } from '../pages/Home.jsx'
import { Admin } from '../pages/Admin.jsx'
import { Layout } from '../components/Layout/Layout.jsx'

export const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: 'admin',
        Component: Admin
      }
    ]
  }
])
