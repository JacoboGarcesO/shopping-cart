import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { ProductsProvider } from '../context/products'

function App () {
  return (
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  )
}

export default App
