import { Product } from '../Product/Product.jsx'
import './ProductsList.css'

export const ProductsList = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Inventario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          products && products.map(product => (
            <Product key={product._id} product={product} />
          ))
        }
      </tbody>
    </table>
  )
}
