import { useContext } from 'react'
import './Product.css'
import { ProductsContext } from '../../../context/products'
import { deleteProduct } from '../../../services/products'

export const Product = ({ product }) => {
  const { dispatch } = useContext(ProductsContext)

  const handleDelete = () => {
    deleteProduct(product._id)
      .then(product => {
        window.alert('Se eliminó el producto ' + product.name)
        dispatch({ type: 'DELETE_PRODUCT', payload: product._id })
      })
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>
        <button onClick={() => dispatch({ type: 'SET_CURRENT_PRODUCT', payload: product })}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  )
}
